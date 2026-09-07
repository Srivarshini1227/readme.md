/* ============================================================
   PoojaSetu — Content Data
   All pooja content, mantras, stories and UI text live here,
   separated from logic (app.js) and presentation (style.css).
   Every user-facing string has an { en, te } pair so the whole
   app can switch language instantly.
   ============================================================ */

// ---- UI strings (navigation, buttons, labels) ----------------
const UI_TEXT = {
  logoTagline: { en: "Tradition Made Simple", te: "సంప్రదాయం సులభంగా" },
  heroDesc: {
    en: "Your simple companion for poojas, stories, mantras and traditional rituals.",
    te: "పూజలు, కథలు, మంత్రాలు మరియు సంప్రదాయ ఆచారాల కోసం మీ సరళమైన సహచరుడు."
  },
  exploreBtn: { en: "Explore Poojas", te: "పూజలు చూడండి" },
  navHome: { en: "Home", te: "హోమ్" },
  navPoojas: { en: "Poojas", te: "పూజలు" },
  navStories: { en: "Stories", te: "కథలు" },
  navMantras: { en: "Mantras", te: "మంత్రాలు" },
  navFavorites: { en: "Favorites", te: "ఇష్టమైనవి" },
  navAbout: { en: "About", te: "గురించి" },
  searchPlaceholder: { en: "Search poojas, stories or mantras…", te: "పూజలు, కథలు లేదా మంత్రాల కోసం వెతకండి…" },
  exploreTitle: { en: "Explore Poojas", te: "పూజలను అన్వేషించండి" },
  exploreSub: { en: "Pick a pooja to see what you need, the steps to follow and the story behind it.", te: "ఏమి కావాలో, ఏ దశలు పాటించాలో మరియు దాని వెనుక కథను చూడటానికి ఒక పూజను ఎంచుకోండి." },
  storiesTitle: { en: "Pooja Stories (Kathas)", te: "పూజా కథలు" },
  storiesSub: { en: "Every festival carries a story. Read it, listen to it, or get a simple version.", te: "ప్రతి పండుగకు ఒక కథ ఉంటుంది. దాన్ని చదవండి, వినండి, లేదా సరళమైన వివరణ పొందండి." },
  mantrasTitle: { en: "Mantras", te: "మంత్రాలు" },
  mantrasSub: { en: "Simple mantras with meaning, for every pooja.", te: "ప్రతి పూజకు అర్థంతో సరళమైన మంత్రాలు." },
  favTitle: { en: "Your Favorites", te: "మీ ఇష్టమైనవి" },
  favSub: { en: "The poojas and stories you've saved for quick access.", te: "మీరు త్వరిత ప్రాప్తి కోసం సేవ్ చేసిన పూజలు మరియు కథలు." },
  favEmpty: { en: "Nothing saved yet. Tap the ♡ on any pooja to save it here.", te: "ఇంకా ఏమీ సేవ్ చేయలేదు. ఏదైనా పూజపై ♡ నొక్కి ఇక్కడ సేవ్ చేయండి." },
  learnTogetherTitle: { en: "Learn Together", te: "కలిసి నేర్చుకుందాం" },
  learnTogetherMsg: { en: "Discover traditions together with your family.", te: "మీ కుటుంబంతో కలిసి సంప్రదాయాలను తెలుసుకోండి." },
  learnTogetherSub: {
    en: "Sit with your grandparents, kids or friends — read a katha aloud, tick off pooja items together, or just listen to a mantra as a family.",
    te: "మీ తాతయ్య-అమ్మమ్మలతో, పిల్లలతో లేదా స్నేహితులతో కూర్చుని — ఒక కథను గట్టిగా చదవండి, పూజ వస్తువులను కలిసి గుర్తించండి, లేదా కుటుంబంగా ఒక మంత్రాన్ని వినండి."
  },
  aboutTitle: { en: "Why PoojaSetu?", te: "పూజాసేతు ఎందుకు?" },
  aboutBody: {
    en: "Many traditional poojas are still followed by families, but younger generations may not always know the correct procedure, required items or stories behind them. PoojaSetu brings these traditions together in one simple digital platform.",
    te: "అనేక సంప్రదాయ పూజలను కుటుంబాలు నేటికీ పాటిస్తున్నాయి, కానీ యువ తరానికి సరైన విధానం, అవసరమైన వస్తువులు లేదా వాటి వెనుక కథలు ఎప్పుడూ తెలియకపోవచ్చు. పూజాసేతు ఈ సంప్రదాయాలన్నింటినీ ఒకే సరళమైన డిజిటల్ వేదికపైకి తీసుకువస్తుంది."
  },
  disclaimer: {
    en: "Pooja procedures and traditions may vary by region, family and tradition. Please follow the practices recommended by your family or spiritual guide.",
    te: "పూజా విధానాలు మరియు సంప్రదాయాలు ప్రాంతం, కుటుంబం మరియు సంప్రదాయాన్ని బట్టి మారవచ్చు. దయచేసి మీ కుటుంబం లేదా ఆధ్యాత్మిక గురువు సూచించిన పద్ధతులను అనుసరించండి."
  },
  footerTag: { en: "A digital bridge to tradition.", te: "సంప్రదాయానికి ఒక డిజిటల్ వారధి." },
  prepTab: { en: "Preparation", te: "సిద్ధత" },
  stepsTab: { en: "Step-by-Step", te: "దశలవారీగా" },
  kathaTab: { en: "Katha", te: "కథ" },
  mantraTab: { en: "Mantras", te: "మంత్రాలు" },
  itemsNeeded: { en: "Items you'll need", te: "మీకు కావాల్సిన వస్తువులు" },
  itemsProgress: { en: "items ready", te: "వస్తువులు సిద్ధం" },
  stepOf: { en: "Step {n} of {total}", te: "దశ {n} / {total}" },
  prevBtn: { en: "Previous", te: "వెనుకకు" },
  nextBtn: { en: "Next", te: "తరువాత" },
  listenBtn: { en: "Listen", te: "వినండి" },
  stopBtn: { en: "Stop", te: "ఆపండి" },
  enterPoojaMode: { en: "Enter Pooja Mode", te: "పూజా మోడ్‌లోకి వెళ్లండి" },
  exitPoojaMode: { en: "Exit", te: "నిష్క్రమించండి" },
  readStory: { en: "Read Story", te: "కథ చదవండి" },
  explainSimply: { en: "Explain Simply", te: "సరళంగా వివరించు" },
  simpleVersion: { en: "Simple version", te: "సరళమైన వివరణ" },
  backBtn: { en: "Back", te: "వెనుకకు" },
  saveBtn: { en: "Save", te: "సేవ్ చేయండి" },
  savedBtn: { en: "Saved", te: "సేవ్ చేయబడింది" },
  completeMsg: { en: "You've completed all the steps. May this pooja bring peace and joy to your home.", te: "మీరు అన్ని దశలు పూర్తి చేశారు. ఈ పూజ మీ ఇంటికి శాంతి మరియు ఆనందం తీసుకురావాలి." },
  startOver: { en: "Start Over", te: "మళ్లీ మొదలుపెట్టండి" },
  noResults: { en: "No matches found. Try a different word.", te: "ఏవీ కనబడలేదు. వేరే పదం ప్రయత్నించండి." },
  searchResultsFor: { en: "Results for", te: "దీని కోసం ఫలితాలు" },
  teluguComingSoon: {
    en: "Full Telugu content for this pooja is coming soon — showing English for now.",
    te: "ఈ పూజకు పూర్తి తెలుగు కంటెంట్ త్వరలో వస్తుంది — ప్రస్తుతం ఇంగ్లీష్‌లో చూపబడుతోంది."
  }
};

