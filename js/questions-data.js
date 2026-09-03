/**
 * Meelad Fest Goliyangadi - Master Islamic Question Bank
 * Specialized in Fiqh of Imam al-Shafi'i (رحمه الله)
 * 25 Comprehensive Jurisprudence Questions across 5 Essential Chapters
 * Bilingual: English and Malayalam (മലയാളം)
 */

const DEFAULT_QUESTIONS = [
  // ================= ROUND 1: TAHARAH - PURITY & WATER (ത്വഹാറത്ത് / ശുദ്ധി) =================
  {
    id: "fq_1",
    round: "r1",
    roundName: "Shafi'i Fiqh: Taharah (Purity)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ത്വഹാറത്ത് (ശുദ്ധി)",
    category: "Taharah",
    difficulty: "Easy",
    questionEn: "According to the Shafi'i madhhab, how many obligatory pillars (Fard / Arkan) of Wudu (ablution) are there?",
    questionMl: "ശാഫിഈ മദ്ഹബ് പ്രകാരം വുളൂഇന്റെ നിർബന്ധ ഫർളുകൾ (അർകാനുകൾ) എത്രയാണ്?",
    options: [
      "6 (Niyyah, Face, Arms, Part of Head, Feet, Tarteeb)",
      "4 (Face, Arms, Head, Feet)",
      "7 (Including rubbing / Dalk)",
      "8 (Including Bismillah and gargling)"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i school, Wudu has 6 Fards: 1. Intention (Niyyah), 2. Washing the face, 3. Washing arms including elbows, 4. Wiping part of the head, 5. Washing feet including ankles, and 6. Tarteeb (observing this sequence).",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ വുളൂഇന് 6 ഫർളുകളാണുള്ളത്: നിയ്യത്ത്, മുഖം കഴുകൽ, കൈകൾ മുട്ടോട് കൂടി കഴുകൽ, തലയുടെ കുറച്ചു ഭാഗം തടവൽ, കാലുകൾ ഞെരിയാണിയോട് കൂടി കഴുകൽ, തർതീബ് (ക്രമം പാലിക്കൽ).",
    points: 10
  },
  {
    id: "fq_2",
    round: "r1",
    roundName: "Shafi'i Fiqh: Taharah (Purity)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ത്വഹാറത്ത് (ശുദ്ധി)",
    category: "Taharah",
    difficulty: "Medium",
    questionEn: "In Shafi'i Fiqh, what is the approximate volume of 'Qullatayn' (large volume of water) that does not become impure by contact with Najis unless its taste, color, or smell alters?",
    questionMl: "ശാഫിഈ കർമ്മശാസ്ത്ര പ്രകാരം അശുദ്ധി വീണാലും രുചി, നിറം, ഗന്ധം എന്നിവ മാറാത്ത പക്ഷം നജിസാവാത്ത 'ഖുല്ലത്തൈൻ' (വലിയ അളവ് വെള്ളം) ഏകദേശം എത്ര ലിറ്ററാണ്?",
    options: [
      "Approx. 192 to 216 Liters (~500 Iraqi Ratl)",
      "Approx. 50 Liters",
      "Approx. 500 Liters",
      "Approx. 1000 Liters"
    ],
    correctIndex: 0,
    explanationEn: "Qullatayn is approximately 500 Iraqi Ratls, evaluated by contemporary scholars as around 192 to 216 liters (roughly 200 liters or a cubic space of 1.25 cubits in height, width, and length).",
    explanationMl: "ശാഫിഈ കർമ്മശാസ്ത്രത്തിൽ ഖുല്ലത്തൈൻ എന്നാൽ 500 ബഗ്ദാദി റത്തൽ ആണ്. ആധുനിക കണക്കനുസരിച്ച് ഇത് ഏകദേശം 192 മുതൽ 216 ലിറ്റർ (ഏകദേശം 200 ലിറ്റർ) ജലമാണ്.",
    points: 10
  },
  {
    id: "fq_3",
    round: "r1",
    roundName: "Shafi'i Fiqh: Taharah (Purity)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ത്വഹാറത്ത് (ശുദ്ധി)",
    category: "Taharah",
    difficulty: "Medium",
    questionEn: "According to the authentic Shafi'i position, does direct skin-to-skin contact between a marriageable man and woman (non-mahram) without a barrier invalidate Wudu?",
    questionMl: "ശാഫിഈ മദ്ഹബിലെ പ്രബല വിധി പ്രകാരം, മറയില്ലാതെ അന്യസ്ത്രീയും പുരുഷനും തമ്മിൽ തൊലിപ്പുറത്ത് നേരിട്ട് സ്പർശിച്ചാൽ വുളൂഅ് മുറിയുമോ?",
    options: [
      "Yes, it invalidates the Wudu of both the toucher and touched",
      "Only if accompanied by sexual desire / lust (Shahwah)",
      "No, skin contact never invalidates Wudu",
      "Only the person who initiated the touch loses Wudu"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i school, direct skin contact between an adult male and an unrelated marriageable female (non-mahram) invalidates Wudu for both parties, whether intentional or accidental, with or without desire.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ അന്യസ്ത്രീ-പുരുഷന്മാരുടെ ത്വക്കുകൾ യാതൊരു മറയുമില്ലാതെ സ്പർശിച്ചാൽ വികാരമുണ്ടെങ്കിലും ഇല്ലെങ്കിലും മനഃപൂർവ്വമാണെങ്കിലും അല്ലെങ്കിലും രണ്ടുപേരുടെയും വുളൂഅ് മുറിയും.",
    points: 10
  },
  {
    id: "fq_4",
    round: "r1",
    roundName: "Shafi'i Fiqh: Taharah (Purity)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ത്വഹാറത്ത് (ശുദ്ധി)",
    category: "Taharah",
    difficulty: "Medium",
    questionEn: "How must an item contaminated by severe impurity (Najasah Mughalladhah) from a dog or pig be purified in the Shafi'i madhhab?",
    questionMl: "നായ അല്ലെങ്കിൽ പന്നി തട്ടി കടുപ്പമേറിയ നജസ് (മുഗല്ലള) ആയ ഒരു വസ്തുവിനെ ശുദ്ധിയാക്കാൻ ശാഫിഈ മദ്ഹബ് കൽപ്പിക്കുന്ന മാർഗ്ഗമേത്?",
    options: [
      "Washing 7 times, one of which must be mixed with clean purifying soil",
      "Washing 3 times with pure water and soap",
      "Washing once thoroughly with hot water",
      "Sprinkling water over it until moist"
    ],
    correctIndex: 0,
    explanationEn: "Severe impurity (Najasah Mughalladhah) must be washed seven times with pure water, and one of those seven washings must be mixed with pure soil/earth (Tuhr / Turab).",
    explanationMl: "നായ, പന്നി എന്നിവ മൂലമുണ്ടാകുന്ന മുഗല്ലളായ നജസ് നീക്കം ചെയ്യാൻ മണ്ണു കലക്കിയ ശുദ്ധജലം കൊണ്ട് ഒരു തവണയും അല്ലാതെ 6 തവണയുമായി ആകെ 7 പ്രാവശ്യം കഴുകി ശുദ്ധിയാക്കൽ നിർബന്ധമാണ്.",
    points: 10
  },
  {
    id: "fq_5",
    round: "r1",
    roundName: "Shafi'i Fiqh: Taharah (Purity)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ത്വഹാറത്ത് (ശുദ്ധി)",
    category: "Taharah",
    difficulty: "Easy",
    questionEn: "How many obligatory integrals (Fard) are required for a valid purificatory bath (Ghusl) in the Shafi'i school?",
    questionMl: "വലിയ അശുദ്ധിയിൽ നിന്നുള്ള നിർബന്ധ കുളി (ഗുസ്‌ൽ) സാധുവാകാൻ ശാഫിഈ മദ്ഹബ് പ്രകാരം എത്ര ഫർളുകൾ നിർവ്വഹിക്കണം?",
    options: [
      "2 (Niyyah and washing the entire body, skin, and hair)",
      "3 (Gargling, rinsing nose, and washing body)",
      "5 (Including wudu before ghusl)",
      "1 (Washing the body only)"
    ],
    correctIndex: 0,
    explanationEn: "In Shafi'i Fiqh, Ghusl has only 2 mandatory pillars: 1. The intention (Niyyah) at the onset of washing, and 2. Ensuring water reaches all external parts of the body including every strand of hair and all skin.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ കുളിയുടെ ഫർളുകൾ രണ്ടെണ്ണം മാത്രമാണ്: 1. വലിയ അശുദ്ധിയെ ഉയർത്തുന്നുവെന്ന നിയ്യത്ത്, 2. തലമുടി, രോമങ്ങൾ, ചർമ്മം എന്നിവയുൾപ്പെടെ ശരീരം മുഴുവൻ വെള്ളം എത്തിക്കൽ.",
    points: 10
  },

  // ================= ROUND 2: SALAH - PRAYER & ITS RULES (സ്വലാത്ത് / നിസ്കാരം) =================
  {
    id: "fq_6",
    round: "r2",
    roundName: "Shafi'i Fiqh: Salah (Prayer)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: സ്വലാത്ത് (നിസ്കാരം)",
    category: "Salah",
    difficulty: "Easy",
    questionEn: "In the Shafi'i madhhab, is 'Bismillahir-Rahmanir-Rahim' considered an obligatory verse of Surah Al-Fatihah in Salah?",
    questionMl: "ശാഫിഈ മദ്ഹബ് പ്രകാരം നിസ്കാരത്തിൽ 'ബിസ്മില്ലാഹിർറഹ്മാനിർറഹീം' എന്നത് സൂറത്തുൽ ഫാത്തിഹയിലെ നിർബന്ധ ആയത്താണോ?",
    options: [
      "Yes, it is the first verse of Al-Fatihah; omitting it invalidates the prayer",
      "No, reciting it is only a voluntary Sunnah",
      "It is only recited quietly in Sirri (silent) prayers",
      "It is only required in the very first Rak'ah"
    ],
    correctIndex: 0,
    explanationEn: "Imam al-Shafi'i established that 'Bismillahir-Rahmanir-Rahim' is a full, counted verse (Ayah) of Surah Al-Fatihah. Omitting it deliberately or unintentionally invalidates the recitation of Al-Fatihah and the prayer.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ ബിസ്മി എന്നത് സൂറത്തുൽ ഫാത്തിഹയിലെ ഏഴ് ആയത്തുകളിൽ ഒന്നാമത്തെ പൂർണ്ണ ആയത്താണ്. ബിസ്മി ഉപേക്ഷിച്ചാൽ ഫാത്തിഹ സാധുവാകില്ല, നിസ്കാരവും അസാധുവാകും.",
    points: 10
  },
  {
    id: "fq_7",
    round: "r2",
    roundName: "Shafi'i Fiqh: Salah (Prayer)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: സ്വലാത്ത് (നിസ്കാരം)",
    category: "Salah",
    difficulty: "Medium",
    questionEn: "What is the legal status of reciting Du'a al-Qunut during the I'tidal of the second Rak'ah of Fajr prayer in Shafi'i Fiqh?",
    questionMl: "സുബ്ഹ് നിസ്കാരത്തിലെ രണ്ടാം റക്അത്തിലെ ഇഅ്തിദാലിൽ ദുആഉൽ ഖുനൂത്ത് ഓതുന്നതിന്റെ ശാഫിഈ കർമ്മശാസ്ത്ര വിധി എന്താണ്?",
    options: [
      "Sunnah Ab'ad (Emphasized Sunnah compensable by Sujud al-Sahw if missed)",
      "Fard / Wajib (Obligatory pillar)",
      "Sunnah Hai'ah (Light Sunnah that needs no prostration)",
      "Makruh (Disliked)"
    ],
    correctIndex: 0,
    explanationEn: "Reciting Qunut in the second Rak'ah of Fajr (and during the second half of Ramadan in Witr) is an emphasized Sunnah (Ab'ad). If omitted forgetfully or intentionally, it is Sunnah to perform Sujud al-Sahw before Salam.",
    explanationMl: "സുബ്ഹിലെ ഖുനൂത്ത് അബ്ആളായ സുന്നത്താണ് (ശക്തമായ സുന്നത്ത്). ഇത് മനഃപൂർവ്വമോ അല്ലാതെയോ വിട്ടുപോയാൽ സലാമിന് മുമ്പ് സഹ്‌വിന്റെ സുജൂദ് ചെയ്യൽ സുന്നത്താണ്.",
    points: 10
  },
  {
    id: "fq_8",
    round: "r2",
    roundName: "Shafi'i Fiqh: Salah (Prayer)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: സ്വലാത്ത് (നിസ്കാരം)",
    category: "Salah",
    difficulty: "Medium",
    questionEn: "In the Shafi'i madhhab, at what exact moment is Sujud al-Sahw (prostration of forgetfulness) performed?",
    questionMl: "ശാഫിഈ കർമ്മശാസ്ത്ര പ്രകാരം മറവിയുടെ സുജൂദ് (സഹ്‌വിന്റെ സുജൂദ്) നിസ്കാരത്തിൽ എപ്പോഴാണ് ചെയ്യേണ്ടത്?",
    options: [
      "Immediately after completing Tashahhud and Durood, before the first Salam",
      "Immediately after pronouncing both Salams",
      "Only after reciting Salam to the right",
      "During the final standing position"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i school, Sujud al-Sahw consists of two prostrations performed strictly before uttering the Salam, right after completing the final Tashahhud, blessings upon the Prophet ﷺ, and supplication.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ സഹ്‌വിന്റെ സുജൂദ് ചെയ്യേണ്ടത് അവസാന അത്തഹിയ്യാത്തിനും സ്വലാത്തിനും ദുആഇനും ശേഷം സലാം വീട്ടുന്നതിന് തൊട്ടുമുമ്പാണ്.",
    points: 10
  },
  {
    id: "fq_9",
    round: "r2",
    roundName: "Shafi'i Fiqh: Salah (Prayer)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: സ്വലാത്ത് (നിസ്കാരം)",
    category: "Salah",
    difficulty: "Medium",
    questionEn: "According to the Shafi'i madhhab, what is the minimum quorum of qualified permanent residents (Ahl al-Jumu'ah) required for a valid Friday prayer?",
    questionMl: "ശാഫിഈ മദ്ഹബ് പ്രകാരം ജുമുഅ നിസ്കാരം സാധുവാകാൻ ജുമുഅ നിർബന്ധമുള്ള എത്ര സ്ഥിരവാസികൾ (അഹ്‌ലുൽ ജുമുഅ) വേണം?",
    options: [
      "40 eligible resident men from beginning to end",
      "12 resident men",
      "3 persons including the Imam",
      "4 persons including the Khatib"
    ],
    correctIndex: 0,
    explanationEn: "The official position of the Shafi'i madhhab requires at least 40 sane, adult, free, male permanent residents of the locality from the start of the two Khutbahs through the end of the Friday prayer.",
    explanationMl: "ശാഫിഈ മദ്ഹബിലെ പ്രബല വിധി പ്രകാരം ജുമുഅ നിർബന്ധമാകുന്ന (പ്രായപൂർത്തി, ബുദ്ധി, സ്വാതന്ത്ര്യം, പുരുഷത്വം, സ്ഥിരതാമസം എന്നീ ഗുണങ്ങളുള്ള) ചുരുങ്ങിയത് 40 ആളുകൾ ഖുതുബയുടെ തുടക്കം മുതൽ നിസ്കാരം കഴിയുന്നത് വരെ ഉണ്ടാകണം.",
    points: 10
  },
  {
    id: "fq_10",
    round: "r2",
    roundName: "Shafi'i Fiqh: Salah (Prayer)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: സ്വലാത്ത് (നിസ്കാരം)",
    category: "Salah",
    difficulty: "Hard",
    questionEn: "What is the minimum travel distance (Masafat al-Qasr / 2 Marhalahs) that allows a traveler to shorten (Qasr) 4-rak'ah prayers in Shafi'i Fiqh?",
    questionMl: "നാല് റക്അത്തുള്ള നിസ്കാരങ്ങൾ ഖസ്വ്‌റാക്കി ചുരുക്കാൻ ശാഫിഈ മദ്ഹബ് അനുവദിക്കുന്ന യാത്രയുടെ ചുരുങ്ങിയ ദൂരം (മർഹലത്തൈൻ) എത്രയാണ്?",
    options: [
      "Approx. 81 to 85 Kilometers (16 Farsakhs / 48 Hashimi Miles)",
      "Approx. 40 Kilometers",
      "Approx. 120 Kilometers",
      "Any journey lasting more than 24 hours regardless of distance"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, Masafat al-Qasr is two Marhalahs (16 Farsakhs, equivalent to 48 prophetic miles), accurately measured today as approximately 81 to 85 kilometers.",
    explanationMl: "ശാഫിഈ കർമ്മശാസ്ത്രത്തിൽ ഖസ്വ്‌റിന്റെ ദൂരം രണ്ട് മർഹലയാണ് (16 ഫർസഖ് / 48 മൈൽ). ഇന്നത്തെ അളവുകോലിൽ ഇത് ഏകദേശം 81 മുതൽ 85 കിലോമീറ്റർ വരെ ദൂരമാണ്.",
    points: 10
  },

  // ================= ROUND 3: SAWM & ZAKAH - FASTING & CHARITY (നോമ്പും സകാത്തും) =================
  {
    id: "fq_11",
    round: "r3",
    roundName: "Shafi'i Fiqh: Sawm & Zakah",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: നോമ്പും സകാത്തും",
    category: "Sawm",
    difficulty: "Easy",
    questionEn: "In Shafi'i Fiqh, what is the mandatory requirement regarding the intention (Niyyah) for an obligatory fast in Ramadan?",
    questionMl: "റമളാനിലെ നിർബന്ധ നോമ്പിന്റെ നിയ്യത്തുമായി ബന്ധപ്പെട്ട് ശാഫിഈ മദ്ഹബിലെ നിർബന്ധ നിബന്ധന എന്താണ്?",
    options: [
      "Tabyit: Intention must be made every night before true dawn (Fajr) for each day",
      "A single intention on the first night suffices for the entire month",
      "Intention can be formed at any time before Dhuhr prayer",
      "Intention is only required verbally after dawn"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, for each individual day of an obligatory fast (Ramadan, Qada, Kaffarah), the intention must be made at night (Tabyit) before the arrival of Fajr, specifying the fast.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ റമളാനിലെ ഓരോ ദിവസത്തെയും നിർബന്ധ നോമ്പിന് തലേദിവസം രാത്രിയിൽ (ഫജ്‌റിന് മുൻപായി) പ്രത്യേകമായി നിയ്യത്ത് വെക്കൽ (തബ്‌യീത്) നിർബന്ധമാണ്.",
    points: 10
  },
  {
    id: "fq_12",
    round: "r3",
    roundName: "Shafi'i Fiqh: Sawm & Zakah",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: നോമ്പും സകാത്തും",
    category: "Sawm",
    difficulty: "Medium",
    questionEn: "According to Shafi'i jurisprudence, does intentionally swallowing phlegm/mucus that has reached the visible oral cavity invalidate the fast?",
    questionMl: "തൊണ്ടയിൽ നിന്ന് വായിലേക്ക് എത്തിയ കഫം തുപ്പിക്കളയാൻ സൗകര്യമുണ്ടായിട്ടും മനഃപൂർവ്വം വിഴുങ്ങിയാൽ നോമ്പ് മുറിയുമോ എന്നാണ് ശാഫിഈ വിധി?",
    options: [
      "Yes, intentionally swallowing it after reaching the mouth cavity breaks the fast",
      "No, swallowing bodily secretions never invalidates the fast",
      "Only if mixed with food remnants or saliva",
      "It is only Makruh (disliked) and does not break the fast"
    ],
    correctIndex: 0,
    explanationEn: "In Shafi'i Fiqh, if mucus or phlegm reaches the visible limit of the mouth (Makhraj of the letter Kha/Ha) and one is able to spit it out, deliberately swallowing it invalidates the fast.",
    explanationMl: "ശാഫിഈ കർമ്മശാസ്ത്ര പ്രകാരം കഫം അക്ഷരങ്ങളുടെ പുറപ്പെടൽ സ്ഥാനമായ വായയുടെ അതിരിലേക്ക് എത്തുകയും അത് തുപ്പിക്കളയാൻ സാധിക്കുകയും ചെയ്തിരിക്കെ മനഃപൂർവ്വം വിഴുങ്ങിയാൽ നോമ്പ് മുറിയും.",
    points: 10
  },
  {
    id: "fq_13",
    round: "r3",
    roundName: "Shafi'i Fiqh: Sawm & Zakah",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: നോമ്പും സകാത്തും",
    category: "Sawm",
    difficulty: "Hard",
    questionEn: "What is the foundational Shafi'i rule regarding items entering the body cavity (Jawf) during fasting?",
    questionMl: "നോമ്പ് മുറിയുന്ന കാര്യങ്ങളിൽ ശാഫിഈ മദ്ഹബിലെ ശരീര ദ്വാരങ്ങളുമായി (ജൗഫ്) ബന്ധപ്പെട്ട അടിസ്ഥാന നിയമമെന്താണ്?",
    options: [
      "Any physical substance ('Ayn) deliberately introduced through an open natural passage invalidates the fast",
      "Only nutritious food and thirst-quenching drinks invalidate the fast",
      "Only substances that enter through the mouth invalidate the fast",
      "Injections through muscles or veins always break the fast"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i school, anything with palpable substance ('Ayn) that deliberately enters the open body cavity (Jawf) through a naturally open orifice (ears, nose, throat, front/back private parts) breaks the fast, whether nutritious or not.",
    explanationMl: "തുറക്കപ്പെട്ട ദ്വാരങ്ങളിലൂടെ (മൂക്ക്, ചെവി, വായ, മുൻ-പിൻ ദ്വാരങ്ങൾ) വലിപ്പമുള്ള എന്തെങ്കിലും വസ്തുക്കൾ ശരീരത്തിന്റെ ഉള്ളിലേക്ക് (ജൗഫ്) കടന്നാൽ ഭക്ഷണമായാലും അല്ലെങ്കിലും നോമ്പ് മുറിയുമെന്നതാണ് ശാഫിഈ നിയമം.",
    points: 10
  },
  {
    id: "fq_14",
    round: "r3",
    roundName: "Shafi'i Fiqh: Sawm & Zakah",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: നോമ്പും സകാത്തും",
    category: "Zakah",
    difficulty: "Medium",
    questionEn: "What is the official Shafi'i ruling on paying cash/money instead of food grains for Zakat al-Fitr?",
    questionMl: "സകാത്തുൽ ഫിത്വർ നൽകുമ്പോൾ ഭക്ഷ്യധാന്യത്തിന് പകരം പണമായി നൽകുന്നതിനെക്കുറിച്ച് ശാഫിഈ മദ്ഹബിലെ ഔദ്യോഗിക നിലപാട് എന്താണ്?",
    options: [
      "It is not permissible; it must be paid as one Sa' of the region's staple food grain",
      "Cash is preferred and recommended under all circumstances",
      "Only half the cash value is acceptable",
      "Any household commodity can substitute food grain"
    ],
    correctIndex: 0,
    explanationEn: "The established Shafi'i position requires Zakat al-Fitr to be distributed strictly in the staple food grain (Qut al-Balad, such as rice or wheat) of one Sa' (approx. 2.7 to 3 kg) per person, not in monetary currency.",
    explanationMl: "ശാഫിഈ മദ്ഹബിലെ പ്രബലമായ വിധി പ്രകാരം സകാത്തുൽ ഫിത്വർ നാട്ടിലെ മുഖ്യാഹാരമായ ധാന്യമായി (അരി/ഗോതമ്പ്) ഒരു സാഅ് (ഏകദേശം 2.7 - 3 കി.ഗ്രാം) തന്നെ നൽകണം. പണമായി നൽകിയാൽ ശാഫിഈ മദ്ഹബ് പ്രകാരം വീടുകയില്ല.",
    points: 10
  },
  {
    id: "fq_15",
    round: "r3",
    roundName: "Shafi'i Fiqh: Sawm & Zakah",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: നോമ്പും സകാത്തും",
    category: "Zakah",
    difficulty: "Medium",
    questionEn: "In Shafi'i Fiqh, what is the minimum Nisab (threshold) of pure gold upon which Zakat becomes due after holding it for one lunar year (Hawl)?",
    questionMl: "ശാഫിഈ മദ്ഹബ് പ്രകാരം ഒരു വർഷം പൂർത്തിയായ സ്വർണ്ണത്തിന് സകാത്ത് നിർബന്ധമാകുന്ന ഏറ്റവും കുറഞ്ഞ പരിധി (നിസ്വാബ്) എത്രയാണ്?",
    options: [
      "20 Mithqals (approximately 84 to 85 grams of pure gold)",
      "10 Mithqals (approximately 42 grams)",
      "50 Mithqals (approximately 212 grams)",
      "7.5 Tolas of gold"
    ],
    correctIndex: 0,
    explanationEn: "The Nisab for gold in the Shafi'i school is 20 Mithqals (Shar'i Dinars), which equals approximately 84 to 85 grams of pure gold. The payable Zakat is 2.5% (one-fortieth).",
    explanationMl: "സ്വർണ്ണത്തിന്റെ സകാത്ത് നിർബന്ധമാകുന്ന നിസ്വാബ് 20 മിസ്ഖാൽ ആണ്. ഇത് ഇന്നത്തെ തൂക്കത്തിൽ ഏകദേശം 84-85 ഗ്രാം ശുദ്ധമായ സ്വർണ്ണത്തിന് തുല്യമാണ്. ഇതിൽ നിന്ന് നൽകേണ്ടത് 2.5% (നാൽപ്പതിൽ ഒന്ന്) ആണ്.",
    points: 10
  },

  // ================= ROUND 4: HAJJ, SACRIFICES & DAILY LIFE (ഹജ്ജും മറ്റ് വിധികളും) =================
  {
    id: "fq_16",
    round: "r4",
    roundName: "Shafi'i Fiqh: Hajj & Halal Laws",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ഹജ്ജും മറ്റ് വിധികളും",
    category: "Hajj",
    difficulty: "Easy",
    questionEn: "How many essential pillars (Arkan) of Hajj must be performed in the Shafi'i madhhab without which Hajj is invalid?",
    questionMl: "ഒഴിവാക്കിയാൽ ഹജ്ജ് ബാത്വിലാകുന്ന, ശാഫിഈ മദ്ഹബ് അനുശാസിക്കുന്ന ഹജ്ജിന്റെ നിർബന്ധ അർകാനുകൾ (ഫർളുകൾ) എത്രയാണ്?",
    options: [
      "6 (Ihram, Wuquf at Arafah, Tawaf al-Ifadah, Sa'i, Halq/Taqsir, and Tarteeb)",
      "4 (Ihram, Arafah, Tawaf, Sa'i)",
      "5 (Without Tarteeb)",
      "7 (Including Stoning of Jamarat)"
    ],
    correctIndex: 0,
    explanationEn: "The Shafi'i madhhab uniquely delineates 6 pillars for Hajj: 1. Ihram (intention), 2. Standing at Arafah (Wuquf), 3. Tawaf al-Ifadah, 4. Sa'i between Safa and Marwah, 5. Shaving or trimming hair (Halq/Taqsir), and 6. Tarteeb (order in most pillars).",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ ഹജ്ജിന്റെ അർകാനുകൾ 6 ആകുന്നു: 1. ഇഹ്റാം, 2. അറഫയിലെ നിൽപ്പ്, 3. ത്വവാഫുൽ ഇഫാള, 4. സഅ്‌യ്, 5. തലമുടി കളയലോ വെട്ടലോ, 6. മിക്ക അർകാനുകളിലുമുള്ള തർതീബ് (ക്രമം).",
    points: 10
  },
  {
    id: "fq_17",
    round: "r4",
    roundName: "Shafi'i Fiqh: Hajj & Halal Laws",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ഹജ്ജും മറ്റ് വിധികളും",
    category: "Hajj",
    difficulty: "Medium",
    questionEn: "If a pilgrim misses the standing at Arafah (Wuquf) during its specified time, what is the Shafi'i ruling on their Hajj?",
    questionMl: "നിർദ്ദിഷ്ട സമയത്ത് അറഫയിൽ സന്നിഹിതനാവാൻ കഴിയാതെ പോയ ആളുടെ ഹജ്ജിനെ സംബന്ധിച്ച് ശാഫിഈ മദ്ഹബിന്റെ വിധി എന്താണ്?",
    options: [
      "The Hajj is irrevocably lost; they must exit Ihram by performing Umrah and make up (Qada) the Hajj in a subsequent year",
      "They can compensate for it by slaughtering a sacrificial camel (Badanah)",
      "They can stand at Arafah on the morning of the 10th of Dhul Hijjah instead",
      "Their Hajj remains completely valid with a penalty fast of 10 days"
    ],
    correctIndex: 0,
    explanationEn: "Standing at Arafah is the quintessential pillar ('Al-Hajju Arafah'). If missed, Hajj cannot be redeemed with blood or charity; the pilgrim must perform the actions of Umrah to exit Ihram and must make up the Hajj immediately the following year.",
    explanationMl: "അറഫയിലെ നിൽപ്പ് നഷ്ടപ്പെട്ടാൽ ആ വർഷത്തെ ഹജ്ജ് നഷ്ടപ്പെട്ടു. അയാൾ ഉംറ ചെയ്ത് ഇഹ്‌റാമിൽ നിന്ന് ഒഴിവാകുകയും അടുത്ത വർഷം ആ ഹജ്ജ് നിർബന്ധമായും ഖളാഅ് വീട്ടുകയും വേണം. ബലിമൃഗത്തെ അറുത്താലും ഇത് പരിഹരിക്കപ്പെടില്ല.",
    points: 10
  },
  {
    id: "fq_18",
    round: "r4",
    roundName: "Shafi'i Fiqh: Hajj & Halal Laws",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ഹജ്ജും മറ്റ് വിധികളും",
    category: "Sacrifice",
    difficulty: "Medium",
    questionEn: "What is the minimum age requirement for a goat (Ma'z) to be sacrificed as an Udhiyyah (Qurbani) on Eid al-Adha in the Shafi'i school?",
    questionMl: "ബലിപെരുന്നാളിന് അറുക്കുന്ന സാധാരണ കോലാട് (മഅ്സ്) ബലിക്ക് സാധുവാകാൻ എത്ര വയസ്സ് പൂർത്തിയാകണമെന്ന് ശാഫിഈ ഫിഖ്ഹ് നിഷ്കർഷിക്കുന്നു?",
    options: [
      "Must have completed two full years and entered the third year",
      "Must have completed six months only",
      "Must have completed one full year and entered the second",
      "Must have completed four full years"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, a goat (Ma'z) is only valid for sacrifice once it completes 2 lunar years of age and enters its third. For sheep (Da'n), completing one year (or shedding front teeth after 6 months) suffices.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ കോലാട് (മഅ്സ്) ബലിയറുക്കാൻ രണ്ട് വയസ്സ് പൂർത്തിയായി മൂന്നാം വയസ്സിലേക്ക് കടക്കൽ നിർബന്ധമാണ്. എന്നാൽ ചെമ്മരിയാട് (ളഅ്ന്) ഒരു വയസ്സ് പൂർത്തിയായാൽ മതിയാകും.",
    points: 10
  },
  {
    id: "fq_19",
    round: "r4",
    roundName: "Shafi'i Fiqh: Hajj & Halal Laws",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ഹജ്ജും മറ്റ് വിധികളും",
    category: "Halal / Food",
    difficulty: "Easy",
    questionEn: "What is the general Shafi'i ruling on consuming aquatic sea creatures that live exclusively in water?",
    questionMl: "വെള്ളത്തിൽ മാത്രം ജീവിക്കുന്ന ജലജീവികളെ ഭക്ഷിക്കുന്നതുമായി ബന്ധപ്പെട്ട് ശാഫിഈ മദ്ഹബിലെ പൊതുവിധി എന്താണ്?",
    options: [
      "All animals living solely in water are Halal to eat without ritual slaughter, except venomous/harmful ones",
      "Only fish that have visible scales are Halal",
      "All marine animals except true fish are strictly Haram",
      "Consuming sea animals without ritual neck slaughter is Makruh"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, based on the hadith 'Its water is pure and its dead are lawful', all aquatic creatures that live solely in water (fish, prawns, squid, crabs that only live in water, etc.) are Halal without slaughter, unless poisonous or harmful.",
    explanationMl: "വെള്ളത്തിൽ മാത്രം ജീവിക്കുന്ന ജലജീവികളെല്ലാം അറുക്കാതെ തന്നെ ഭക്ഷിക്കൽ ഹലാലാണ് എന്നാണ് ശാഫിഈ മദ്ഹബിലെ പ്രബല വിധി. എന്നാൽ വിഷമുള്ളതോ ശരീരത്തിന് ഹാനികരമായതോ ആയവ ഭക്ഷിക്കാൻ പാടില്ല.",
    points: 10
  },
  {
    id: "fq_20",
    round: "r4",
    roundName: "Shafi'i Fiqh: Hajj & Halal Laws",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ഹജ്ജും മറ്റ് വിധികളും",
    category: "Taharah / Quran",
    difficulty: "Easy",
    questionEn: "What is the ruling in the Shafi'i madhhab on touching or carrying the Holy Quran (Mushaf) without Wudu?",
    questionMl: "വുളൂഅ് ഇല്ലാതെ വിശുദ്ധ ഖുർആൻ (മുസ്ഹഫ്) തൊടുന്നതിനും ചുമക്കുന്നതിനും ശാഫിഈ മദ്ഹബിലെ വിധി എന്താണ്?",
    options: [
      "Haram (strictly forbidden) for both minor and major ritual impurity",
      "Makruh (disliked) but valid",
      "Permissible to touch without Wudu as long as one is in clean clothes",
      "Permissible to carry in hand but forbidden to read"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, it is categorically Haram for anyone in a state of minor impurity (Hadath Asghar) or major impurity to directly touch or carry the Mushaf, except when learning for young children or when carried inside baggage where the Quran is not primarily intended.",
    explanationMl: "ചെറിയ അശുദ്ധിയുള്ളവനും വലിയ അശുദ്ധിയുള്ളവനും വുളൂഇല്ലാതെ മുസ്ഹഫ് തൊടുന്നതും ചുമക്കുന്നതും ശാഫിഈ മദ്ഹബിൽ ഹറാമാണ്. പഠിക്കുന്ന കുട്ടികൾക്കും സാധനങ്ങളുടെ കൂട്ടത്തിൽ ഖുർആൻ പ്രധാനമല്ലാതെ പെട്ടിയിലാക്കി ചുമക്കുന്നതിനും ഇളവുണ്ട്.",
    points: 10
  },

  // ================= ROUND 5: IMAM AL-SHAFI'I - LIFE & USUL (ഇമാം ശാഫിഈ & ഉസൂലുൽ ഫിഖ്ഹ്) =================
  {
    id: "fq_21",
    round: "r5",
    roundName: "Imam Shafi'i: Life & Usul al-Fiqh",
    roundNameMl: "ഇമാം ശാഫിഈ (റ): ചരിത്രവും ഉസൂലും",
    category: "Usul al-Fiqh",
    difficulty: "Easy",
    questionEn: "Which masterpiece authored by Imam al-Shafi'i is celebrated as the very first written book on the science of Usul al-Fiqh (Principles of Islamic Jurisprudence)?",
    questionMl: "ഉസൂലുൽ ഫിഖ്ഹിൽ (ഇസ്ലാമിക കർമ്മശാസ്ത്ര തത്വങ്ങൾ) രചിക്കപ്പെട്ട ലോകത്തെ പ്രഥമ ഗ്രന്ഥമായി പണ്ഡിതന്മാർ ഏകോപിച്ച ഇമാം ശാഫിഈയുടെ ഗ്രന്ഥമേത്?",
    options: [
      "Ar-Risalah (അർ-രിസാല)",
      "Kitab al-Umm (കിതാബുൽ ഉമ്മ്)",
      "Al-Muwatta (അൽ-മുവത്വ)",
      "Al-Hujjah (അൽ-ഹുജ്ജ)"
    ],
    correctIndex: 0,
    explanationEn: "Imam al-Shafi'i composed 'Ar-Risalah' at the request of Abdur-Rahman ibn Mahdi. It is unanimously revered as the founding text establishing the methodology and principles of Usul al-Fiqh in Islamic history.",
    explanationMl: "ഇമാം ശാഫിഈ (റ) രചിച്ച 'അർ-രിസാല' ആണ് ഇസ്ലാമിക നിയമ തത്ത്വശാസ്ത്രമായ ഉസൂലുൽ ഫിഖ്ഹിൽ രചിക്കപ്പെട്ട ലോകത്തെ പ്രഥമ ഗ്രന്ഥമായി ചരിത്രകാരന്മാരും പണ്ഡിതരും ഒരേസ്വരത്തിൽ അംഗീകരിക്കുന്നത്.",
    points: 10
  },
  {
    id: "fq_22",
    round: "r5",
    roundName: "Imam Shafi'i: Life & Usul al-Fiqh",
    roundNameMl: "ഇമാം ശാഫിഈ (റ): ചരിത്രവും ഉസൂലും",
    category: "Fiqh Books",
    difficulty: "Medium",
    questionEn: "What is the title of the master encyclopedic book of Shafi'i Fiqh dictated by Imam al-Shafi'i in Egypt that codifies his New School (Al-Qawl al-Jadid)?",
    questionMl: "ഈജിപ്തിൽ വെച്ച് ഇമാം ശാഫിഈ തന്റെ പുതിയ മദ്ഹബിലെ (ഖൗലുൽ ജദീദ്) വിധികൾ ക്രോഡീകരിച്ച് എഴുതിയ വിഖ്യാതമായ ബൃഹദ് കർമ്മശാസ്ത്ര ഗ്രന്ഥമേത്?",
    options: [
      "Kitab al-Umm (കിതാബുൽ ഉമ്മ്)",
      "Fath al-Mu'in (ഫത്ഹുൽ മുഈൻ)",
      "Minhaj al-Talibin (മിൻഹാജുത്ത്വാലിബീൻ)",
      "Al-Muhadhdhab (അൽ-മുഹദ്ദബ്)"
    ],
    correctIndex: 0,
    explanationEn: "'Kitab al-Umm' is the monumental master collection containing Imam al-Shafi'i's mature legal opinions, reasoning, and dialogues, formulated primarily during his years in Egypt.",
    explanationMl: "ഇമാം ശാഫിഈ (റ) ഈജിപ്തിൽ വെച്ച് രചിച്ച ഏറ്റവും വലിയ കർമ്മശാസ്ത്ര ഗ്രന്ഥമാണ് 'കിതാബുൽ ഉമ്മ്'. അദ്ദേഹത്തിന്റെ പുതിയ മദ്ഹബിലെ ഫിഖ്ഹീ വിധികൾ ഇതിലാണ് ക്രോഡീകരിക്കപ്പെട്ടിട്ടുള്ളത്.",
    points: 10
  },
  {
    id: "fq_23",
    round: "r5",
    roundName: "Imam Shafi'i: Life & Usul al-Fiqh",
    roundNameMl: "ഇമാം ശാഫിഈ (റ): ചരിത്രവും ഉസൂലും",
    category: "Biography",
    difficulty: "Easy",
    questionEn: "In which year of the Islamic calendar and in which historic city was Imam Muhammad ibn Idris al-Shafi'i (RA) born?",
    questionMl: "ഇമാം മുഹമ്മദ് ബിൻ ഇദ്‌രീസ് അൽ-ശാഫിഈ (റ) ഏത് ഹിജ്റ വർഷത്തിൽ, എവിടെയാണ് ഭൂജാതനായത്?",
    options: [
      "150 AH in Gaza, Palestine (ഹിജ്റ 150-ൽ ഗസ്സയിൽ)",
      "80 AH in Kufa, Iraq (ഹിജ്റ 80-ൽ കൂഫയിൽ)",
      "93 AH in Madinah Munawwarah (ഹിജ്റ 93-ൽ മദീനയിൽ)",
      "164 AH in Baghdad (ഹിജ്റ 164-ൽ ബഗ്ദാദിൽ)"
    ],
    correctIndex: 0,
    explanationEn: "Imam al-Shafi'i was born in the year 150 AH in Gaza (Palestine)—the exact year Imam Abu Hanifah passed away. He was later taken to Makkah as a young boy to learn Arabic and Islamic sciences.",
    explanationMl: "ഇമാം അബൂഹനീഫ (റ) വഫാത്തായ അതേ വർഷമായ ഹിജ്റ 150-ൽ ഫലസ്തീനിലെ ഗസ്സയിലാണ് ഇമാം ശാഫിഈ (റ) ജനിച്ചത്. പിന്നീട് കുട്ടിക്കാലത്ത് തന്നെ മാതാവ് അദ്ദേഹത്തെ മക്കയിലേക്ക് കൊണ്ടുപോയി വളർത്തി.",
    points: 10
  },
  {
    id: "fq_24",
    round: "r5",
    roundName: "Imam Shafi'i: Life & Usul al-Fiqh",
    roundNameMl: "ഇമാം ശാഫിഈ (റ): ചരിത്രവും ഉസൂലും",
    category: "Biography",
    difficulty: "Medium",
    questionEn: "Who was the renowned Imam of Madinah and author of 'Al-Muwatta' under whom young Imam al-Shafi'i studied and recited the entire Hadith collection from memory?",
    questionMl: "മദീനയിൽ വെച്ച് 'അൽ-മുവത്വ' പൂർണ്ണമായി മനഃപാഠമാക്കി ഓതിക്കേൾപ്പിച്ചുകൊണ്ട് ഇമാം ശാഫിഈ ആരുടെ അടുത്താണ് പ്രധാനമായും വിദ്യ അഭ്യസിച്ചത്?",
    options: [
      "Imam Malik ibn Anas (റ)",
      "Imam Abu Hanifah (റ)",
      "Imam Ahmad ibn Hanbal (റ)",
      "Imam Al-Awza'i (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Imam al-Shafi'i traveled to Madinah to sit at the feet of Imam Dar al-Hijrah, Imam Malik ibn Anas (RA), having already memorized 'Al-Muwatta' in its entirety, dazzling Imam Malik with his intellect and eloquence.",
    explanationMl: "മദീനയിലെ വലിയ ഹദീസ് പണ്ഡിതനും 'അൽ-മുവത്വ'യുടെ രചയിതാവുമായ ഇമാം മാലിക് ബിൻ അനസ് (റ) തങ്ങളുടെ അടുത്താണ് ഇമാം ശാഫിഈ പഠനം നടത്തിയത്. പഠനത്തിന് മുമ്പ് തന്നെ മുവത്വ പൂർണ്ണമായി മനഃപാഠമാക്കിയിരുന്നു.",
    points: 10
  },
  {
    id: "fq_25",
    round: "r5",
    roundName: "Imam Shafi'i: Life & Usul al-Fiqh",
    roundNameMl: "ഇമാം ശാഫിഈ (റ): ചരിത്രവും ഉസൂലും",
    category: "Usul al-Fiqh",
    difficulty: "Medium",
    questionEn: "According to Imam al-Shafi'i's legal methodology, what are the four universally accepted primary sources of Islamic Shariah in hierarchical order?",
    questionMl: "ഇമാം ശാഫിഈയുടെ കർമ്മശാസ്ത്ര പ്രമാണങ്ങൾ അനുസരിച്ച് ഇസ്ലാമിക ശരീഅത്തിന്റെ അംഗീകൃതമായ അടിസ്ഥാന നാല് പ്രമാണങ്ങൾ ഏതെല്ലാമാണ്?",
    options: [
      "The Quran, Prophetic Sunnah, Ijma' (Consensus), and Qiyas (Analogy)",
      "The Quran and Hadith only",
      "The Quran, Sunnah, and Urf (Customary Practice)",
      "The Quran, Istihsan (Juristic Preference), and Maslahah Mursalah"
    ],
    correctIndex: 0,
    explanationEn: "Imam al-Shafi'i codified that all Islamic legal rulings must be derived from: 1. The Quran, 2. The Sunnah of Prophet Muhammad ﷺ, 3. Ijma' (scholarly consensus), and 4. Qiyas (sound legal analogy based on the first two).",
    explanationMl: "ഇമാം ശാഫിഈയുടെ ഫിഖ്ഹീ ഉസൂലനുസരിച്ച് ഇസ്ലാമിക നിയമ നിർമ്മാണത്തിന്റെ അടിസ്ഥാന പ്രമാണങ്ങൾ നാലാകുന്നു: 1. വിശുദ്ധ ഖുർആൻ, 2. പുണ്യ നബി ﷺ-യുടെ സുന്നത്ത്, 3. ഇജ്മാഅ് (പണ്ഡിത ഏകോപനം), 4. ഖിയാസ് (സാദൃശ്യ താരതമ്യം).",
    points: 10
  }
];

/**
 * Deterministically shuffles options for each question so that correct answers
 * are evenly and realistically distributed across Option A, B, C, and D.
 */
function shuffleQuestionOptions(q) {
  if (!q || !Array.isArray(q.options) || q.options.length <= 1) return q;
  const originalCorrectText = q.options[q.correctIndex !== undefined ? q.correctIndex : 0];
  
  let hash = 0;
  const str = String(q.id || '') + 'shafii_fiqh_salt_2026';
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  
  const optionsCopy = [...q.options];
  let seed = Math.abs(hash);
  for (let i = optionsCopy.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
  }

  const newCorrectIndex = optionsCopy.indexOf(originalCorrectText);
  return {
    ...q,
    options: optionsCopy,
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

// Master list with randomized and balanced option positions
const SHUFFLED_DEFAULT_QUESTIONS = DEFAULT_QUESTIONS.map(shuffleQuestionOptions);

// Storage key version bumped to v3 for Shafi'i Fiqh question bank
const QUESTION_STORAGE_KEY = "meelad_quiz_questions_v3";

// Helper to get questions from localStorage or fallback to balanced questions
function getStoredQuestions() {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(QUESTION_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (e) {
    console.error("Error loading questions from localStorage:", e);
  }
  return SHUFFLED_DEFAULT_QUESTIONS;
}

function saveQuestionsToStorage(questions) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(QUESTION_STORAGE_KEY, JSON.stringify(questions));
      return true;
    }
  } catch (e) {
    console.error("Error saving questions to localStorage:", e);
  }
  return false;
}

// Background Firestore check for master question updates
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', async () => {
    try {
      if (window.firestoreDb) {
        const docSnap = await window.firestoreDb.collection('quiz_bank').doc('master_questions_v3').get();
        if (docSnap.exists) {
          const data = docSnap.data();
          if (data && Array.isArray(data.questions) && data.questions.length > 0) {
            saveQuestionsToStorage(data.questions);
            if (window.quizEngine && typeof window.quizEngine.reloadQuestions === 'function') {
              window.quizEngine.reloadQuestions();
            }
          }
        }
      }
    } catch (err) {
      console.warn('Firestore question bank background sync notice:', err);
    }
  });
}
