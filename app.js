/* ============================================================
   PoojaSetu — App Logic
   Sections below:
   1. State & persistence (favorites, checklist, language)
   2. i18n helpers
   3. Rendering: pooja grid, story grid, mantra grid, favorites
   4. Pooja detail overlay (tabs: prep / steps / katha / mantra)
   5. Pooja Mode (distraction-free, large-text view)
   6. Text-to-speech
   7. Search
   8. Nav / misc wiring
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- 1. STATE ---------------- */
  const state = {
    lang: localStorage.getItem("ps_lang") || "en",
    favorites: JSON.parse(localStorage.getItem("ps_favorites") || "[]"),
    checklist: JSON.parse(localStorage.getItem("ps_checklist") || "{}"), // { poojaId: [itemIndex,...] }
    currentPooja: null,
    currentStep: 0
  };

  function saveFavorites() { localStorage.setItem("ps_favorites", JSON.stringify(state.favorites)); }
  function saveChecklist() { localStorage.setItem("ps_checklist", JSON.stringify(state.checklist)); }
  function isFavorite(id) { return state.favorites.includes(id); }
  function toggleFavorite(id) {
    if (isFavorite(id)) state.favorites = state.favorites.filter(f => f !== id);
    else state.favorites.push(id);
    saveFavorites();
    renderFavorites();
    renderPoojaGrid(); // refresh heart states on cards
    showToast(isFavorite(id)
      ? (state.lang === "en" ? "Saved to favorites" : "ఇష్టమైనవిగా సేవ్ చేయబడింది")
      : (state.lang === "en" ? "Removed from favorites" : "ఇష్టమైనవి నుండి తీసివేయబడింది"));
  }

  const findPooja = id => POOJAS.find(p => p.id === id);

  /* ---------------- 2. I18N ---------------- */
  function t(key) {
    const entry = UI_TEXT[key];
    if (!entry) return key;
    return entry[state.lang] || entry.en;
  }

  function applyLanguage() {
    document.documentElement.setAttribute("data-lang", state.lang);
    document.documentElement.setAttribute("lang", state.lang === "te" ? "te" : "en");

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (UI_TEXT[key]) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (UI_TEXT[key]) el.setAttribute("placeholder", t(key));
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.langBtn === state.lang);
    });

    // Re-render dynamic content so pooja names/descriptions switch too
    renderPoojaGrid();
    renderStoryGrid();
    renderMantraGrid();
    renderFavorites();
    if (state.currentPooja) openDetail(state.currentPooja.id, true);
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("ps_lang", lang);
    applyLanguage();
  }

  /* ---------------- 3. RENDERING: GRIDS ---------------- */
  function poojaCardHTML(p) {
    const fav = isFavorite(p.id);
    return `
      <article class="pooja-card" style="--card-accent:${p.color}" data-open="${p.id}" tabindex="0" role="button" aria-label="${p.name[state.lang]}">
        <div class="pooja-card-top">
          <div class="pooja-medallion" aria-hidden="true">${p.icon}</div>
          <button type="button" class="fav-btn ${fav ? 'active' : ''}" data-fav="${p.id}" aria-label="Save ${p.name.en}">${fav ? '♥' : '♡'}</button>
        </div>
        <h3>${p.name[state.lang]}</h3>
        <p class="tagline">${p.tagline[state.lang]}</p>
        <p class="desc">${p.description[state.lang]}</p>
      </article>`;
  }

  function renderPoojaGrid() {
    const grid = document.getElementById("poojaGrid");
    grid.innerHTML = POOJAS.map(poojaCardHTML).join("");
    wireCardEvents(grid);
  }

  function renderFavorites() {
    const grid = document.getElementById("favGrid");
    const emptyMsg = document.getElementById("favEmptyMsg");
    const favPoojas = POOJAS.filter(p => isFavorite(p.id));
    if (favPoojas.length === 0) {
      grid.innerHTML = "";
      emptyMsg.classList.remove("hidden");
    } else {
      emptyMsg.classList.add("hidden");
      grid.innerHTML = favPoojas.map(poojaCardHTML).join("");
      wireCardEvents(grid);
    }
  }

  function wireCardEvents(container) {
    container.querySelectorAll("[data-open]").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-fav]")) return; // heart click handled separately
        openDetail(card.dataset.open);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(card.dataset.open); }
      });
    });
    container.querySelectorAll("[data-fav]").forEach(btn => {
      btn.addEventListener("click", (e) => { e.stopPropagation(); toggleFavorite(btn.dataset.fav); });
    });
  }

  function renderStoryGrid() {
    const grid = document.getElementById("storyGrid");
    grid.innerHTML = POOJAS.map(p => {
      const snippet = p.katha.simple[state.lang] || p.katha.simple.en;
      return `
      <article class="story-card">
        <h3>${p.icon} ${p.katha.title[state.lang]}</h3>
        <p class="story-snippet">${truncate(snippet, 130)}</p>
        <div class="story-actions">
          <button type="button" class="mini-btn" data-story-open="${p.id}">${t("readStory")}</button>
          <button type="button" class="mini-btn" data-story-listen="${p.id}">🔊 ${t("listenBtn")}</button>
        </div>
      </article>`;
    }).join("");

    grid.querySelectorAll("[data-story-open]").forEach(btn => {
      btn.addEventListener("click", () => openDetail(btn.dataset.storyOpen, false, "katha"));
    });
    grid.querySelectorAll("[data-story-listen]").forEach(btn => {
      btn.addEventListener("click", () => {
        const p = findPooja(btn.dataset.storyListen);
        speak(p.katha.story[state.lang] || p.katha.story.en);
      });
    });
  }

  function renderMantraGrid() {
    const grid = document.getElementById("mantraGrid");
    let html = "";
    POOJAS.forEach(p => {
      p.mantras.forEach((m, i) => {
        html += `
        <article class="mantra-card">
          <h4>${p.icon} ${m.title[state.lang]}</h4>
          <p class="mantra-text">${m.text[state.lang]}</p>
          <p class="mantra-meaning">${m.meaning[state.lang]}</p>
          <div class="mantra-actions">
            <button type="button" class="mini-btn" data-mantra-listen="${p.id}:${i}">🔊 ${t("listenBtn")}</button>
          </div>
        </article>`;
      });
    });
    grid.innerHTML = html;
    grid.querySelectorAll("[data-mantra-listen]").forEach(btn => {
      btn.addEventListener("click", () => {
        const [pid, idx] = btn.dataset.mantraListen.split(":");
        const m = findPooja(pid).mantras[+idx];
        speak(m.text[state.lang] || m.text.en);
      });
    });
  }

  function truncate(str, n) { return str.length > n ? str.slice(0, n).trim() + "…" : str; }

  /* ---------------- 4. DETAIL OVERLAY ---------------- */
  const overlay = document.getElementById("detailOverlay");

  function openDetail(id, skipStepReset, jumpToTab) {
    const p = findPooja(id);
    if (!p) return;
    state.currentPooja = p;
    if (!skipStepReset) state.currentStep = 0;

    document.getElementById("detailIcon").textContent = p.icon;
    document.getElementById("detailTitle").textContent = p.name[state.lang];
    const favBtn = document.getElementById("detailFavBtn");
    favBtn.textContent = isFavorite(p.id) ? "♥" : "♡";
    favBtn.classList.toggle("active", isFavorite(p.id));
    favBtn.onclick = () => { toggleFavorite(p.id); favBtn.textContent = isFavorite(p.id) ? "♥" : "♡"; favBtn.classList.toggle("active", isFavorite(p.id)); };

    renderChecklist(p);
    renderStep(p);
    renderKatha(p);
    renderDetailMantras(p);

    switchTab(jumpToTab || document.querySelector(".tab-btn.active")?.dataset.tab || "prep");

    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeDetail() {
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
    speechSynthesis.cancel();
  }

  document.getElementById("detailBackBtn").addEventListener("click", closeDetail);

  function switchTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tabName));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.toggle("active", p.id === "pane-" + tabName));
  }
  document.getElementById("detailTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (btn) switchTab(btn.dataset.tab);
  });

  /* ---- Preparation / checklist ---- */
  function renderChecklist(p) {
    const list = document.getElementById("checklist");
    const checked = state.checklist[p.id] || [];
    list.innerHTML = p.items.map((item, i) => `
      <li class="${checked.includes(i) ? 'checked' : ''}" data-idx="${i}">
        <input type="checkbox" ${checked.includes(i) ? 'checked' : ''} aria-label="${item[state.lang]}">
        <span class="item-label">${item[state.lang]}</span>
      </li>`).join("");

    list.querySelectorAll("li").forEach(li => {
      li.querySelector("input").addEventListener("change", () => {
        const idx = +li.dataset.idx;
        const arr = state.checklist[p.id] || [];
        const pos = arr.indexOf(idx);
        if (pos > -1) arr.splice(pos, 1); else arr.push(idx);
        state.checklist[p.id] = arr;
        saveChecklist();
        li.classList.toggle("checked");
        updatePrepProgress(p);
      });
    });
    updatePrepProgress(p);
  }

  function updatePrepProgress(p) {
    const checked = (state.checklist[p.id] || []).length;
    const total = p.items.length;
    document.getElementById("prepProgressFill").style.width = total ? (checked / total * 100) + "%" : "0%";
    document.getElementById("prepProgressLabel").innerHTML = `${checked} / ${total} <span>${t("itemsProgress")}</span>`;
  }

  /* ---- Steps ---- */
  function renderStep(p) {
    const step = p.steps[state.currentStep];
    document.getElementById("stepTitle").textContent = step.title[state.lang];
    document.getElementById("stepText").textContent = step.text[state.lang];
    document.getElementById("stepProgressLabel").textContent = t("stepOf")
      .replace("{n}", state.currentStep + 1).replace("{total}", p.steps.length);
    document.getElementById("stepProgressFill").style.width = ((state.currentStep + 1) / p.steps.length * 100) + "%";
    document.getElementById("stepPrevBtn").disabled = state.currentStep === 0;
    document.getElementById("stepNextBtn").textContent = ""; // reset then set below via i18n span pattern
    const nextBtn = document.getElementById("stepNextBtn");
    nextBtn.textContent = state.currentStep === p.steps.length - 1
      ? (state.lang === "en" ? "Finish" : "పూర్తి")
      : t("nextBtn");
  }

  document.getElementById("stepPrevBtn").addEventListener("click", () => {
    if (state.currentStep > 0) { state.currentStep--; renderStep(state.currentPooja); }
  });
  document.getElementById("stepNextBtn").addEventListener("click", () => {
    const p = state.currentPooja;
    if (state.currentStep < p.steps.length - 1) {
      state.currentStep++;
      renderStep(p);
    } else {
      showToast(t("completeMsg"));
    }
  });
  document.getElementById("stepListenBtn").addEventListener("click", () => {
    const p = state.currentPooja;
    const step = p.steps[state.currentStep];
    speak(step.title[state.lang] + ". " + step.text[state.lang]);
  });

  /* ---- Katha ---- */
  function renderKatha(p) {
    document.getElementById("kathaTitle").textContent = p.katha.title[state.lang];
    const note = document.getElementById("teluguNote");
    const useTelugu = state.lang === "te" && p.hasFullTelugu;
    note.classList.toggle("hidden", !(state.lang === "te" && !p.hasFullTelugu));
    document.getElementById("kathaStory").textContent = useTelugu ? p.katha.story.te : p.katha.story.en;
    document.getElementById("kathaSimpleBox").classList.add("hidden");
  }
  document.getElementById("kathaListenBtn").addEventListener("click", () => {
    speak(document.getElementById("kathaStory").textContent);
  });
  document.getElementById("kathaExplainBtn").addEventListener("click", () => {
    const p = state.currentPooja;
    const box = document.getElementById("kathaSimpleBox");
    const useTelugu = state.lang === "te" && p.hasFullTelugu;
    document.getElementById("kathaSimpleText").textContent = useTelugu ? p.katha.simple.te : p.katha.simple.en;
    box.classList.remove("hidden");
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  /* ---- Mantras (inside detail) ---- */
  function renderDetailMantras(p) {
    const wrap = document.getElementById("detailMantraList");
    wrap.innerHTML = p.mantras.map((m, i) => `
      <article class="mantra-card">
        <h4>${m.title[state.lang]}</h4>
        <p class="mantra-text">${m.text[state.lang]}</p>
        <p class="mantra-meaning">${m.meaning[state.lang]}</p>
        <div class="mantra-actions">
          <button type="button" class="mini-btn" data-dm-listen="${i}">🔊 ${t("listenBtn")}</button>
        </div>
      </article>`).join("");
    wrap.querySelectorAll("[data-dm-listen]").forEach(btn => {
      btn.addEventListener("click", () => {
        const m = p.mantras[+btn.dataset.dmListen];
        speak(m.text[state.lang]);
      });
    });
  }

  /* ---------------- 5. POOJA MODE ---------------- */
  const poojaMode = document.getElementById("poojaMode");

  function enterPoojaMode() {
    if (!state.currentPooja) return;
    renderPoojaModeStep();
    poojaMode.classList.remove("hidden");
  }
  function exitPoojaMode() {
    poojaMode.classList.add("hidden");
    speechSynthesis.cancel();
    renderStep(state.currentPooja); // keep the tabbed view in sync
  }
  function renderPoojaModeStep() {
    const p = state.currentPooja;
    const step = p.steps[state.currentStep];
    document.getElementById("pmIcon").textContent = p.icon;
    document.getElementById("pmName").textContent = p.name[state.lang];
    document.getElementById("pmProgress").textContent = t("stepOf")
      .replace("{n}", state.currentStep + 1).replace("{total}", p.steps.length);
    document.getElementById("pmText").textContent = step.title[state.lang] + " — " + step.text[state.lang];
  }
  document.getElementById("enterPoojaModeBtn").addEventListener("click", enterPoojaMode);
  document.getElementById("poojaModeExit").addEventListener("click", exitPoojaMode);
  document.getElementById("pmPrevBtn").addEventListener("click", () => {
    if (state.currentStep > 0) { state.currentStep--; renderPoojaModeStep(); }
  });
  document.getElementById("pmNextBtn").addEventListener("click", () => {
    const p = state.currentPooja;
    if (state.currentStep < p.steps.length - 1) { state.currentStep++; renderPoojaModeStep(); }
    else showToast(t("completeMsg"));
  });
  document.getElementById("pmListenBtn").addEventListener("click", () => {
    speak(document.getElementById("pmText").textContent);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!poojaMode.classList.contains("hidden")) exitPoojaMode();
      else if (!overlay.classList.contains("hidden")) closeDetail();
    }
  });

  /* ---------------- 6. TEXT-TO-SPEECH ---------------- */
  function speak(text) {
    if (!("speechSynthesis" in window)) {
      showToast(state.lang === "en" ? "Voice playback isn't supported on this device." : "ఈ పరికరంలో వాయిస్ ప్లేబ్యాక్ మద్దతు లేదు.");
      return;
    }
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = state.lang === "te" ? "te-IN" : "en-IN";
    utter.rate = 0.92;
    const voices = speechSynthesis.getVoices();
    const match = voices.find(v => v.lang === utter.lang) || voices.find(v => v.lang.startsWith(state.lang));
    if (match) utter.voice = match;
    speechSynthesis.speak(utter);
  }
  // Warm up voice list (some browsers load it asynchronously)
  if ("speechSynthesis" in window) {
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  /* ---------------- 7. SEARCH ---------------- */
  const searchIndex = buildSearchIndex();
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.classList.add("hidden"); searchResults.innerHTML = ""; return; }
    const matches = searchIndex.filter(entry => entry.hay.includes(q)).map(entry => findPooja(entry.id));
    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-empty">${t("noResults")}</div>`;
    } else {
      searchResults.innerHTML = matches.map(p => `
        <a href="#" class="search-result-item" data-search-open="${p.id}">
          <span class="sri">${p.icon}</span>
          <span>
            <div class="srtitle">${p.name[state.lang]}</div>
            <div class="srmeta">${p.tagline[state.lang]}</div>
          </span>
        </a>`).join("");
      searchResults.querySelectorAll("[data-search-open]").forEach(a => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          openDetail(a.dataset.searchOpen);
          searchResults.classList.add("hidden");
          searchInput.value = "";
        });
      });
    }
    searchResults.classList.remove("hidden");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-section")) searchResults.classList.add("hidden");
  });

  /* ---------------- 8. NAV / MISC ---------------- */
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langBtn));
  });

  const hamburger = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll("[data-nav]").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.add("hidden"), 2600);
  }

  /* ---------------- INIT ---------------- */
  applyLanguage(); // also triggers first render of all grids

})();