/* ---- Pooja data -------------------------------------------
   Each pooja has: id, icon, name{}, tagline{}, description{},
   items[{en,te}], steps[{title{},text{}}], mantras[{title{},text{},meaning{}}],
   katha{ title{}, story{en,te}, simple{en,te} }
   To keep the project realistic in scope, Vinayaka Chavithi and
   Varalakshmi Vratham carry full bilingual depth as the flagship
   examples; the rest ship with complete English content and
   bilingual names/summaries, with a friendly note where full
   Telugu long-form text is not yet written.
------------------------------------------------------------ */
const POOJAS = [
  {
    id: "vinayaka-chavithi",
    icon: "🐘",
    color: "#7A2331",
    name: { en: "Vinayaka Chavithi", te: "వినాయక చవితి" },
    tagline: { en: "Welcome Lord Ganesha home", te: "గణేశుడిని ఇంటికి ఆహ్వానించండి" },
    description: {
      en: "Celebrate the elephant-headed god's arrival with clay idols, modakams and a joyful family story.",
      te: "మట్టి విగ్రహాలు, మోదకాలు మరియు ఆనందకరమైన కుటుంబ కథతో గజాననుడి రాకను జరుపుకోండి."
    },
    hasFullTelugu: true,
    items: [
      { en: "Clay Ganesha idol", te: "మట్టి గణేశ విగ్రహం" },
      { en: "Turmeric (haldi)", te: "పసుపు" },
      { en: "Kumkum", te: "కుంకుమ" },
      { en: "Flowers", te: "పూలు" },
      { en: "21 Durva grass blades", te: "21 గరిక పోచలు" },
      { en: "Modakam / sweets", te: "మోదకం / స్వీట్లు" },
      { en: "Coconut", te: "కొబ్బరికాయ" },
      { en: "Betel leaves & nuts", te: "తమలపాకులు, వక్కలు" },
      { en: "Camphor", te: "కర్పూరం" },
      { en: "Incense sticks", te: "అగరుబత్తులు" },
      { en: "Lamp (diya) & oil", te: "దీపం & నూనె" },
      { en: "Red cloth", te: "ఎర్రటి వస్త్రం" },
      { en: "Panchamrutham", te: "పంచామృతం" },
      { en: "Fruits", te: "పండ్లు" }
    ],
    steps: [
      {
        title: { en: "Preparation", te: "సిద్ధత" },
        text: {
          en: "Clean the pooja space and place a low wooden stool covered with a red cloth. Arrange all the items within easy reach. Wash the clay Ganesha idol gently and place it facing you.",
          te: "పూజా స్థలాన్ని శుభ్రం చేసి, ఎర్రటి వస్త్రంతో కప్పిన ఒక పీటను ఉంచండి. అన్ని వస్తువులను అందుబాటులో అమర్చండి. మట్టి గణేశ విగ్రహాన్ని మెల్లగా కడిగి, మీ ఎదురుగా ఉంచండి."
        }
      },
      {
        title: { en: "Sankalpam", te: "సంకల్పం" },
        text: {
          en: "Take a spoon of water in your right palm and silently state your name, family and the reason for the pooja — asking Lord Ganesha's blessings for a good start. Let the water fall into a plate.",
          te: "కుడి అరచేతిలో కొద్దిగా నీళ్లు తీసుకుని, మీ పేరు, కుటుంబం మరియు పూజ చేసే కారణాన్ని మనసులో చెప్పుకుని, గణేశుని ఆశీర్వాదం కోరుతూ నీటిని ఒక పళ్లెంలో వదలండి."
        }
      },
      {
        title: { en: "Ganapathi Pooja", te: "గణపతి పూజ" },
        text: {
          en: "Invoke Lord Ganesha into the idol (Avahanam). Offer turmeric, kumkum, flowers and durva grass one by one, saying 'Om Gan Ganapataye Namah' with each offering.",
          te: "గణేశుని విగ్రహంలోకి ఆవాహన చేయండి. పసుపు, కుంకుమ, పూలు మరియు గరిక పోచలను ఒక్కొక్కటిగా సమర్పిస్తూ ప్రతిసారి 'ఓం గం గణపతయే నమః' అని పలకండి."
        }
      },
      {
        title: { en: "Naivedyam", te: "నైవేద్యం" },
        text: {
          en: "Offer the modakams, fruits and other sweets to Lord Ganesha. Ring a small bell while offering and sprinkle a few drops of water around the plate to purify it.",
          te: "మోదకాలు, పండ్లు మరియు ఇతర తీపి పదార్థాలను గణేశునికి నివేదించండి. నివేదన చేసేటప్పుడు గంట మోగించి, పళ్లెం చుట్టూ కొద్దిగా నీళ్లు చిలకరించండి."
        }
      },
      {
        title: { en: "Mantras", te: "మంత్రాలు" },
        text: {
          en: "Chant the Vakratunda Mahakaya sloka and the Ganesha Ashtottaram (108 names) if time allows, or simply repeat 'Om Gan Ganapataye Namah' 21 times.",
          te: "వక్రతుండ మహాకాయ శ్లోకాన్ని మరియు వీలైతే గణేశ అష్టోత్తరాన్ని (108 నామాలు) చదవండి, లేదా కేవలం 'ఓం గం గణపతయే నమః' అని 21 సార్లు జపించండి."
        }
      },
      {
        title: { en: "Vinayaka Chavithi Katha", te: "వినాయక చవితి కథ" },
        text: {
          en: "Read or listen to the traditional story of why the moon is not to be seen on this day. It is usually read after the pooja and before the aarti.",
          te: "ఈ రోజున చంద్రుడిని ఎందుకు చూడకూడదో తెలిపే సంప్రదాయ కథను చదవండి లేదా వినండి. సాధారణంగా పూజ తర్వాత, హారతికి ముందు దీన్ని చదువుతారు."
        }
      },
      {
        title: { en: "Harathi", te: "హారతి" },
        text: {
          en: "Light the camphor and wave it in front of the idol in clockwise circles while the family sings the aarti together. Pass the harathi plate to everyone present.",
          te: "కర్పూరం వెలిగించి, కుటుంబం అందరూ కలిసి హారతి పాడుతూ, విగ్రహం ముందు సవ్యదిశలో తిప్పండి. ఉన్నవారందరికీ హారతి పళ్లెం అందించండి."
        }
      },
      {
        title: { en: "Completion", te: "పూర్తి" },
        text: {
          en: "Distribute the naivedyam as prasadam to everyone. Keep the idol in its place for the chosen number of days before immersion (visarjanam), as per your family's tradition.",
          te: "నైవేద్యాన్ని అందరికీ ప్రసాదంగా పంచండి. మీ కుటుంబ సంప్రదాయాన్ని అనుసరించి, నిర్ణీత రోజుల పాటు విగ్రహాన్ని ఉంచి, తర్వాత నిమజ్జనం చేయండి."
        }
      }
    ],
    mantras: [
      {
        title: { en: "Vakratunda Mahakaya", te: "వక్రతుండ మహాకాయ" },
        text: { en: "Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada.", te: "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ, నిర్విఘ్నం కురు మే దేవ సర్వ కార్యేషు సర్వదా." },
        meaning: { en: "O curved-trunk, mighty-bodied Lord who shines like a million suns — please remove all obstacles from everything I undertake, always.", te: "వంకర తొండం, గొప్ప శరీరం, కోటి సూర్యుల కాంతితో ప్రకాశించే దేవా — నేను చేపట్టే ప్రతి పనిలో ఎల్లప్పుడూ విఘ్నాలను తొలగించు." }
      },
      {
        title: { en: "Ganapathi Namah", te: "గణపతి నమః" },
        text: { en: "Om Gan Ganapataye Namah", te: "ఓం గం గణపతయే నమః" },
        meaning: { en: "A short salutation to Lord Ganesha, chanted for a good beginning to anything new.", te: "కొత్త పని ప్రారంభించేటప్పుడు మంచి జరగాలని గణేశునికి చేసే చిన్న నమస్కారం." }
      }
    ],
    katha: {
      title: { en: "Vinayaka Chavithi Katha", te: "వినాయక చవితి కథ" },
      story: {
        en: "Long ago, on Bhadrapada Chavithi, Goddess Parvati fashioned a boy from turmeric paste and breathed life into him, naming him Ganesha and setting him to guard her door while she bathed. When Lord Shiva returned and found this unknown boy blocking his way, an angry battle followed, and in the end Shiva severed the boy's head. Seeing Parvati's grief, Shiva sent his followers to bring the head of the first creature found sleeping facing north — an elephant — and placed it on the boy's body, bringing him back to life as Lord Ganesha, blessed above all gods. Later, after a grand feast on this same day, Ganesha's stomach grew heavy with modakams. Riding home on his mouse, he stumbled and fell, and the Moon, watching from the sky, laughed at him. Angered, Ganesha cursed the Moon that anyone who looked upon him on this night would face false blame. Even Lord Krishna was not spared — he was wrongly accused of stealing a jewel after glimpsing the moon on this day, until the truth was found through patience and honesty. It is for this reason that people avoid looking at the moon on Vinayaka Chavithi night, and if they do, they recite this very story to ward off the effect.",
        te: "పూర్వం భాద్రపద చవితి రోజున పార్వతీదేవి పసుపుతో ఒక బాలుడిని తయారు చేసి ప్రాణం పోసి గణేశుడు అని పేరు పెట్టి, తాను స్నానం చేస్తుండగా తలుపు వద్ద కాపలా ఉంచింది. శివుడు వచ్చి ఆ బాలుడిని అడ్డుకోవడంతో యుద్ధం జరిగి, శివుడు ఆ బాలుని తలను నరికివేశాడు. పార్వతి దుఃఖం చూసి, శివుడు ఉత్తరం వైపు తలపెట్టి నిద్రిస్తున్న మొదటి జీవి తలను తెమ్మని పంపగా, అది ఏనుగు తల. దానిని బాలుని శరీరానికి అమర్చి బతికించి, గణేశుడిగా అన్ని దేవతలలో మొదటి పూజ్యునిగా చేశాడు. తర్వాత ఒకసారి ఈ రోజునే గణేశుడు మోదకాలు ఎక్కువగా తిని, తన వాహనమైన ఎలుకపై ఇంటికి వెళ్తుండగా జారిపడిపోయాడు. ఆకాశంలో ఉన్న చంద్రుడు ఇది చూసి నవ్వాడు. కోపంతో గణేశుడు, ఈ రాత్రి తనను చూసినవారు అపనిందలు పొందుతారని చంద్రుడిని శపించాడు. ఈ శాపం వల్ల శ్రీకృష్ణుడు కూడా ఒక మణి దొంగతనం నింద ఎదుర్కొన్నాడు, తర్వాత సత్యం నిజాయితీగా బయటపడింది. అందుకే వినాయక చవితి రాత్రి చంద్రుడిని చూడకూడదని, పొరపాటున చూస్తే ఈ కథను చదవాలని చెబుతారు."
      },
      simple: {
        en: "Parvati made a boy from turmeric paste — that was baby Ganesha. Shiva didn't recognise him and, after a big fight, gave him an elephant's head to bring him back to life. Years later, Ganesha fell off his mouse because he'd eaten too many modakams, and the Moon laughed at him. Annoyed, Ganesha said anyone who looks at the Moon tonight will get blamed for something they didn't do. That's why we skip looking at the moon on this day — and if we do, we just tell this story to cancel it out!",
        te: "పార్వతి పసుపుతో ఒక బాలుడిని చేసింది — అతనే బాల గణేశుడు. శివుడికి తెలియక పోరాటం జరిగింది, తర్వాత ఏనుగు తల పెట్టి బతికించాడు. తర్వాత ఒకసారి గణేశుడు ఎక్కువ మోదకాలు తిని ఎలుక మీద నుండి పడిపోయాడు, చంద్రుడు చూసి నవ్వాడు. కోపంతో గణేశుడు, ఈ రాత్రి చంద్రుడిని చూసేవారికి అపనింద వస్తుందని చెప్పాడు. అందుకే ఈ రోజు చంద్రుడిని చూడం — పొరపాటున చూస్తే ఈ కథ చెప్పుకుంటే సరిపోతుంది!"
      }
    }
  },

  {
    id: "varalakshmi-vratham",
    icon: "🪔",
    color: "#C9862A",
    name: { en: "Varalakshmi Vratham", te: "వరలక్ష్మి వ్రతం" },
    tagline: { en: "Pray for prosperity and family well-being", te: "శ్రేయస్సు, కుటుంబ శ్రేయస్సు కోసం ప్రార్థన" },
    description: {
      en: "A vratham observed by married women on a Friday in Shravana month, honouring Goddess Lakshmi as the giver of boons.",
      te: "శ్రావణ మాసంలో ఒక శుక్రవారం వివాహిత స్త్రీలు వరాలు ఇచ్చే వరలక్ష్మీ దేవిని పూజించే వ్రతం."
    },
    hasFullTelugu: true,
    items: [
      { en: "Kalasham (pot) with water", te: "కలశం (నీటితో)" },
      { en: "Rice", te: "బియ్యం" },
      { en: "Mango leaves", te: "మామిడి ఆకులు" },
      { en: "Coconut", te: "కొబ్బరికాయ" },
      { en: "Turmeric & Kumkum", te: "పసుపు కుంకుమ" },
      { en: "Flowers & garlands", te: "పూలు, దండలు" },
      { en: "New blouse piece / saree", te: "కొత్త రవిక ముక్క / చీర" },
      { en: "Bangles", te: "గాజులు" },
      { en: "Sweets (payasam, laddu)", te: "స్వీట్లు (పాయసం, లడ్డు)" },
      { en: "Betel leaves & nuts", te: "తమలపాకులు, వక్కలు" },
      { en: "Lamp & oil", te: "దీపం, నూనె" },
      { en: "Yellow thread (toramu)", te: "పసుపు దారం (తోరం)" }
    ],
    steps: [
      { title: { en: "Preparation", te: "సిద్ధత" }, text: { en: "Clean the pooja area and set up a small mandapam. Fill the kalasham with water, place mango leaves on top and a coconut smeared with turmeric on the mango leaves.", te: "పూజా స్థలాన్ని శుభ్రం చేసి చిన్న మంటపం ఏర్పాటు చేయండి. కలశంలో నీళ్లు నింపి, పైన మామిడి ఆకులు, పసుపు రాసిన కొబ్బరికాయను ఉంచండి." } },
      { title: { en: "Kalasha Sthapana", te: "కలశ స్థాపన" }, text: { en: "Place the prepared kalasham on a small heap of rice, and draw a simple face or attach a Lakshmi picture to represent the Goddess seated within it.", te: "సిద్ధం చేసిన కలశాన్ని బియ్యం రాశిపై ఉంచి, దానిపై లక్ష్మీదేవి రూపాన్ని సూచించే చిత్రాన్ని అలంకరించండి." } },
      { title: { en: "Sankalpam", te: "సంకల్పం" }, text: { en: "Hold water in your palm and state your intention to perform the vratham for the well-being of your family, then let the water fall onto a plate.", te: "అరచేతిలో నీళ్లు పట్టుకుని, కుటుంబ శ్రేయస్సు కోసం ఈ వ్రతం చేస్తున్నానని సంకల్పం చెప్పుకుని, నీటిని పళ్లెంలో వదలండి." } },
      { title: { en: "Lakshmi Avahanam", te: "లక్ష్మీ ఆవాహన" }, text: { en: "Invite Goddess Lakshmi into the kalasham with folded hands, offering turmeric, kumkum and flowers while chanting Her names.", te: "చేతులు జోడించి, పసుపు కుంకుమ పూలు సమర్పిస్తూ లక్ష్మీదేవిని కలశంలోకి ఆవాహన చేయండి." } },
      { title: { en: "Pooja & Naivedyam", te: "పూజ & నైవేద్యం" }, text: { en: "Tie the yellow thread around your wrist, offer the sweets and fruits as naivedyam, and gift the new blouse piece or bangles symbolically to the Goddess.", te: "తోరాన్ని మణికట్టుకు కట్టుకుని, తీపి పదార్థాలు నైవేద్యంగా సమర్పించి, కొత్త రవిక ముక్క లేదా గాజులను లక్ష్మీదేవికి సంకేతంగా అర్పించండి." } },
      { title: { en: "Katha & Harathi", te: "కథ & హారతి" }, text: { en: "Read the Varalakshmi Vratham katha, then perform harathi with camphor while singing together, and distribute prasadam to all.", te: "వరలక్ష్మీ వ్రత కథ చదివి, కర్పూరంతో హారతి ఇచ్చి, అందరూ కలిసి పాడుతూ ప్రసాదం పంచండి." } }
    ],
    mantras: [
      { title: { en: "Lakshmi Mantra", te: "లక్ష్మీ మంత్రం" }, text: { en: "Om Shreem Mahalakshmyai Namah", te: "ఓం శ్రీం మహాలక్ష్మ్యై నమః" }, meaning: { en: "A salutation to the Great Goddess of wealth and abundance, Mahalakshmi.", te: "సంపద మరియు సమృద్ధి కల్పించే మహాలక్ష్మీ దేవికి నమస్కారం." } }
    ],
    katha: {
      title: { en: "Varalakshmi Vratham Katha", te: "వరలక్ష్మీ వ్రత కథ" },
      story: {
        en: "In the town of Kundinapura lived a devoted woman named Charumati, known for her kindness and devotion to her husband and elders. Pleased by her purity of heart, Goddess Lakshmi appeared to her in a dream and asked her to observe a vratham in Her honour on the Friday before the full moon of Shravana month, promising prosperity to her and her family. Charumati woke and shared the dream with the women of her town, and together they performed the vratham with full devotion — decorating a kalasham as the Goddess, offering flowers, fruits and sweets, and tying a sacred thread on their wrists. As they worshipped, they began to notice their bangles turning to gold and their homes filling with grain and gold, exactly as the Goddess had promised. Since that day, married women across the land have observed Varalakshmi Vratham with the same devotion, believing it brings good fortune, health and harmony to the household.",
        te: "కుండినపురంలో చారుమతి అనే భక్తురాలు ఉండేది, ఆమె తన భర్తను, పెద్దలను గౌరవిస్తూ మంచి మనసుతో జీవించేది. ఆమె భక్తికి మెచ్చి లక్ష్మీదేవి కలలో కనిపించి, శ్రావణ మాసంలో వచ్చే శుక్రవారం తనను పూజిస్తే కుటుంబానికి శ్రేయస్సు కలుగుతుందని చెప్పింది. చారుమతి తన కలను ఊరిలోని స్త్రీలకు చెప్పగా, అందరూ కలిసి కలశాన్ని లక్ష్మీదేవిగా అలంకరించి, పూలు పండ్లు స్వీట్లు సమర్పించి, చేతికి తోరం కట్టుకుని భక్తితో వ్రతం చేశారు. వ్రతం చేస్తుండగానే వారి గాజులు బంగారంగా మారడం, ఇళ్లలో ధాన్యం బంగారం నిండటం జరిగింది, దేవి చెప్పినట్టుగానే. అప్పటి నుండి వివాహిత స్త్రీలు ఇదే భక్తితో వరలక్ష్మీ వ్రతం చేస్తూ, తమ ఇంటికి శ్రేయస్సు, ఆరోగ్యం, సామరస్యం కలగాలని కోరుకుంటున్నారు."
      },
      simple: {
        en: "A kind woman named Charumati saw Goddess Lakshmi in a dream, asking her to worship a decorated pot on a Friday in Shravana month. She and the other women in her town did exactly that with full heart — and their homes started filling with gold and grain. That's why, even today, women perform Varalakshmi Vratham, hoping for the same blessings of health, wealth and a happy home.",
        te: "చారుమతి అనే మంచి మనసున్న స్త్రీ కలలో లక్ష్మీదేవిని చూసింది. దేవి, శ్రావణ శుక్రవారం ఒక అలంకరించిన కుండను పూజించమని చెప్పింది. ఆమె, ఊరిలోని ఇతర స్త్రీలు అలాగే చేశారు — వారి ఇళ్లు బంగారంతో, ధాన్యంతో నిండాయి. అందుకే ఇప్పటికీ స్త్రీలు ఆరోగ్యం, సంపద, సంతోషకరమైన ఇల్లు కోసం వరలక్ష్మీ వ్రతం చేస్తారు."
      }
    }
  },

  {
    id: "sri-rama-navami",
    icon: "🏹",
    color: "#8C5A2B",
    name: { en: "Sri Rama Navami", te: "శ్రీ రామ నవమి" },
    tagline: { en: "Celebrate the birth of Lord Rama", te: "శ్రీరాముని జన్మదిన వేడుక" },
    description: { en: "Marks the birth of Lord Rama, celebrated with Kalyanam ceremonies, panakam and vadapappu offerings.", te: "శ్రీరాముని జననాన్ని పురస్కరించుకుని కళ్యాణ వేడుకలు, పానకం, వడపప్పు నివేదనలతో జరుపుకుంటారు." },
    hasFullTelugu: false,
    items: [
      { en: "Rama Pattabhishekam picture/idol", te: "రామ పట్టాభిషేక చిత్రం/విగ్రహం" },
      { en: "Flowers & tulasi leaves", te: "పూలు, తులసి ఆకులు" },
      { en: "Panakam (jaggery drink)", te: "పానకం" },
      { en: "Vadapappu (soaked moong dal)", te: "వడపప్పు" },
      { en: "Sandalwood paste", te: "చందనం" },
      { en: "Camphor & incense", te: "కర్పూరం, అగరుబత్తులు" }
    ],
    steps: [
      { title: { en: "Preparation", te: "సిద్ధత" }, text: { en: "Clean the altar and place a picture or idol of Rama, Sita, Lakshmana and Hanuman together. Decorate with flowers and tulasi leaves.", te: "పూజా వేదికను శుభ్రం చేసి రామ, సీత, లక్ష్మణ, హనుమంతుల చిత్రాన్ని ఉంచండి. పూలు, తులసితో అలంకరించండి." } },
      { title: { en: "Sankalpam", te: "సంకల్పం" }, text: { en: "Take water in your palm and offer a short prayer stating your intention to celebrate Rama's birth with devotion.", te: "అరచేతిలో నీళ్లు తీసుకుని రామనవమిని భక్తితో జరుపుకుంటున్నానని సంకల్పం చెప్పుకోండి." } },
      { title: { en: "Rama Pooja", te: "రామ పూజ" }, text: { en: "Offer sandalwood, flowers and tulasi leaves to the deities while chanting 'Om Sri Ramaya Namah'.", te: "'ఓం శ్రీ రామాయ నమః' అని పఠిస్తూ చందనం, పూలు, తులసిని దేవతలకు సమర్పించండి." } },
      { title: { en: "Naivedyam", te: "నైవేద్యం" }, text: { en: "Offer panakam and vadapappu — the signature offerings of this festival — along with any other sweets prepared at home.", te: "ఈ పండుగకు ప్రత్యేకమైన పానకం, వడపప్పుతో పాటు ఇంట్లో తయారు చేసిన ఇతర తీపి పదార్థాలను నివేదించండి." } },
      { title: { en: "Bhajans & Harathi", te: "భజనలు & హారతి" }, text: { en: "Sing bhajans about Rama's life, then perform harathi and share the panakam-vadapappu prasadam with everyone.", te: "రాముని జీవితం గురించి భజనలు పాడి, హారతి ఇచ్చి పానకం-వడపప్పు ప్రసాదాన్ని అందరికీ పంచండి." } }
    ],
    mantras: [
      { title: { en: "Rama Mantra", te: "రామ మంత్రం" }, text: { en: "Om Sri Ramaya Namah", te: "ఓం శ్రీ రామాయ నమః" }, meaning: { en: "A simple salutation to Lord Rama, the embodiment of righteousness and duty.", te: "ధర్మానికి, కర్తవ్యానికి ప్రతీక అయిన శ్రీరామునికి చేసే నమస్కారం." } }
    ],
    katha: {
      title: { en: "The Birth of Rama", te: "రామ జననం" },
      story: {
        en: "King Dasharatha of Ayodhya had no children for many years despite ruling justly and well. On the advice of his sages, he performed the Putrakameshti Yagna, a sacred fire ritual for the birth of worthy sons. From the sacred fire emerged a divine being carrying a bowl of payasam, which Dasharatha shared among his three queens. In time, Kausalya gave birth to Rama, Kaikeyi to Bharata, and Sumitra to the twins Lakshmana and Shatrughna. Rama grew to be an ideal son, brother and king, and his birth on the ninth day (Navami) of the bright half of Chaitra month is celebrated every year as Sri Rama Navami, a reminder to live with truth, duty and compassion.",
        te: ""
      },
      simple: {
        en: "King Dasharatha had no children for a long time, so he performed a special yagna. From it, he received a magic payasam which he shared with his three queens. Soon, Rama, Bharata, Lakshmana and Shatrughna were born. Rama grew up to be the ideal son and king we celebrate every year on Rama Navami.",
        te: "దశరథ మహారాజుకు చాలా కాలం సంతానం లేదు, అందుకని ఒక ప్రత్యేక యజ్ఞం చేశాడు. దాని నుండి వచ్చిన పాయసాన్ని తన ముగ్గురు రాణులకు పంచాడు. కొద్ది కాలానికి రాముడు, భరతుడు, లక్ష్మణుడు, శత్రుఘ్నుడు జన్మించారు. రాముడు ఆదర్శ కుమారుడిగా, రాజుగా ఎదిగాడు — అతని జననాన్నే మనం ప్రతి ఏటా రామనవమిగా జరుపుకుంటాం."
      }
    }
  },

  {
    id: "dasara",
    icon: "🌺",
    color: "#9C3D54",
    name: { en: "Dasara", te: "దసరా" },
    tagline: { en: "Nine nights celebrating good over evil", te: "చెడుపై మంచి గెలుపును జరుపుకునే తొమ్మిది రాత్రులు" },
    description: { en: "A nine-night festival honouring Goddess Durga, ending with Vijayadashami — the victory of good over evil.", te: "దుర్గాదేవిని గౌరవిస్తూ తొమ్మిది రాత్రులు జరుపుకునే పండుగ, విజయదశమితో ముగుస్తుంది." },
    hasFullTelugu: false,
    items: [
      { en: "Golu dolls / Kalasha", te: "బొమ్మల కొలువు / కలశం" },
      { en: "Kumkum & turmeric", te: "కుంకుమ, పసుపు" },
      { en: "Flowers & garlands", te: "పూలు, దండలు" },
      { en: "Lamps", te: "దీపాలు" },
      { en: "Fruits & sundal (snack offering)", te: "పండ్లు, సుండల్" }
    ],
    steps: [
      { title: { en: "Preparation", te: "సిద్ధత" }, text: { en: "Set up a Kalasha or a small display of dolls (golu) representing gods and stories, and clean the space where the nine nights will be observed.", te: "కలశం లేదా బొమ్మల కొలువును ఏర్పాటు చేసి, తొమ్మిది రాత్రుల పూజకు స్థలాన్ని శుభ్రం చేయండి." } },
      { title: { en: "Devi Pooja", te: "దేవి పూజ" }, text: { en: "Each of the nine nights, offer flowers and light a lamp to a different form of Goddess Durga, reciting Her names.", te: "తొమ్మిది రాత్రులలో ప్రతి రోజు దుర్గాదేవి వేర్వేరు రూపానికి పూలు సమర్పించి దీపం వెలిగించి నామాలు పఠించండి." } },
      { title: { en: "Ayudha Pooja", te: "ఆయుధ పూజ" }, text: { en: "On the ninth day, clean and worship tools, vehicles and instruments of your trade, thanking them for supporting your work through the year.", te: "తొమ్మిదవ రోజున మీ వృత్తికి సంబంధించిన పనిముట్లు, వాహనాలను శుభ్రం చేసి పూజించండి." } },
      { title: { en: "Saraswati Pooja", te: "సరస్వతి పూజ" }, text: { en: "Place books and musical instruments before Goddess Saraswati and seek Her blessings for knowledge and the arts.", te: "పుస్తకాలు, వాయిద్యాలను సరస్వతీ దేవి ముందు ఉంచి జ్ఞానం, కళల కోసం ఆమె ఆశీర్వాదం కోరండి." } },
      { title: { en: "Vijayadashami", te: "విజయదశమి" }, text: { en: "On the tenth day, mark the victory of good over evil — begin new learning (Vidyarambham), exchange greetings and immerse the Kalasha or dolls.", te: "పదవ రోజున మంచి గెలుపును జరుపుకుని, విద్యారంభం చేసి, శుభాకాంక్షలు తెలుపుకుని కలశాన్ని నిమజ్జనం చేయండి." } }
    ],
    mantras: [
      { title: { en: "Durga Mantra", te: "దుర్గా మంత్రం" }, text: { en: "Om Dum Durgayai Namah", te: "ఓం దుం దుర్గాయై నమః" }, meaning: { en: "A salutation to Goddess Durga, the protector who removes difficulties.", te: "కష్టాలను తొలగించే రక్షకురాలు దుర్గాదేవికి నమస్కారం." } }
    ],
    katha: {
      title: { en: "Durga and Mahishasura", te: "దుర్గ - మహిషాసుర కథ" },
      story: {
        en: "The buffalo-demon Mahishasura had won a boon that no man or god could kill him, and he used this power to terrorise the three worlds. Unable to defeat him, the gods combined their individual powers and energies into a single radiant form — Goddess Durga, armed with weapons gifted by each god and riding a lion. For nine fierce nights, Durga battled Mahishasura's shifting forms, and on the tenth day she finally defeated him, restoring peace to the universe. This victory is celebrated as Dasara, with the tenth day known as Vijayadashami — the day of victory.",
        te: ""
      },
      simple: {
        en: "A demon named Mahishasura had a boon that made him almost impossible to defeat, and he was troubling everyone. So all the gods combined their powers to create one powerful goddess — Durga. She fought him for nine nights and finally won on the tenth day. That's why we celebrate nine nights of Durga (Dasara) followed by Vijayadashami, the day good triumphed over evil.",
        te: "మహిషాసురుడు అనే రాక్షసుడికి దాదాపు అజేయుడిగా ఉండే వరం ఉండి, అందరినీ ఇబ్బంది పెట్టేవాడు. అందుకే దేవతలందరూ తమ శక్తులను కలిపి దుర్గాదేవిని సృష్టించారు. ఆమె తొమ్మిది రాత్రులు అతనితో పోరాడి పదవ రోజున గెలిచింది. అందుకే మనం తొమ్మిది రాత్రులు దుర్గను పూజించి, విజయదశమిని జరుపుకుంటాం."
      }
    }
  },

  {
    id: "lakshmi-pooja",
    icon: "🪷",
    color: "#B8862E",
    name: { en: "Lakshmi Pooja", te: "లక్ష్మీ పూజ" },
    tagline: { en: "Invite the goddess of wealth home", te: "సంపద దేవతను ఇంటికి ఆహ్వానించండి" },
    description: { en: "Performed on Diwali night, welcoming Goddess Lakshmi with lamps, rangoli and sweets.", te: "దీపావళి రాత్రి దీపాలు, ముగ్గులు, స్వీట్లతో లక్ష్మీదేవిని ఆహ్వానిస్తూ చేసే పూజ." },
    hasFullTelugu: false,
    items: [
      { en: "Lakshmi-Ganesha idols", te: "లక్ష్మీ-గణేశ విగ్రహాలు" },
      { en: "Diyas & oil", te: "దీపాలు, నూనె" },
      { en: "Rangoli colours", te: "ముగ్గు రంగులు" },
      { en: "Sweets", te: "స్వీట్లు" },
      { en: "Coins & new currency notes", te: "నాణేలు, కొత్త నోట్లు" },
      { en: "Flowers", te: "పూలు" }
    ],
    steps: [
      { title: { en: "Preparation & Cleaning", te: "సిద్ధత & శుభ్రత" }, text: { en: "Clean and light up the whole house, and draw a rangoli at the entrance to welcome the Goddess.", te: "ఇల్లంతా శుభ్రం చేసి దీపాలతో అలంకరించి, గుమ్మం వద్ద ముగ్గు వేయండి." } },
      { title: { en: "Sankalpam", te: "సంకల్పం" }, text: { en: "Take water in your palm and dedicate the pooja to Goddess Lakshmi and Lord Ganesha for prosperity and wisdom.", te: "అరచేతిలో నీళ్లు తీసుకుని సంపద, జ్ఞానం కోసం లక్ష్మీ-గణేశులకు పూజను అంకితం చేస్తూ సంకల్పం చెప్పుకోండి." } },
      { title: { en: "Lakshmi-Ganesha Avahanam", te: "లక్ష్మీ-గణేశ ఆవాహన" }, text: { en: "Invoke both deities into their idols with flowers and kumkum, placing them together as Ganesha removes obstacles and Lakshmi brings wealth.", te: "పూలు, కుంకుమతో ఇద్దరు దేవతలను ఆవాహన చేసి, గణేశుడు ఆటంకాలు తొలగించేలా, లక్ష్మి సంపద ఇచ్చేలా కలిపి ఉంచండి." } },
      { title: { en: "Naivedyam", te: "నైవేద్యం" }, text: { en: "Offer sweets, fruits and coins, symbolically placing your account books or savings box in front of the deities.", te: "స్వీట్లు, పండ్లు, నాణేలు సమర్పించి, మీ ఖాతా పుస్తకాలను లేదా పొదుపు పెట్టెను దేవతల ముందు ఉంచండి." } },
      { title: { en: "Diya Lighting & Harathi", te: "దీపాలు & హారతి" }, text: { en: "Light diyas around the house and perform harathi together, thanking the Goddess for the year's abundance.", te: "ఇల్లంతా దీపాలు వెలిగించి, కలిసి హారతి ఇచ్చి, ఈ సంవత్సరపు సమృద్ధికి దేవికి కృతజ్ఞతలు తెలుపుకోండి." } }
    ],
    mantras: [
      { title: { en: "Lakshmi Gayatri", te: "లక్ష్మీ గాయత్రి" }, text: { en: "Om Shreem Mahalakshmyai Cha Vidmahe, Vishnu Patnyai Cha Dheemahi, Tanno Lakshmi Prachodayat.", te: "ఓం శ్రీం మహాలక్ష్మ్యై చ విద్మహే, విష్ణుపత్న్యై చ ధీమహి, తన్నో లక్ష్మీః ప్రచోదయాత్." }, meaning: { en: "We meditate on Mahalakshmi, consort of Vishnu; may She inspire and guide our minds.", te: "విష్ణుపత్ని మహాలక్ష్మిని ధ్యానిస్తున్నాము; ఆమె మన మనసులను ప్రేరేపించాలి." } }
    ],
    katha: {
      title: { en: "Lakshmi's Return", te: "లక్ష్మీదేవి రాక" },
      story: {
        en: "During the great churning of the ocean (Samudra Manthan) by gods and demons, many divine treasures emerged, and among the most radiant was Goddess Lakshmi herself, rising from the waters on a lotus. She chose Lord Vishnu as her eternal companion. Every Diwali, it is believed that Lakshmi visits homes that are clean, well-lit and welcoming, bringing prosperity to those who receive her with an open heart — which is why homes are cleaned and lit with diyas on this night.",
        te: ""
      },
      simple: {
        en: "During a great churning of the ocean, Goddess Lakshmi appeared on a lotus and chose Lord Vishnu as her partner. People believe she visits clean, well-lit homes on Diwali night — that's why we clean our houses and light diyas, hoping she'll bring prosperity inside.",
        te: "సముద్ర మథనం సమయంలో లక్ష్మీదేవి తామరపువ్వుపై ప్రత్యక్షమై విష్ణువును తన భర్తగా ఎంచుకుంది. దీపావళి రాత్రి ఆమె శుభ్రమైన, దీపాలతో వెలుగుతున్న ఇళ్లను సందర్శిస్తుందని నమ్మకం — అందుకే మనం ఇల్లు శుభ్రం చేసి దీపాలు వెలిగిస్తాం."
      }
    }
  },

  {
    id: "shiva-pooja",
    icon: "🔱",
    color: "#3B5A63",
    name: { en: "Shiva Pooja", te: "శివ పూజ" },
    tagline: { en: "Simple daily worship of Lord Shiva", te: "శివుడికి రోజువారీ సరళమైన పూజ" },
    description: { en: "A gentle daily or Monday practice of Abhishekam and bilva leaf offerings to Lord Shiva.", te: "శివుడికి అభిషేకం, బిల్వ పత్రాలతో రోజువారీ లేదా సోమవారం చేసే సరళమైన పూజ." },
    hasFullTelugu: false,
    items: [
      { en: "Shiva Linga or picture", te: "శివలింగం / చిత్రం" },
      { en: "Water", te: "నీరు" },
      { en: "Milk", te: "పాలు" },
      { en: "Bilva (bel) leaves", te: "బిల్వ పత్రాలు" },
      { en: "Vibhuti (holy ash)", te: "విభూతి" },
      { en: "White flowers", te: "తెల్ల పూలు" }
    ],
    steps: [
      { title: { en: "Preparation", te: "సిద్ధత" }, text: { en: "Clean the space around the Shiva Linga or picture, and keep water, milk and bilva leaves ready.", te: "శివలింగం లేదా చిత్రం చుట్టూ శుభ్రం చేసి నీరు, పాలు, బిల్వ పత్రాలను సిద్ధం చేసుకోండి." } },
      { title: { en: "Abhishekam", te: "అభిషేకం" }, text: { en: "Gently pour water, then milk, over the Linga in a slow, continuous stream while chanting 'Om Namah Shivaya'.", te: "'ఓం నమః శివాయ' అని జపిస్తూ నీరు, తర్వాత పాలు నెమ్మదిగా, నిరంతరంగా లింగంపై పోయండి." } },
      { title: { en: "Bilva Patra Offering", te: "బిల్వ పత్ర సమర్పణ" }, text: { en: "Offer bilva leaves one by one with the smooth side facing down, along with vibhuti and white flowers.", te: "నున్నని వైపు క్రిందికి ఉండేలా బిల్వ పత్రాలను ఒక్కొక్కటిగా, విభూతి, తెల్ల పూలతో పాటు సమర్పించండి." } },
      { title: { en: "Mantra Japam", te: "మంత్ర జపం" }, text: { en: "Sit quietly and repeat 'Om Namah Shivaya' 108 times, or as many times as feels comfortable.", te: "ప్రశాంతంగా కూర్చుని 'ఓం నమః శివాయ' అని 108 సార్లు, లేదా మీకు వీలైనన్ని సార్లు జపించండి." } },
      { title: { en: "Harathi", te: "హారతి" }, text: { en: "Light camphor and offer harathi, thanking Lord Shiva for calm and clarity in your life.", te: "కర్పూరం వెలిగించి హారతి ఇచ్చి, జీవితంలో ప్రశాంతత, స్పష్టత కోసం శివునికి కృతజ్ఞతలు తెలుపుకోండి." } }
    ],
    mantras: [
      { title: { en: "Om Namah Shivaya", te: "ఓం నమః శివాయ" }, text: { en: "Om Namah Shivaya", te: "ఓం నమః శివాయ" }, meaning: { en: "'I bow to Shiva' — one of the most sacred and widely chanted mantras, invoking peace and inner strength.", te: "'శివునికి నమస్కారం' — శాంతి, అంతర్గత శక్తిని ప్రసాదించే అత్యంత పవిత్రమైన మంత్రాలలో ఒకటి." } }
    ],
    katha: {
      title: { en: "Neelakantha — The Blue-Throated Lord", te: "నీలకంఠుడు" },
      story: {
        en: "When gods and demons churned the ocean of milk in search of the nectar of immortality, the very first thing to emerge was a deadly poison called Halahala, powerful enough to destroy all creation. Frightened, everyone turned to Lord Shiva for protection. Out of compassion, Shiva drank the poison himself, but his consort Parvati held his throat so it would not pass further into his body. The poison stayed in his throat, turning it blue forever — which is why Shiva is also called Neelakantha, 'the blue-throated one.' Bilva leaves are said to have a cooling effect and are offered to soothe him even today.",
        te: ""
      },
      simple: {
        en: "When gods and demons churned the ocean looking for nectar, a deadly poison came out first and threatened to destroy everything. Shiva drank it to save the world, and Parvati held his throat so it wouldn't spread further — turning his throat blue forever. That's why he's called Neelakantha, and why we offer cooling bilva leaves to him.",
        te: "దేవతలు రాక్షసులు అమృతం కోసం సముద్రాన్ని మధించినప్పుడు, ముందుగా విషం వచ్చింది. లోకాన్ని కాపాడటానికి శివుడు దాన్ని తాగాడు, పార్వతి అతని గొంతును పట్టుకుని అది శరీరంలోకి వెళ్లకుండా ఆపింది — గొంతు నీలంగా మారింది. అందుకే అతన్ని నీలకంఠుడు అంటారు, చల్లదనం కోసం బిల్వ పత్రాలు సమర్పిస్తారు."
      }
    }
  },

  {
    id: "sankranti",
    icon: "🌞",
    color: "#C1611D",
    name: { en: "Sankranti", te: "సంక్రాంతి" },
    tagline: { en: "Harvest festival honouring the Sun", te: "సూర్యదేవుడిని గౌరవించే పంట పండుగ" },
    description: { en: "A harvest festival celebrating the Sun's journey northward, marked by rangoli, sugarcane and new rice.", te: "సూర్యుని ఉత్తరాయణ ప్రయాణాన్ని జరుపుకుంటూ ముగ్గులు, చెరకు, కొత్త బియ్యంతో చేసే పంట పండుగ." },
    hasFullTelugu: false,
    items: [
      { en: "Rangoli (muggu) colours", te: "ముగ్గు రంగులు" },
      { en: "Gobbemmalu (dung flower discs)", te: "గొబ్బెమ్మలు" },
      { en: "Sugarcane", te: "చెరకు" },
      { en: "Til-jaggery sweets", te: "నువ్వుల బెల్లం స్వీట్లు" },
      { en: "New harvested rice", te: "కొత్త బియ్యం" }
    ],
    steps: [
      { title: { en: "Preparation", te: "సిద్ధత" }, text: { en: "Clean the entrance and draw a large rangoli, placing gobbemmalu at its centre as part of the morning ritual.", te: "గుమ్మం శుభ్రం చేసి పెద్ద ముగ్గు వేసి, మధ్యలో గొబ్బెమ్మలు ఉంచండి." } },
      { title: { en: "Surya Pooja", te: "సూర్య పూజ" }, text: { en: "Offer water and flowers to the rising Sun, thanking him for the harvest and the changing season.", te: "ఉదయించే సూర్యునికి నీళ్లు, పూలు సమర్పించి పంటకు, రుతు మార్పుకు కృతజ్ఞతలు తెలుపుకోండి." } },
      { title: { en: "Pongal / Naivedyam", te: "పొంగలి / నైవేద్యం" }, text: { en: "Cook fresh Pongal with the new rice and offer it first to the Sun God before the family shares it together.", te: "కొత్త బియ్యంతో పొంగలి వండి, ముందుగా సూర్యునికి నివేదించి తర్వాత కుటుంబం అందరూ పంచుకోండి." } },
      { title: { en: "Gangireddu & Haridasu", te: "గంగిరెద్దులు & హరిదాసు" }, text: { en: "Welcome the traditional Gangireddu (decorated bull) performers and Haridasu singers if they visit, as part of the festive spirit.", te: "అలంకరించిన గంగిరెద్దుల ఆటగాళ్లను, హరిదాసు గాయకులను పండుగ సంప్రదాయంగా ఆహ్వానించండి." } },
      { title: { en: "Family Gathering", te: "కుటుంబ సమావేశం" }, text: { en: "Spend the day with family, flying kites, exchanging sweets and visiting elders to seek their blessings.", te: "కుటుంబంతో పతంగులు ఎగరేస్తూ, స్వీట్లు పంచుకుంటూ, పెద్దలను కలిసి ఆశీర్వాదం తీసుకుంటూ రోజు గడపండి." } }
    ],
    mantras: [
      { title: { en: "Surya Mantra", te: "సూర్య మంత్రం" }, text: { en: "Om Suryaya Namah", te: "ఓం సూర్యాయ నమః" }, meaning: { en: "A salutation to the Sun God, the source of light, energy and life.", te: "కాంతి, శక్తి, జీవానికి మూలమైన సూర్యభగవానునికి నమస్కారం." } }
    ],
    katha: {
      title: { en: "Why We Celebrate the Sun's Journey", te: "సూర్యుని ప్రయాణాన్ని ఎందుకు జరుపుకుంటాం" },
      story: {
        en: "Sankranti marks the day the Sun begins its six-month journey northward (Uttarayana), a period considered especially auspicious in Indian tradition. Elders say that Bhishma Pitamaha from the Mahabharata, though wounded and lying on a bed of arrows, chose to wait for Uttarayana before leaving his body, believing it to be the most sacred time to depart. Farmers, too, see this as the moment their hard work through the year turns into a golden harvest, and celebrate with sweets made of the season's own sesame, jaggery and rice.",
        te: ""
      },
      simple: {
        en: "Sankranti celebrates the day the Sun starts moving northward, a time considered very sacred. It's also harvest time, so farmers celebrate the year's hard work turning into golden crops with rice, jaggery and sesame sweets, rangoli and time with family.",
        te: "సూర్యుడు ఉత్తరం వైపు ప్రయాణం మొదలుపెట్టే రోజునే సంక్రాంతిగా జరుపుకుంటారు, ఇది చాలా పవిత్రమైన సమయం. ఇది పంట కాలం కూడా, రైతులు తమ ఏడాది కష్టం బంగారు పంటగా మారడాన్ని బియ్యం, బెల్లం, నువ్వుల స్వీట్లతో, ముగ్గులతో, కుటుంబంతో గడుపుతూ జరుపుకుంటారు."
      }
    }
  },

  {
    id: "karthika-masam",
    icon: "🪔",
    color: "#5C4A9C",
    name: { en: "Karthika Masam", te: "కార్తీక మాసం" },
    tagline: { en: "A sacred month of lamps and devotion", te: "దీపాలు, భక్తితో నిండిన పవిత్ర మాసం" },
    description: { en: "A month-long tradition of lighting lamps at dusk, honouring both Shiva and Vishnu.", te: "సాయంకాలం దీపాలు వెలిగిస్తూ శివ విష్ణువులను గౌరవించే నెల రోజుల సంప్రదాయం." },
    hasFullTelugu: false,
    items: [
      { en: "Diyas (multiple)", te: "దీపాలు (అనేకం)" },
      { en: "Ghee or sesame oil", te: "నెయ్యి / నువ్వుల నూనె" },
      { en: "Cotton wicks", te: "పత్తి వత్తులు" },
      { en: "Flowers", te: "పూలు" },
      { en: "Amla (usirikaya) branches", te: "ఉసిరికాయ కొమ్మలు" }
    ],
    steps: [
      { title: { en: "Preparation", te: "సిద్ధత" }, text: { en: "Clean the pooja area and the space near Tulasi plant or the front door where lamps will be lit each evening.", te: "పూజా స్థలాన్ని, తులసి మొక్క లేదా గుమ్మం వద్ద ప్రతి సాయంత్రం దీపాలు వెలిగించే స్థలాన్ని శుభ్రం చేయండి." } },
      { title: { en: "Deepa Aradhana", te: "దీప ఆరాధన" }, text: { en: "Light a lamp near the Tulasi plant and at the entrance every evening at dusk throughout the month.", te: "నెల రోజులూ ప్రతి సాయంత్రం తులసి మొక్క దగ్గర, గుమ్మం వద్ద దీపం వెలిగించండి." } },
      { title: { en: "Shiva-Vishnu Pooja", te: "శివ-విష్ణు పూజ" }, text: { en: "Offer flowers and a short prayer to both Lord Shiva and Lord Vishnu, as this month honours both equally.", te: "ఈ మాసం శివ విష్ణువులిద్దరినీ సమానంగా గౌరవిస్తుంది కాబట్టి, ఇద్దరికీ పూలు, చిన్న ప్రార్థన సమర్పించండి." } },
      { title: { en: "Vanabhojanam", te: "వనభోజనం" }, text: { en: "If possible, gather with family under an amla tree for a meal together, a cherished tradition of this month.", te: "వీలైతే కుటుంబంతో కలిసి ఉసిరి చెట్టు కింద భోజనం చేయండి, ఇది ఈ మాసపు ప్రియమైన సంప్రదాయం." } },
      { title: { en: "Naivedyam & Harathi", te: "నైవేద్యం & హారతి" }, text: { en: "Offer a simple naivedyam and harathi each evening after lighting the lamps, closing the day's devotion.", te: "దీపాలు వెలిగించిన తర్వాత ప్రతి సాయంత్రం సాధారణ నైవేద్యం, హారతితో ఆ రోజు భక్తిని ముగించండి." } }
    ],
    mantras: [
      { title: { en: "Deepa Mantra", te: "దీప మంత్రం" }, text: { en: "Shubham Karoti Kalyanam, Arogyam Dhana Sampada, Shatru Buddhi Vinashaya, Deepajyotir Namostute.", te: "శుభం కరోతి కళ్యాణం, ఆరోగ్యం ధన సంపద, శత్రు బుద్ధి వినాశాయ, దీపజ్యోతిర్ నమోస్తుతే." }, meaning: { en: "Salutations to the lamp's flame, which brings auspiciousness, health, wealth and dispels negative thoughts.", te: "శుభం, ఆరోగ్యం, సంపదను ఇచ్చే, చెడు ఆలోచనలను తొలగించే దీపజ్యోతికి నమస్కారం." } }
    ],
    katha: {
      title: { en: "The Significance of Karthika Deepam", te: "కార్తీక దీపం విశిష్టత" },
      story: {
        en: "It is said that Lord Shiva once appeared as an endless column of light (Jyotirlinga) to settle a dispute between Brahma and Vishnu over who was supreme, teaching them that the light of true knowledge cannot be measured. In memory of this, devotees light rows of lamps throughout Karthika month, believing that even a single lamp lit with devotion during this time removes ignorance and darkness from one's life, and brings the household the blessings of both Shiva and Vishnu.",
        te: ""
      },
      simple: {
        en: "Long ago, Shiva appeared as an endless pillar of light to show Brahma and Vishnu that true knowledge has no limit. In memory of this, people light rows of lamps every evening through Karthika month, believing each lamp clears away darkness and ignorance from their lives.",
        te: "పూర్వం బ్రహ్మ, విష్ణువుల మధ్య వివాదాన్ని తీర్చడానికి శివుడు అంతులేని జ్యోతి స్తంభంగా ప్రత్యక్షమయ్యాడు, నిజమైన జ్ఞానానికి హద్దు లేదని చూపించాడు. దీని జ్ఞాపకార్థం కార్తీక మాసమంతా ప్రతి సాయంత్రం వరుసగా దీపాలు వెలిగిస్తారు, ప్రతి దీపం జీవితంలో చీకటిని, అజ్ఞానాన్ని తొలగిస్తుందని నమ్మకం."
      }
    }
  }
];

// ---- Simple keyword index for search (built once, used by app.js) --
function buildSearchIndex() {
  return POOJAS.map(p => {
    const hay = [
      p.name.en, p.name.te, p.tagline.en, p.description.en,
      p.katha.title.en, p.katha.story.en,
      ...p.mantras.map(m => m.title.en + " " + m.text.en),
      ...p.items.map(i => i.en)
    ].join(" ").toLowerCase();
    return { id: p.id, hay };
  });
}
