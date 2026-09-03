/**
 * Meelad Fest Goliyangadi - Master Islamic Question Bank
 * Specialized in Fiqh of Imam al-Shafi'i (رحمه الله)
 * 25 Comprehensive Jurisprudence Questions across 5 Essential Chapters
 * Bilingual: English and Malayalam (മലയാളം)
 */

const DEFAULT_QUESTIONS = [
  {
    id: "fq_1",
    round: "r1",
    roundName: "Shafi'i Fiqh: Taharah (Purity)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ത്വഹാറത്ത് (ശുദ്ധി)",
    category: "Taharah",
    difficulty: "Easy",
    questionEn: "According to the Shafi'i madhhab, how many obligatory pillars (Fard / Arkan) of Wudu (ablution) are there?",
    questionMl: "ശാഫിഈ മദ്ഹബ് പ്രകാരം വുളൂഇന്റെ നിർബന്ധ ഫർളുകൾ (അർകാനുകൾ) എത്രയാണ്?",
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ವುಳುವಿನ ಕಡ್ಡಾಯ (ಫರ್ಳ್) ಕರ್ತವ್ಯಗಳು ಎಷ್ಟು?",
    options: [
      "7 (Including rubbing / Dalk)",
      "8 (Including Bismillah and gargling)",
      "6 (Niyyah, Face, Arms, Part of Head, Feet, Tarteeb)",
      "4 (Face, Arms, Head, Feet)"
    ],
    optionsKn: [
      "7 (ರಬ್ಬಿಸುವುದು / ದಲ್ಕ್ ಸೇರಿ)",
      "8 (ಬಿಸ್ಮಿಲ್ಲಾಹ್ ಮತ್ತು ಗರ್ಗರಿಸುವುದು ಸೇರಿ)",
      "6 (ನಿಯ್ಯತ್, ಮುಖ, ಕೈಗಳು, ತಲೆಯ ಭಾಗ, ಪಾದಗಳು, ತರ್‌ತೀಬ್)",
      "4 (ಮುಖ, ಕೈಗಳು, ತಲೆ, ಪಾದಗಳು)"
    ],
    correctIndex: 2,
    explanationEn: "In the Shafi'i school, Wudu has 6 Fards: 1. Intention (Niyyah), 2. Washing the face, 3. Washing arms including elbows, 4. Wiping part of the head, 5. Washing feet including ankles, and 6. Tarteeb (observing this sequence).",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ വുളൂഇന് 6 ഫർളുകളാണുള്ളത്: നിയ്യത്ത്, മുഖം കഴുകൽ, കൈകൾ മുട്ടോട് കൂടി കഴുകൽ, തലയുടെ കുറച്ചു ഭാഗം തടവൽ, കാലുകൾ ഞെരിയാണിയോട് കൂടി കഴുകൽ, തർതീബ് (ക്രമം പാലിക്കൽ).",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ವುಳೂಗೆ ಆರು ಫರ್ಳ್‌ಗಳಿವೆ: ನಿಯ್ಯತ್, ಮುಖ ತೊಳೆಯುವುದು, ಮೊಣಕೈ ಸೇರಿ ಕೈ ತೊಳೆಯುವುದು, ತಲೆಯ ಒಂದು ಭಾಗ ಮಸಹ್ ಮಾಡುವುದು, ಕಾಲು ತೊಳೆಯುವುದು ಮತ್ತು ಕ್ರಮವನ್ನು (ತರ್‌ತೀಬ್) ಪಾಲಿಸುವುದು.",
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
    questionKn: "ಶಾಫಿಈ ಫಿಕ್ಹ್ ಪ್ರಕಾರ ಅಶುದ್ಧಿ ಬಿದ್ದರೂ ರುಚಿ, ಬಣ್ಣ, ವಾಸನೆ ಬದಲಾಗದಿದ್ದರೆ ನಜೀಸ್ ಆಗದ 'ಖುಲ್ಲತೈನ್' ನೀರು ಅಂದಾಜು ಎಷ್ಟು ಲೀಟರ್?",
    options: [
      "Approx. 1000 Liters",
      "Approx. 192 to 216 Liters (~500 Iraqi Ratl)",
      "Approx. 50 Liters",
      "Approx. 500 Liters"
    ],
    optionsKn: [
      "ಸುಮಾರು 1000 ಲೀಟರ್",
      "ಸುಮಾರು 192 ರಿಂದ 216 ಲೀಟರ್ (ಸುಮಾರು 500 ಇರಾಕಿ ರತ್ಲ್)",
      "ಸುಮಾರು 50 ಲೀಟರ್",
      "ಸುಮಾರು 500 ಲೀಟರ್"
    ],
    correctIndex: 1,
    explanationEn: "Qullatayn is approximately 500 Iraqi Ratls, evaluated by contemporary scholars as around 192 to 216 liters (roughly 200 liters or a cubic space of 1.25 cubits in height, width, and length).",
    explanationMl: "ശാഫിഈ കർമ്മശാസ്ത്രത്തിൽ ഖുല്ലത്തൈൻ എന്നാൽ 500 ബഗ്ദാദി റത്തൽ ആണ്. ആധുനിക കണക്കനുസരിച്ച് ഇത് ഏകദേശം 192 മുതൽ 216 ലിറ്റർ (ഏകദേശം 200 ലിറ്റർ) ജലമാണ്.",
    explanationKn: "ಖುಲ್ಲತೈನ್ ಸುಮಾರು 500 ಇರಾಕಿ ರತ್ಲ್; ಆಧುನಿಕ ಅಳತೆಯಲ್ಲಿ ಸುಮಾರು 192 ರಿಂದ 216 ಲೀಟರ್ ನೀರು. ರುಚಿ, ಬಣ್ಣ ಅಥವಾ ವಾಸನೆ ಬದಲಾಗದಿದ್ದರೆ ಈ ಪ್ರಮಾಣದ ನೀರು ನಜೀಸ್ ಆಗುವುದಿಲ್ಲ.",
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
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನ ಪ್ರಬಲ ನಿಯಮದಂತೆ, ಯಾವುದೇ ಅಡ್ಡಗೋಡೆಯಿಲ್ಲದೆ ಪರಸ್ತ್ರೀಯ ಚರ್ಮವನ್ನು ಪುರುಷನ ಚರ್ಮ ಸ್ಪರ್ಶಿಸಿದರೆ ವುಳು ಮುರಿಯುತ್ತದೆಯೇ?",
    options: [
      "Only if accompanied by sexual desire / lust (Shahwah)",
      "No, skin contact never invalidates Wudu",
      "Only the person who initiated the touch loses Wudu",
      "Yes, it invalidates the Wudu of both the toucher and touched"
    ],
    optionsKn: [
      "ಕಾಮಭಾವನೆ (ಶಹ್ವತ್) ಇದ್ದಾಗ ಮಾತ್ರ",
      "ಇಲ್ಲ, ಚರ್ಮದ ಸ್ಪರ್ಶದಿಂದ ವುಳೂ ಎಂದಿಗೂ ಮುರಿಯುವುದಿಲ್ಲ",
      "ಸ್ಪರ್ಶವನ್ನು ಆರಂಭಿಸಿದ ವ್ಯಕ್ತಿಯ ವುಳೂ ಮಾತ್ರ ಮುರಿಯುತ್ತದೆ",
      "ಹೌದು, ಸ್ಪರ್ಶಿಸಿದ ಮತ್ತು ಸ್ಪರ್ಶಕ್ಕೊಳಗಾದ ಇಬ್ಬರ ವುಳೂ ಮುರಿಯುತ್ತದೆ"
    ],
    correctIndex: 3,
    explanationEn: "In the Shafi'i school, direct skin contact between an adult male and an unrelated marriageable female (non-mahram) invalidates Wudu for both parties, whether intentional or accidental, with or without desire.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ അന്യസ്ത്രീ-പുരുഷന്മാരുടെ ത്വക്കുകൾ യാതൊരു മറയുമില്ലാതെ സ്പർശിച്ചാൽ വികാരമുണ്ടെങ്കിലും ഇല്ലെങ്കിലും മനഃപൂർവ്വമാണെങ്കിലും അല്ലെങ്കിലും രണ്ടുപേരുടെയും വുളൂഅ് മുറിയും.",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ಮಹ್ರಮ್ ಅಲ್ಲದ ವಯಸ್ಕ ಪುರುಷ ಮತ್ತು ಮಹಿಳೆಯ ಚರ್ಮಗಳು ನೇರವಾಗಿ ಸ್ಪರ್ಶಿಸಿದರೆ, ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿರಲಿ ಅಥವಾ ಆಕಸ್ಮಿಕವಾಗಿರಲಿ, ಇಬ್ಬರ ವುಳೂ ಮುರಿಯುತ್ತದೆ.",
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
    questionKn: "ನಾಯಿ ಅಥವಾ ಹಂದಿಯ ಸ್ಪರ್ಶದಿಂದ ಉಂಟಾಗುವ ಗಂಭೀರ ನಜೀಸ್ (ಮುಗಲ್ಲಳಃ) ಶುದ್ಧಿಗೊಳಿಸಲು ಶಾಫಿಈ ವಿಧಿ ಯಾವುದು?",
    options: [
      "Washing 7 times, one of which must be mixed with clean purifying soil",
      "Washing once thoroughly with hot water",
      "Sprinkling water over it until moist",
      "Washing 3 times with pure water and soap"
    ],
    optionsKn: [
      "7 ಬಾರಿ ತೊಳೆಯಬೇಕು; ಅವುಗಳಲ್ಲಿ ಒಂದು ಬಾರಿ ಶುದ್ಧೀಕರಿಸುವ ಮಣ್ಣಿನೊಂದಿಗೆ ಇರಬೇಕು",
      "ಬಿಸಿ ನೀರಿನಿಂದ ಒಮ್ಮೆ ಚೆನ್ನಾಗಿ ತೊಳೆಯಬೇಕು",
      "ಒದ್ದೆಯಾಗುವವರೆಗೆ ನೀರನ್ನು ಸಿಂಪಡಿಸಬೇಕು",
      "ಶುದ್ಧ ನೀರು ಮತ್ತು ಸಾಬೂನಿನಿಂದ 3 ಬಾರಿ ತೊಳೆಯಬೇಕು"
    ],
    correctIndex: 0,
    explanationEn: "Severe impurity (Najasah Mughalladhah) must be washed seven times with pure water, and one of those seven washings must be mixed with pure soil/earth (Tuhr / Turab).",
    explanationMl: "നായ, പന്നി എന്നിവ മൂലമുണ്ടാകുന്ന മുഗല്ലളായ നജസ് നീക്കം ചെയ്യാൻ മണ്ണു കലക്കിയ ശുദ്ധജലം കൊണ്ട് ഒരു തവണയും അല്ലാതെ 6 തവണയുമായി ആകെ 7 പ്രാവശ്യം കഴുകി ശുദ്ധിയാക്കൽ നിർബന്ധമാണ്.",
    explanationKn: "ನಾಯಿ ಅಥವಾ ಹಂದಿಯಿಂದ ಉಂಟಾದ ಮುಗಲ್ಲಳ ನಜಾಸ್ ಅನ್ನು ಏಳು ಬಾರಿ ತೊಳೆಯಬೇಕು. ಆ ಏಳರಲ್ಲಿ ಒಂದು ಬಾರಿ ಶುದ್ಧ ಮಣ್ಣಿನೊಂದಿಗೆ ತೊಳೆಯುವುದು ಕಡ್ಡಾಯ.",
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
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ಕಡ್ಡಾಯ ಸ್ನಾನದ (ಗುಸ್ಲ್) ನಿರ್ಬಂಧ ಫರ್ಳ್‌ಗಳು ಎಷ್ಟು?",
    options: [
      "1 (Washing the body only)",
      "2 (Niyyah and washing the entire body, skin, and hair)",
      "3 (Gargling, rinsing nose, and washing body)",
      "5 (Including wudu before ghusl)"
    ],
    optionsKn: [
      "1 (ದೇಹವನ್ನು ಮಾತ್ರ ತೊಳೆಯುವುದು)",
      "2 (ನಿಯ್ಯತ್ ಮತ್ತು ಚರ್ಮ-ಕೂದಲು ಸೇರಿ ಇಡೀ ದೇಹವನ್ನು ತೊಳೆಯುವುದು)",
      "3 (ಗರ್ಗರಿಸುವುದು, ಮೂಗಿಗೆ ನೀರು ಹಾಕುವುದು ಮತ್ತು ದೇಹ ತೊಳೆಯುವುದು)",
      "5 (ಗುಸ್ಲ್‌ಗೆ ಮುನ್ನ ವುಳೂ ಮಾಡುವುದು ಸೇರಿ)"
    ],
    correctIndex: 1,
    explanationEn: "In Shafi'i Fiqh, Ghusl has only 2 mandatory pillars: 1. The intention (Niyyah) at the onset of washing, and 2. Ensuring water reaches all external parts of the body including every strand of hair and all skin.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ കുളിയുടെ ഫർളുകൾ രണ്ടെണ്ണം മാത്രമാണ്: 1. വലിയ അശുദ്ധിയെ ഉയർത്തുന്നുവെന്ന നിയ്യത്ത്, 2. തലമുടി, രോമങ്ങൾ, ചർമ്മം എന്നിവയുൾപ്പെടെ ശരീരം മുഴുവൻ വെള്ളം എത്തിക്കൽ.",
    explanationKn: "ಶಾಫಿಈ ಫಿಕ್ಹ್‌ನಲ್ಲಿ ಗುಸ್ಲ್‌ಗೆ ಎರಡು ಫರ್ಳ್‌ಗಳಷ್ಟೇ: ಸ್ನಾನ ಆರಂಭದಲ್ಲಿ ನಿಯ್ಯತ್ ಮಾಡುವುದು ಮತ್ತು ಕೂದಲು-ಚರ್ಮ ಸೇರಿ ದೇಹದ ಹೊರಭಾಗವೆಲ್ಲಕ್ಕೂ ನೀರು ತಲುಪಿಸುವುದು.",
    points: 10
  },
  {
    id: "fq_6",
    round: "r2",
    roundName: "Shafi'i Fiqh: Salah (Prayer)",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: സ്വലാത്ത് (നിസ്കാരം)",
    category: "Salah",
    difficulty: "Easy",
    questionEn: "In the Shafi'i madhhab, is 'Bismillahir-Rahmanir-Rahim' considered an obligatory verse of Surah Al-Fatihah in Salah?",
    questionMl: "ശാഫിഈ മദ്ഹബ് പ്രകാരം നിസ്കാരത്തിൽ 'ബിസ്മില്ലാഹിർറഹ്മാനിർറഹീം' എന്നത് സൂറത്തുൽ ഫാത്തിഹയിലെ നിർബന്ധ ആയത്താണോ?",
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ನಮಾಜಿನಲ್ಲಿ 'ಬಿಸ್ಮಿಲ್ಲಾಹಿರ್ ರಹ್ಮಾನಿರ್ ರಹೀಮ್' ಎಂಬುದು ಸೂರಃ ಅಲ್-ಫಾತಿಹಾದ ಕಡ್ಡಾಯ ಆಯತ್ ಆಗಿದೆಯೇ?",
    options: [
      "No, reciting it is only a voluntary Sunnah",
      "It is only recited quietly in Sirri (silent) prayers",
      "It is only required in the very first Rak'ah",
      "Yes, it is the first verse of Al-Fatihah; omitting it invalidates the prayer"
    ],
    optionsKn: [
      "ಇಲ್ಲ, ಅದನ್ನು ಓದುವುದು ಕೇವಲ ಸುನ್ನತ್ ಮಾತ್ರ",
      "ಸಿರ್ರಿ (ನಿಶ್ಯಬ್ದ) ನಮಾಜುಗಳಲ್ಲಿ ಮಾತ್ರ ನಿಧಾನವಾಗಿ ಓದಲಾಗುತ್ತದೆ",
      "ಮೊದಲ ರಕ್ಅತ್‌ನಲ್ಲಿ ಮಾತ್ರ ಅದು ಕಡ್ಡಾಯ",
      "ಹೌದು, ಅದು ಅಲ್-ಫಾತಿಹಾದ ಮೊದಲ ಆಯತ್; ಬಿಟ್ಟರೆ ನಮಾಜು ಅಮಾನ್ಯವಾಗುತ್ತದೆ"
    ],
    correctIndex: 3,
    explanationEn: "Imam al-Shafi'i established that 'Bismillahir-Rahmanir-Rahim' is a full, counted verse (Ayah) of Surah Al-Fatihah. Omitting it deliberately or unintentionally invalidates the recitation of Al-Fatihah and the prayer.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ ബിസ്മി എന്നത് സൂറത്തുൽ ഫാത്തിഹയിലെ ഏഴ് ആയത്തുകളിൽ ഒന്നാമത്തെ പൂർണ്ണ ആയത്താണ്. ബിസ്മി ഉപേക്ഷിച്ചാൽ ഫാത്തിഹ സാധുവാകില്ല, നിസ്കാരവും അസാധുവാകും.",
    explanationKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರ ಪ್ರಕಾರ ಬಿಸ್ಮಿಲ್ಲಾಹಿರ್ ರಹ್ಮಾನಿರ್ ರಹೀಮ್ ಸೂರತುಲ್ ಫಾತಿಹಾದ ಸಂಪೂರ್ಣ ಆಯತ್. ಅದನ್ನು ಬಿಟ್ಟರೆ ಫಾತಿಹಾದ ಪಠಣ ಮತ್ತು ನಮಾಜು ಅಮಾನ್ಯವಾಗುತ್ತದೆ.",
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
    questionKn: "ಸುಬ್ಹ್ ನಮಾಜಿನ ಎರಡನೇ ರಕ್ಅತ್‌ನ ಇಅ್ತಿದಾಲ್‌ನಲ್ಲಿ ಖುನೂತ್ ಪ್ರಾರ್ಥನೆ ಓದುವುದರ ಶಾಫಿಈ ಕರ್ಮಶಾಸ್ತ್ರ ವಿಧಿ ಏನು?",
    options: [
      "Sunnah Hai'ah (Light Sunnah that needs no prostration)",
      "Makruh (Disliked)",
      "Sunnah Ab'ad (Emphasized Sunnah compensable by Sujud al-Sahw if missed)",
      "Fard / Wajib (Obligatory pillar)"
    ],
    optionsKn: [
      "ಸುನ್ನತ್ ಹೈಅತ್ (ಸುಜೂದ್ ಅಗತ್ಯವಿಲ್ಲದ ಲಘು ಸುನ್ನತ್)",
      "ಮಕ್ರೂಹ್ (ಇಷ್ಟವಲ್ಲದ್ದು)",
      "ಸುನ್ನತ್ ಅಬ್ಅದ್ (ಬಿಟ್ಟರೆ ಸುಜೂದುಸ್-ಸಹ್ವ್‌ನಿಂದ ಪೂರೈಸಬಹುದಾದ ಒತ್ತಾಯಿತ ಸುನ್ನತ್)",
      "ಫರ್ಳ್ / ವಾಜಿಬ್ (ಕಡ್ಡಾಯ ಸ್ತಂಭ)"
    ],
    correctIndex: 2,
    explanationEn: "Reciting Qunut in the second Rak'ah of Fajr (and during the second half of Ramadan in Witr) is an emphasized Sunnah (Ab'ad). If omitted forgetfully or intentionally, it is Sunnah to perform Sujud al-Sahw before Salam.",
    explanationMl: "സുബ്ഹിലെ ഖുനൂത്ത് അബ്ആളായ സുന്നത്താണ് (ശക്തമായ സുന്നത്ത്). ഇത് മനഃപൂർവ്വമോ അല്ലാതെയോ വിട്ടുപോയാൽ സലാമിന് മുമ്പ് സഹ്‌വിന്റെ സുജൂദ് ചെയ്യൽ സുന്നത്താണ്.",
    explanationKn: "ಸುಬ್ಹ್‌ನ ಎರಡನೇ ರಕ್ಅತ್‌ನಲ್ಲಿ ಖುನೂತ್ ಓದುವುದು ಸುನ್ನತ್ ಅಬ್ಅದ್. ಅದು ತಪ್ಪಿಹೋದರೆ ಸಲಾಮ್‌ಗಿಂತ ಮೊದಲು ಸುಜೂದುಸ್-ಸಹ್ವ್ ಮಾಡುವುದು ಸುನ್ನತ್.",
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
    questionKn: "ಶಾಫಿಈ ಕರ್ಮಶಾಸ್ತ್ರದ ಪ್ರಕಾರ ಮರೆವಿನ ಸುಜೂದ್ (ಸಹ್ವಿನ ಸುಜೂದ್) ನಮಾಜಿನ ಯಾವ ಸಮಯದಲ್ಲಿ ಮಾಡಬೇಕು?",
    options: [
      "Immediately after completing Tashahhud and Durood, before the first Salam",
      "During the final standing position",
      "Immediately after pronouncing both Salams",
      "Only after reciting Salam to the right"
    ],
    optionsKn: [
      "ತಶಹ್ಹುದ್ ಮತ್ತು ದರೂದ್ ಮುಗಿದ ತಕ್ಷಣ, ಮೊದಲ ಸಲಾಮ್‌ಗಿಂತ ಮೊದಲು",
      "ಕೊನೆಯ ನಿಂತ ಸ್ಥಿತಿಯಲ್ಲಿ",
      "ಎರಡೂ ಸಲಾಮ್ ಹೇಳಿದ ತಕ್ಷಣ",
      "ಬಲಭಾಗಕ್ಕೆ ಸಲಾಮ್ ಹೇಳಿದ ಬಳಿಕ ಮಾತ್ರ"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i school, Sujud al-Sahw consists of two prostrations performed strictly before uttering the Salam, right after completing the final Tashahhud, blessings upon the Prophet ﷺ, and supplication.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ സഹ്‌വിന്റെ സുജൂദ് ചെയ്യേണ്ടത് അവസാന അത്തഹിയ്യാത്തിനും സ്വലാത്തിനും ദുആഇനും ശേഷം സലാം വീട്ടുന്നതിന് തൊട്ടുമുമ്പാണ്.",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ಸುಜೂದುಸ್-ಸಹ್ವ್ ಎರಡು ಸುಜೂದ್‌ಗಳಾಗಿದ್ದು, ಕೊನೆಯ ತಶಹ್ಹುದ್, ದರೂದ್ ಮತ್ತು ದುವಾ ನಂತರ ಮೊದಲ ಸಲಾಮ್‌ಗಿಂತ ಮೊದಲು ಮಾಡಬೇಕು.",
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
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ಶುಕ್ರವಾರದ ಜುಮುಅ ನಮಾಜು ಸಿಂಧುವಾಗಲು ಕನಿಷ್ಠ ಎಷ್ಟು ಅರ್ಹ ಮುಸ್ಲಿಂ ನಿವಾಸಿಗಳು (ಅಹ್ಲುಲ್ ಜುಮುಅ) ಇರಬೇಕು?",
    options: [
      "12 resident men",
      "3 persons including the Imam",
      "4 persons including the Khatib",
      "40 eligible resident men from beginning to end"
    ],
    optionsKn: [
      "12 ನಿವಾಸಿ ಪುರುಷರು",
      "ಇಮಾಮ್ ಸೇರಿ 3 ಜನರು",
      "ಖತೀಬ್ ಸೇರಿ 4 ಜನರು",
      "ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ 40 ಅರ್ಹ ನಿವಾಸಿ ಪುರುಷರು"
    ],
    correctIndex: 3,
    explanationEn: "The official position of the Shafi'i madhhab requires at least 40 sane, adult, free, male permanent residents of the locality from the start of the two Khutbahs through the end of the Friday prayer.",
    explanationMl: "ശാഫിഈ മദ്ഹബിലെ പ്രബല വിധി പ്രകാരം ജുമുഅ നിർബന്ധമാകുന്ന (പ്രായപൂർത്തി, ബുദ്ധി, സ്വാതന്ത്ര്യം, പുരുഷത്വം, സ്ഥിരതാമസം എന്നീ ഗുണങ്ങളുള്ള) ചുരുങ്ങിയത് 40 ആളുകൾ ഖുതുബയുടെ തുടക്കം മുതൽ നിസ്കാരം കഴിയുന്നത് വരെ ഉണ്ടാകണം.",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನ ಅಧಿಕೃತ ಅಭಿಪ್ರಾಯದಂತೆ, ಎರಡು ಖುತ್ಬಾಗಳ ಆರಂಭದಿಂದ ಜುಮುಅ ನಮಾಜು ಮುಗಿಯುವವರೆಗೆ ಕನಿಷ್ಠ 40 ಅರ್ಹ, ವಯಸ್ಕ, ಸ್ವತಂತ್ರ, ಶಾಶ್ವತ ನಿವಾಸಿ ಪುರುಷರು ಇರಬೇಕು.",
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
    questionKn: "ನಾಲಕ್ಕು ರಕ್ಅತ್‌ನ ನಮಾಜನ್ನು ಕಸ್ರ್ (ಮೊಟಕುಗೊಳಿಸಲು) ಅನುಮತಿಸುವ ಕನಿಷ್ಠ ಪ್ರಯಾಣದ ದೂರ (ಮರ್ಹಲತೈನ್) ಎಷ್ಟು?",
    options: [
      "Approx. 120 Kilometers",
      "Approx. 81 to 85 Kilometers (16 Farsakhs / 48 Hashimi Miles)",
      "Any journey lasting more than 24 hours regardless of distance",
      "Approx. 40 Kilometers"
    ],
    optionsKn: [
      "ಸುಮಾರು 120 ಕಿಲೋಮೀಟರ್",
      "ಸುಮಾರು 81 ರಿಂದ 85 ಕಿಲೋಮೀಟರ್ (16 ಫರ್ಸಖ್ / 48 ಹಾಶಿಮಿ ಮೈಲು)",
      "ದೂರವನ್ನು ಲೆಕ್ಕಿಸದೆ 24 ಗಂಟೆ ಮೀರಿದ ಯಾವುದೇ ಪ್ರಯಾಣ",
      "ಸುಮಾರು 40 ಕಿಲೋಮೀಟರ್"
    ],
    correctIndex: 1,
    explanationEn: "In the Shafi'i madhhab, Masafat al-Qasr is two Marhalahs (16 Farsakhs, equivalent to 48 prophetic miles), accurately measured today as approximately 81 to 85 kilometers.",
    explanationMl: "ശാഫിഈ കർമ്മശാസ്ത്രത്തിൽ ഖസ്വ്‌റിന്റെ ദൂരം രണ്ട് മർഹലയാണ് (16 ഫർസഖ് / 48 മൈൽ). ഇന്നത്തെ അളവുകോലിൽ ഇത് ഏകദേശം 81 മുതൽ 85 കിലോമീറ്റർ വരെ ദൂരമാണ്.",
    explanationKn: "ಕಸ್ರ್‌ಗೆ ಅನುಮತಿಸುವ ಪ್ರಯಾಣದ ದೂರ ಎರಡು ಮರ್ಹಲಾ, ಅಂದರೆ 16 ಫರ್ಸಖ್ ಅಥವಾ ಸುಮಾರು 81 ರಿಂದ 85 ಕಿಲೋಮೀಟರ್.",
    points: 10
  },
  {
    id: "fq_11",
    round: "r3",
    roundName: "Shafi'i Fiqh: Sawm & Zakah",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: നോമ്പും സകാത്തും",
    category: "Sawm",
    difficulty: "Easy",
    questionEn: "In Shafi'i Fiqh, what is the mandatory requirement regarding the intention (Niyyah) for an obligatory fast in Ramadan?",
    questionMl: "റമളാനിലെ നിർബന്ധ നോമ്പിന്റെ നിയ്യത്തുമായി ബന്ധപ്പെട്ട് ശാഫിഈ മദ്ഹബിലെ നിർബന്ധ നിബന്ധന എന്താണ്?",
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ರಮಜಾನ್ ತಿಂಗಳ ಕಡ್ಡಾಯ ಉಪವಾಸದ (ರೋಝಾ) ನಿಯ್ಯತ್ ಬಗ್ಗೆ ಇರುವ ಕಡ್ಡಾಯ ನಿಯಮವೇನು?",
    options: [
      "Tabyit: Intention must be made every night before true dawn (Fajr) for each day",
      "Intention is only required verbally after dawn",
      "A single intention on the first night suffices for the entire month",
      "Intention can be formed at any time before Dhuhr prayer"
    ],
    optionsKn: [
      "ತಬ್ಯೀತ್: ಪ್ರತಿದಿನದ ಉಪವಾಸಕ್ಕೆ ನಿಜವಾದ ಫಜ್ರ್‌ಗೂ ಮುನ್ನ ಪ್ರತಿರಾತ್ರಿ ನಿಯ್ಯತ್ ಮಾಡಬೇಕು",
      "ನಿಯ್ಯತ್ ಫಜ್ರ್ ನಂತರ ಮಾತಿನಲ್ಲಿ ಹೇಳಿದರೆ ಮಾತ್ರ ಅಗತ್ಯ",
      "ತಿಂಗಳೆಲ್ಲಕ್ಕೂ ಮೊದಲ ರಾತ್ರಿಯ ಒಂದು ನಿಯ್ಯತ್ ಸಾಕು",
      "ಲುಹರ್ ನಮಾಜಿಗಿಂತ ಮೊದಲು ಯಾವಾಗ ಬೇಕಾದರೂ ನಿಯ್ಯತ್ ಮಾಡಬಹುದು"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, for each individual day of an obligatory fast (Ramadan, Qada, Kaffarah), the intention must be made at night (Tabyit) before the arrival of Fajr, specifying the fast.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ റമളാനിലെ ഓരോ ദിവസത്തെയും നിർബന്ധ നോമ്പിന് തലേദിവസം രാത്രിയിൽ (ഫജ്‌റിന് മുൻപായി) പ്രത്യേകമായി നിയ്യത്ത് വെക്കൽ (തബ്‌യീത്) നിർബന്ധമാണ്.",
    explanationKn: "ರಮಜಾನ್, ಕಝಾ ಅಥವಾ ಕಫ್ಫಾರಾದ ಪ್ರತಿಯೊಂದು ಕಡ್ಡಾಯ ಉಪವಾಸಕ್ಕೂ ಫಜ್ರ್‌ಗಿಂತ ಮೊದಲು ರಾತ್ರಿಯಲ್ಲೇ ನಿರ್ದಿಷ್ಟ ನಿಯ್ಯತ್ (ತಬ್ಯೀತ್) ಮಾಡಬೇಕು.",
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
    questionKn: "ಗಂಟಲಿನಿಂದ ಬಾಯಿಗೆ ಬಂದ ಕಫವನ್ನು ಉಗುಳಲು ಸಾಧ್ಯವಿದ್ದರೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನುಂಗಿದರೆ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆಯೇ?",
    options: [
      "No, swallowing bodily secretions never invalidates the fast",
      "Only if mixed with food remnants or saliva",
      "Yes, intentionally swallowing it after reaching the mouth cavity breaks the fast",
      "It is only Makruh (disliked) and does not break the fast"
    ],
    optionsKn: [
      "ಇಲ್ಲ, ದೇಹದ ಸ್ರಾವವನ್ನು ನುಂಗುವುದರಿಂದ ಉಪವಾಸ ಎಂದಿಗೂ ಮುರಿಯುವುದಿಲ್ಲ",
      "ಆಹಾರದ ಅವಶೇಷ ಅಥವಾ ಲಾಲಾರಸದೊಂದಿಗೆ ಬೆರೆತಿದ್ದರೆ ಮಾತ್ರ",
      "ಹೌದು, ಬಾಯಿಯೊಳಗೆ ಬಂದ ನಂತರ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನುಂಗಿದರೆ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ",
      "ಇದು ಮಕ್ರೂಹ್ ಮಾತ್ರ; ಉಪವಾಸ ಮುರಿಯುವುದಿಲ್ಲ"
    ],
    correctIndex: 2,
    explanationEn: "In Shafi'i Fiqh, if mucus or phlegm reaches the visible limit of the mouth (Makhraj of the letter Kha/Ha) and one is able to spit it out, deliberately swallowing it invalidates the fast.",
    explanationMl: "ശാഫിഈ കർമ്മശാസ്ത്ര പ്രകാരം കഫം അക്ഷരങ്ങളുടെ പുറപ്പെടൽ സ്ഥാനമായ വായയുടെ അതിരിലേക്ക് എത്തുകയും അത് തുപ്പിക്കളയാൻ സാധിക്കുകയും ചെയ്തിരിക്കെ മനഃപൂർവ്വം വിഴുങ്ങിയാൽ നോമ്പ് മുറിയും.",
    explanationKn: "ಕಫ ಬಾಯಿಯ ಕಾಣುವ ಮಿತಿಗೆ ಬಂದ ಬಳಿಕ ಅದನ್ನು ಉಗುಳಲು ಸಾಧ್ಯವಿದ್ದರೂ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ನುಂಗಿದರೆ ಶಾಫಿಈ ಫಿಕ್ಹ್‌ನಲ್ಲಿ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ.",
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
    questionKn: "ಉಪವಾಸ ಮುರಿಯುವ ವಿಷಯಗಳಲ್ಲಿ ಶಾಫಿಈ ಧರ್ಮಶಾಸ್ತ್ರದ ಪ್ರಕಾರ ದೇಹದ ನೈಸರ್ಗಿಕ ದ್ವಾರಗಳ (ಜೌಫ್) ಮೂಲಭೂತ ನಿಯಮವೇನು?",
    options: [
      "Only substances that enter through the mouth invalidate the fast",
      "Any physical substance ('Ayn) deliberately introduced through an open natural passage invalidates the fast",
      "Injections through muscles or veins always break the fast",
      "Only nutritious food and thirst-quenching drinks invalidate the fast"
    ],
    optionsKn: [
      "ಬಾಯಿಯ ಮೂಲಕ ಒಳಹೋಗುವ ವಸ್ತುಗಳಿಂದ ಮಾತ್ರ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ",
      "ಯಾವುದೇ ವಸ್ತು (ಅಯ್ನ್)ಯನ್ನು ತೆರೆಯಿರುವ ನೈಸರ್ಗಿಕ ದ್ವಾರದಿಂದ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಒಳಸೇರಿಸಿದರೆ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ",
      "ಸ್ನಾಯು ಅಥವಾ ರಕ್ತನಾಳದ ಮೂಲಕದ ಚುಚ್ಚುಮದ್ದಿನಿಂದ ಯಾವಾಗಲೂ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ",
      "ಪೌಷ್ಟಿಕ ಆಹಾರ ಮತ್ತು ದಾಹ ತಣಿಸುವ ಪಾನೀಯಗಳಿಂದ ಮಾತ್ರ ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ"
    ],
    correctIndex: 1,
    explanationEn: "In the Shafi'i school, anything with palpable substance ('Ayn) that deliberately enters the open body cavity (Jawf) through a naturally open orifice (ears, nose, throat, front/back private parts) breaks the fast, whether nutritious or not.",
    explanationMl: "തുറക്കപ്പെട്ട ദ്വാരങ്ങളിലൂടെ (മൂക്ക്, ചെവി, വായ, മുൻ-പിൻ ദ്വാരങ്ങൾ) വലിപ്പമുള്ള എന്തെങ്കിലും വസ്തുക്കൾ ശരീരത്തിന്റെ ഉള്ളിലേക്ക് (ജൗഫ്) കടന്നാൽ ഭക്ഷണമായാലും അല്ലെങ്കിലും നോമ്പ് മുറിയുമെന്നതാണ് ശാഫിഈ നിയമം.",
    explanationKn: "ತೆರೆದಿರುವ ನೈಸರ್ಗಿಕ ದ್ವಾರದಿಂದ ದೇಹದ ಒಳಗಿನ ಖಾಲಿ ಭಾಗಕ್ಕೆ ಯಾವುದೇ ಸ್ಪರ್ಶಿಸಬಹುದಾದ ವಸ್ತುವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸೇರಿಸಿದರೆ, ಅದು ಪೌಷ್ಟಿಕವಾಗಿರಲಿ ಇಲ್ಲದಿರಲಿ, ಉಪವಾಸ ಮುರಿಯುತ್ತದೆ.",
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
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನ ಅಧಿಕೃತ ವಿಧಿಯಂತೆ ಜಕಾತುಲ್ ಫಿತ್ರ್ ಆಗಿ ಆಹಾರ ಧಾನ್ಯದ ಬದಲಿಗೆ ಹಣವನ್ನು ನೀಡಬಹುದೇ?",
    options: [
      "Any household commodity can substitute food grain",
      "Cash is preferred and recommended under all circumstances",
      "Only half the cash value is acceptable",
      "It is not permissible; it must be paid as one Sa' of the region's staple food grain"
    ],
    optionsKn: [
      "ಯಾವುದೇ ಮನೆಯ ಉಪಯೋಗದ ವಸ್ತು ಆಹಾರಧಾನ್ಯಕ್ಕೆ ಬದಲಿಯಾಗಬಹುದು",
      "ಎಲ್ಲ ಸಂದರ್ಭಗಳಲ್ಲೂ ನಗದು ಹೆಚ್ಚು ಉತ್ತಮ ಮತ್ತು ಶಿಫಾರಸು ಮಾಡಲ್ಪಟ್ಟದ್ದು",
      "ನಗದು ಮೌಲ್ಯದ ಅರ್ಧ ಭಾಗ ಮಾತ್ರ ಸ್ವೀಕಾರಾರ್ಹ",
      "ಅನುಮತಿಯಿಲ್ಲ; ಪ್ರಾಂತದ ಮುಖ್ಯ ಆಹಾರಧಾನ್ಯದ ಒಂದು ಸಾಅ್ ಆಗಿಯೇ ನೀಡಬೇಕು"
    ],
    correctIndex: 3,
    explanationEn: "The established Shafi'i position requires Zakat al-Fitr to be distributed strictly in the staple food grain (Qut al-Balad, such as rice or wheat) of one Sa' (approx. 2.7 to 3 kg) per person, not in monetary currency.",
    explanationMl: "ശാഫിഈ മദ്ഹബിലെ പ്രബലമായ വിധി പ്രകാരം സകാത്തുൽ ഫിത്വർ നാട്ടിലെ മുഖ്യാഹാരമായ ധാന്യമായി (അരി/ഗോതമ്പ്) ഒരു സാഅ് (ഏകദേശം 2.7 - 3 കി.ഗ്രാം) തന്നെ നൽകണം. പണമായി നൽകിയാൽ ശാഫിഈ മദ്ഹബ് പ്രകാരം വീടുകയില്ല.",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ಜಕಾತುಲ್ ಫಿತ್ರ್ ಅನ್ನು ಪ್ರಾಂತದ ಮುಖ್ಯ ಆಹಾರಧಾನ್ಯವಾಗಿ ಒಬ್ಬರಿಗೆ ಒಂದು ಸಾಅ್, ಸುಮಾರು 2.7 ರಿಂದ 3 ಕಿಲೋ, ನೀಡಬೇಕು; ನಗದು ರೂಪದಲ್ಲಿ ಅಲ್ಲ.",
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
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ಒಂದು ವರ್ಷ ಪೂರೈಸಿದ ಚಿನ್ನಕ್ಕೆ ಜಕಾತ್ ಕಡ್ಡಾಯವಾಗಲು ಇರಬೇಕಾದ ಕನಿಷ್ಠ ಪ್ರಮಾಣ (ನಿಸಾಬ್) ಎಷ್ಟು?",
    options: [
      "20 Mithqals (approximately 84 to 85 grams of pure gold)",
      "10 Mithqals (approximately 42 grams)",
      "50 Mithqals (approximately 212 grams)",
      "7.5 Tolas of gold"
    ],
    optionsKn: [
      "20 ಮಿಥ್ಕಾಲ್ (ಸುಮಾರು 84 ರಿಂದ 85 ಗ್ರಾಂ ಶುದ್ಧ ಚಿನ್ನ)",
      "10 ಮಿಥ್ಕಾಲ್ (ಸುಮಾರು 42 ಗ್ರಾಂ)",
      "50 ಮಿಥ್ಕಾಲ್ (ಸುಮಾರು 212 ಗ್ರಾಂ)",
      "7.5 ತೊಲಾ ಚಿನ್ನ"
    ],
    correctIndex: 0,
    explanationEn: "The Nisab for gold in the Shafi'i school is 20 Mithqals (Shar'i Dinars), which equals approximately 84 to 85 grams of pure gold. The payable Zakat is 2.5% (one-fortieth).",
    explanationMl: "സ്വർണ്ണത്തിന്റെ സകാത്ത് നിർബന്ധമാകുന്ന നിസ്വാബ് 20 മിസ്ഖാൽ ആണ്. ഇത് ഇന്നത്തെ തൂക്കത്തിൽ ഏകദേശം 84-85 ഗ്രാം ശുദ്ധമായ സ്വർണ്ണത്തിന് തുല്യമാണ്. ഇതിൽ നിന്ന് നൽകേണ്ടത് 2.5% (നാൽപ്പതിൽ ഒന്ന്) ആണ്.",
    explanationKn: "ಚಿನ್ನದ ನಿಸಾಬ್ 20 ಮಿಥ್ಕಾಲ್, ಅಂದರೆ ಸುಮಾರು 84 ರಿಂದ 85 ಗ್ರಾಂ ಶುದ್ಧ ಚಿನ್ನ. ಒಂದು ಚಾಂದ್ರ ವರ್ಷ ಪೂರ್ಣವಾದ ಮೇಲೆ ಇದರ ಜಕಾತ್ 2.5 ಶೇಕಡಾ.",
    points: 10
  },
  {
    id: "fq_16",
    round: "r4",
    roundName: "Shafi'i Fiqh: Hajj & Halal Laws",
    roundNameMl: "ശാഫിഈ ഫിഖ്ഹ്: ഹജ്ജും മറ്റ് വിധികളും",
    category: "Hajj",
    difficulty: "Easy",
    questionEn: "How many essential pillars (Arkan) of Hajj must be performed in the Shafi'i madhhab without which Hajj is invalid?",
    questionMl: "ഒഴിവാക്കിയാൽ ഹജ്ജ് ബാത്വിലാകുന്ന, ശാഫിഈ മദ്ഹബ് അനുശാസിക്കുന്ന ഹജ്ജിന്റെ നിർബന്ധ അർകാനുകൾ (ഫർളുകൾ) എത്രയാണ്?",
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ಹಜ್ಜಿನ ಅತ್ಯಾವಶ್ಯಕ ಕಡ್ಡಾಯ ಸ್ತಂಭಗಳು (ಅರ್ಕಾನ್‌ಗಳು) ಎಷ್ಟು?",
    options: [
      "5 (Without Tarteeb)",
      "7 (Including Stoning of Jamarat)",
      "6 (Ihram, Wuquf at Arafah, Tawaf al-Ifadah, Sa'i, Halq/Taqsir, and Tarteeb)",
      "4 (Ihram, Arafah, Tawaf, Sa'i)"
    ],
    optionsKn: [
      "5 (ತರ್‌ತೀಬ್ ಇಲ್ಲದೆ)",
      "7 (ಜಮರಾತ್‌ಗೆ ಕಲ್ಲು ಹೊಡೆಯುವುದು ಸೇರಿ)",
      "6 (ಇಹ್ರಾಮ್, ಅರಫಾದಲ್ಲಿ ವುಕೂಫ್, ತವಾಫುಲ್-ಇಫಾದಾ, ಸಈ, ಹಲ್ಕ್/ತಕ್ಸೀರ್ ಮತ್ತು ತರ್‌ತೀಬ್)",
      "4 (ಇಹ್ರಾಮ್, ಅರಫಾ, ತವಾಫ್, ಸಈ)"
    ],
    correctIndex: 2,
    explanationEn: "The Shafi'i madhhab uniquely delineates 6 pillars for Hajj: 1. Ihram (intention), 2. Standing at Arafah (Wuquf), 3. Tawaf al-Ifadah, 4. Sa'i between Safa and Marwah, 5. Shaving or trimming hair (Halq/Taqsir), and 6. Tarteeb (order in most pillars).",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ ഹജ്ജിന്റെ അർകാനുകൾ 6 ആകുന്നു: 1. ഇഹ്റാം, 2. അറഫയിലെ നിൽപ്പ്, 3. ത്വവാഫുൽ ഇഫാള, 4. സഅ്‌യ്, 5. തലമുടി കളയലോ വെട്ടലോ, 6. മിക്ക അർകാനുകളിലുമുള്ള തർതീബ് (ക്രമം).",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ಹಜ್ಜಿನ ಆರು ಅರ್ಕಾನ್‌ಗಳು: ಇಹ್ರಾಮ್, ಅರಫಾದಲ್ಲಿ ವುಕೂಫ್, ತವಾಫುಲ್-ಇಫಾದಾ, ಸಫಾ-ಮರ್ವಾ ನಡುವೆ ಸಈ, ಹಲ್ಕ್ ಅಥವಾ ತಕ್ಸೀರ್ ಮತ್ತು ತರ್‌ತೀಬ್.",
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
    questionKn: "ನಿಗದಿತ ಸಮಯದಲ್ಲಿ ಅರಫಾದಲ್ಲಿ ನಿಲ್ಲಲು (ವುಕೂಫ್) ಸಾಧ್ಯವಾಗದ ವ್ಯಕ್ತಿಯ ಹಜ್ಜಿನ ಬಗ್ಗೆ ಶಾಫಿಈ ತೀರ್ಪು ಏನು?",
    options: [
      "Their Hajj remains completely valid with a penalty fast of 10 days",
      "They can compensate for it by slaughtering a sacrificial camel (Badanah)",
      "They can stand at Arafah on the morning of the 10th of Dhul Hijjah instead",
      "The Hajj is irrevocably lost; they must exit Ihram by performing Umrah and make up (Qada) the Hajj in a subsequent year"
    ],
    optionsKn: [
      "10 ದಿನಗಳ ದಂಡ ಉಪವಾಸದೊಂದಿಗೆ ಅವರ ಹಜ್ಜ್ ಸಂಪೂರ್ಣವಾಗಿ ಸಿಂಧುವಾಗಿರುತ್ತದೆ",
      "ಒಂದು ಬದನಹ್ ಒಂಟೆಯನ್ನು ಬಲಿ ನೀಡುವ ಮೂಲಕ ಪರಿಹರಿಸಬಹುದು",
      "ಬದಲಿಗೆ ದುಲ್-ಹಿಜ್ಜಾದ 10ನೇ ದಿನದ ಬೆಳಗ್ಗೆ ಅರಫಾದಲ್ಲಿ ನಿಲ್ಲಬಹುದು",
      "ಹಜ್ಜ್ ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಹೋಗುತ್ತದೆ; ಉಮ್ರಾ ಮಾಡಿ ಇಹ್ರಾಮ್‌ನಿಂದ ಹೊರಬಂದು, ಮುಂದಿನ ವರ್ಷ ಹಜ್ಜ್ ಕಝಾ ಮಾಡಬೇಕು"
    ],
    correctIndex: 3,
    explanationEn: "Standing at Arafah is the quintessential pillar ('Al-Hajju Arafah'). If missed, Hajj cannot be redeemed with blood or charity; the pilgrim must perform the actions of Umrah to exit Ihram and must make up the Hajj immediately the following year.",
    explanationMl: "അറഫയിലെ നിൽപ്പ് നഷ്ടപ്പെട്ടാൽ ആ വർഷത്തെ ഹജ്ജ് നഷ്ടപ്പെട്ടു. അയാൾ ഉംറ ചെയ്ത് ഇഹ്‌റാമിൽ നിന്ന് ഒഴിവാകുകയും അടുത്ത വർഷം ആ ഹജ്ജ് നിർബന്ധമായും ഖളാഅ് വീട്ടുകയും വേണം. ബലിമൃഗത്തെ അറുത്താലും ഇത് പരിഹരിക്കപ്പെടില്ല.",
    explanationKn: "ಅರಫಾದಲ್ಲಿ ನಿಲ್ಲುವುದು ಹಜ್ಜಿನ ಮುಖ್ಯ ಸ್ತಂಭ. ಅದು ತಪ್ಪಿದರೆ ಬಲಿ ಅಥವಾ ದಾನದಿಂದ ಪರಿಹಾರವಿಲ್ಲ; ಉಮ್ರಾ ಕ್ರಮಗಳಿಂದ ಇಹ್ರಾಮ್‌ನಿಂದ ಹೊರಬಂದು ಮುಂದಿನ ವರ್ಷ ಹಜ್ಜ್ ಕಝಾ ಮಾಡಬೇಕು.",
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
    questionKn: "ಶಾಫಿಈ ಫಿಕ್ಹ್ ಪ್ರಕಾರ ಬಕ್ರೀದ್ ಹಬ್ಬದಂದು ಕುರ್ಬಾನಿ (ಉದ್ಹಿಯ್ಯಃ) ಮಾಡಲು ಮೇಕೆಗೆ ಕನಿಷ್ಠ ಎಷ್ಟು ವಯಸ್ಸಾಗಿರಬೇಕು?",
    options: [
      "Must have completed six months only",
      "Must have completed two full years and entered the third year",
      "Must have completed one full year and entered the second",
      "Must have completed four full years"
    ],
    optionsKn: [
      "ಕೇವಲ ಆರು ತಿಂಗಳು ಪೂರ್ಣವಾಗಿರಬೇಕು",
      "ಎರಡು ಪೂರ್ಣ ವರ್ಷ ಮುಗಿಸಿ ಮೂರನೇ ವರ್ಷಕ್ಕೆ ಪ್ರವೇಶಿಸಿರಬೇಕು",
      "ಒಂದು ಪೂರ್ಣ ವರ್ಷ ಮುಗಿಸಿ ಎರಡನೇ ವರ್ಷಕ್ಕೆ ಪ್ರವೇಶಿಸಿರಬೇಕು",
      "ನಾಲ್ಕು ಪೂರ್ಣ ವರ್ಷ ಮುಗಿಸಿರಬೇಕು"
    ],
    correctIndex: 1,
    explanationEn: "In the Shafi'i madhhab, a goat (Ma'z) is only valid for sacrifice once it completes 2 lunar years of age and enters its third. For sheep (Da'n), completing one year (or shedding front teeth after 6 months) suffices.",
    explanationMl: "ശാഫിഈ മദ്ഹബിൽ കോലാട് (മഅ്സ്) ബലിയറുക്കാൻ രണ്ട് വയസ്സ് പൂർത്തിയായി മൂന്നാം വയസ്സിലേക്ക് കടക്കൽ നിർബന്ധമാണ്. എന്നാൽ ചെമ്മരിയാട് (ളഅ്ന്) ഒരു വയസ്സ് പൂർത്തിയായാൽ മതിയാകും.",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ಮೇಕೆಯನ್ನು ಉಧ್ಹಿಯ್ಯಾ ಮಾಡಲು ಎರಡು ಚಾಂದ್ರ ವರ್ಷ ಪೂರೈಸಿ ಮೂರನೇ ವರ್ಷ ಪ್ರವೇಶಿಸಿರಬೇಕು. ಕುರಿಗೆ ಒಂದು ವರ್ಷ ಪೂರ್ಣವಾದರೆ ಸಾಕು.",
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
    questionKn: "ಕೇವಲ ನೀರಿನಲ್ಲೇ ಜೀವಿಸುವ ಜಲಚರಗಳನ್ನು ತಿನ್ನುವ ಬಗ್ಗೆ ಶಾಫಿಈ ಮದ್ಹಬ್‌ನ ಸಾಮಾನ್ಯ ನಿಯಮವೇನು?",
    options: [
      "All marine animals except true fish are strictly Haram",
      "Consuming sea animals without ritual neck slaughter is Makruh",
      "All animals living solely in water are Halal to eat without ritual slaughter, except venomous/harmful ones",
      "Only fish that have visible scales are Halal"
    ],
    optionsKn: [
      "ನಿಜವಾದ ಮೀನುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ ಎಲ್ಲ ಸಮುದ್ರಜೀವಿಗಳು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಹರಾಮ್",
      "ಕತ್ತಿನ ಜಬೀಹಾ ಇಲ್ಲದೆ ಸಮುದ್ರಜೀವಿಗಳನ್ನು ತಿನ್ನುವುದು ಮಕ್ರೂಹ್",
      "ಕೇವಲ ನೀರಿನಲ್ಲಿ ವಾಸಿಸುವ ಎಲ್ಲ ಜಲಚರಗಳು, ವಿಷಕಾರಿ/ಹಾನಿಕಾರಕವಾದವುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ, ಜಬೀಹಾ ಇಲ್ಲದೆ ಹಲಾಲ್",
      "ಕಣ್ಣಿಗೆ ಕಾಣುವ ಚಿಪ್ಪುಗಳಿರುವ ಮೀನು ಮಾತ್ರ ಹಲಾಲ್"
    ],
    correctIndex: 2,
    explanationEn: "In the Shafi'i madhhab, based on the hadith 'Its water is pure and its dead are lawful', all aquatic creatures that live solely in water (fish, prawns, squid, crabs that only live in water, etc.) are Halal without slaughter, unless poisonous or harmful.",
    explanationMl: "വെള്ളത്തിൽ മാത്രം ജീവിക്കുന്ന ജലജീവികളെല്ലാം അറുക്കാതെ തന്നെ ഭക്ഷിക്കൽ ഹലാലാണ് എന്നാണ് ശാഫിഈ മദ്ഹബിലെ പ്രബല വിധി. എന്നാൽ വിഷമുള്ളതോ ശരീരത്തിന് ഹാനികരമായതോ ആയവ ഭക്ഷിക്കാൻ പാടില്ല.",
    explanationKn: "ಹದೀಸ್‌ನಲ್ಲಿ ಸಮುದ್ರದ ನೀರು ಶುದ್ಧ ಮತ್ತು ಅದರ ಸತ್ತ ಜೀವಿಗಳು ಹಲಾಲ್ ಎಂದು ಬಂದಿದೆ. ಆದ್ದರಿಂದ ಕೇವಲ ನೀರಿನಲ್ಲಿ ಜೀವಿಸುವ ಜಲಚರಗಳನ್ನು, ವಿಷಕಾರಿ ಅಥವಾ ಹಾನಿಕಾರಕವಲ್ಲದಿದ್ದರೆ, ಜಬೀಹಾ ಇಲ್ಲದೆ ತಿನ್ನಬಹುದು.",
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
    questionKn: "ಶಾಫಿಈ ಮದ್ಹಬ್ ಪ್ರಕಾರ ವುಳು ಇಲ್ಲದೆ ಪವಿತ್ರ ಕುರ್‌ಆನ್ (ಮುಸ್ಹಫ್) ಸ್ಪರ್ಶಿಸುವುದು ಅಥವಾ ಹೊತ್ತುಕೊಳ್ಳುವುದರ ವಿಧಿ ಏನು?",
    options: [
      "Haram (strictly forbidden) for both minor and major ritual impurity",
      "Permissible to carry in hand but forbidden to read",
      "Makruh (disliked) but valid",
      "Permissible to touch without Wudu as long as one is in clean clothes"
    ],
    optionsKn: [
      "ಸಣ್ಣ ಮತ್ತು ದೊಡ್ಡ ಎರಡೂ ಧಾರ್ಮಿಕ ಅಶುದ್ಧಿ ಸ್ಥಿತಿಯಲ್ಲಿ ಹರಾಮ್ (ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷಿದ್ಧ)",
      "ಕೈಯಲ್ಲಿ ಹೊತ್ತುಕೊಳ್ಳಲು ಅನುಮತಿ ಇದೆ, ಆದರೆ ಓದುವುದು ನಿಷಿದ್ಧ",
      "ಮಕ್ರೂಹ್ (ಇಷ್ಟವಲ್ಲ), ಆದರೆ ಸಿಂಧು",
      "ಸ್ವಚ್ಛ ಬಟ್ಟೆಯಲ್ಲಿದ್ದರೆ ವುಳೂ ಇಲ್ಲದೆ ಸ್ಪರ್ಶಿಸಲು ಅನುಮತಿ ಇದೆ"
    ],
    correctIndex: 0,
    explanationEn: "In the Shafi'i madhhab, it is categorically Haram for anyone in a state of minor impurity (Hadath Asghar) or major impurity to directly touch or carry the Mushaf, except when learning for young children or when carried inside baggage where the Quran is not primarily intended.",
    explanationMl: "ചെറിയ അശുദ്ധിയുള്ളവനും വലിയ അശുദ്ധിയുള്ളവനും വുളൂഇല്ലാതെ മുസ്ഹഫ് തൊടുന്നതും ചുമക്കുന്നതും ശാഫിഈ മദ്ഹബിൽ ഹറാമാണ്. പഠിക്കുന്ന കുട്ടികൾക്കും സാധനങ്ങളുടെ കൂട്ടത്തിൽ ഖുർആൻ പ്രധാനമല്ലാതെ പെട്ടിയിലാക്കി ചുമക്കുന്നതിനും ഇളവുണ്ട്.",
    explanationKn: "ಶಾಫಿಈ ಮದ್ಹಬ್‌ನಲ್ಲಿ ಸಣ್ಣ ಅಥವಾ ದೊಡ್ಡ ಅಶುದ್ಧಿ ಸ್ಥಿತಿಯಲ್ಲಿರುವವರು ವುಳೂ ಇಲ್ಲದೆ ಮುಸ್ಹಫ್‌ನ್ನು ನೇರವಾಗಿ ಸ್ಪರ್ಶಿಸುವುದು ಅಥವಾ ಹೊರುವುದು ಹರಾಮ್. ಸಣ್ಣ ಮಕ್ಕಳ ಕಲಿಕೆ ಮೊದಲಾದ ಕೆಲವು ವಿನಾಯಿತಿಗಳಿವೆ.",
    points: 10
  },
  {
    id: "fq_21",
    round: "r5",
    roundName: "Imam Shafi'i: Life & Usul al-Fiqh",
    roundNameMl: "ഇമാം ശാഫിഈ (റ): ചരിത്രവും ഉസൂലും",
    category: "Usul al-Fiqh",
    difficulty: "Easy",
    questionEn: "Which masterpiece authored by Imam al-Shafi'i is celebrated as the very first written book on the science of Usul al-Fiqh (Principles of Islamic Jurisprudence)?",
    questionMl: "ഉസൂലുൽ ഫിഖ്ഹിൽ (ഇസ്ലാമിക കർമ്മശാസ്ത്ര തത്വങ്ങൾ) രചിക്കപ്പെട്ട ലോകത്തെ പ്രഥമ ഗ്രന്ഥമായി പണ്ഡിതന്മാർ ഏകോപിച്ച ഇമാം ശാഫിഈയുടെ ഗ്രന്ഥമേത്?",
    questionKn: "ಇಸ್ಲಾಮಿಕ್ ನ್ಯಾಯಶಾಸ್ತ್ರ ತತ್ವಗಳ (ಉಸೂಲುಲ್ ಫಿಕ್ಹ್) ಇತಿಹಾಸದಲ್ಲೇ ಪ್ರಪ್ರಥಮ ಗ್ರಂಥವೆಂದು ಖ್ಯಾತಿ ಪಡೆದ ಇಮಾಮ್ ಶಾಫಿಈ ಅವರ ಶ್ರೇಷ್ಠ ಕೃತಿ ಯಾವುದು?",
    options: [
      "Kitab al-Umm (കിതാബുൽ ഉമ്മ്)",
      "Ar-Risalah (അർ-രിസാല)",
      "Al-Muwatta (അൽ-മുവത്വ)",
      "Al-Hujjah (അൽ-ഹുജ്ജ)"
    ],
    optionsKn: [
      "ಕಿತಾಬುಲ್ ಉಮ್ಮ್",
      "ಅರ್-ರಿಸಾಲಾ",
      "ಅಲ್-ಮುವತ್ತಾ",
      "ಅಲ್-ಹುಜ್ಜಾ"
    ],
    correctIndex: 1,
    explanationEn: "Imam al-Shafi'i composed 'Ar-Risalah' at the request of Abdur-Rahman ibn Mahdi. It is unanimously revered as the founding text establishing the methodology and principles of Usul al-Fiqh in Islamic history.",
    explanationMl: "ഇമാം ശാഫിഈ (റ) രചിച്ച 'അർ-രിസാല' ആണ് ഇസ്ലാമിക നിയമ തത്ത്വശാസ്ത്രമായ ഉസൂലുൽ ഫിഖ്ഹിൽ രചിക്കപ്പെട്ട ലോകത്തെ പ്രഥമ ഗ്രന്ഥമായി ചരിത്രകാരന്മാരും പണ്ഡിതരും ഒരേസ്വരത്തിൽ അംഗീകരിക്കുന്നത്.",
    explanationKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರು ಅಬ್ದುರ್-ರಹ್ಮಾನ್ ಬಿನ್ ಮಹ್ದಿ ಅವರ ವಿನಂತಿಯಂತೆ ರಚಿಸಿದ ಅರ್-ರಿಸಾಲಾ, ಉಸೂಲುಲ್ ಫಿಕ್ಹ್‌ನ ವಿಧಾನ ಮತ್ತು ತತ್ವಗಳನ್ನು ಸ್ಥಾಪಿಸಿದ ಮೊದಲ ಲಿಖಿತ ಗ್ರಂಥವೆಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ.",
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
    questionKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರ ಹೊಸ ಮದ್ಹಬ್ (ಕೌಲುಲ್ ಜದೀದ್) ಆಧಾರಿತ ಅತ್ಯಂತ ವಿಸ್ತಾರವಾದ ಕರ್ಮಶಾಸ್ತ್ರ ಗ್ರಂಥ ಯಾವುದು?",
    options: [
      "Minhaj al-Talibin (മിൻഹാജുത്ത്വാലിബീൻ)",
      "Al-Muhadhdhab (അൽ-മുഹദ്ദബ്)",
      "Fath al-Mu'in (ഫത്ഹുൽ മുഈൻ)",
      "Kitab al-Umm (കിതാബുൽ ഉമ്മ്)"
    ],
    optionsKn: [
      "ಮಿನ್ಹಾಜುತ್ತಾಲಿಬೀನ್",
      "ಅಲ್-ಮುಹದ್ದಬ್",
      "ಫತ್ಹುಲ್ ಮುಈನ್",
      "ಕಿತಾಬುಲ್ ಉಮ್ಮ್"
    ],
    correctIndex: 3,
    explanationEn: "'Kitab al-Umm' is the monumental master collection containing Imam al-Shafi'i's mature legal opinions, reasoning, and dialogues, formulated primarily during his years in Egypt.",
    explanationMl: "ഇമാം ശാഫിഈ (റ) ഈജിപ്തിൽ വെച്ച് രചിച്ച ഏറ്റവും വലിയ കർമ്മശാസ്ത്ര ഗ്രന്ഥമാണ് 'കിതാബുൽ ഉമ്മ്'. അദ്ദേഹത്തിന്റെ പുതിയ മദ്ഹബിലെ ഫിഖ്ഹീ വിധികൾ ഇതിലാണ് ക്രോഡീകരിക്കപ്പെട്ടിട്ടുള്ളത്.",
    explanationKn: "ಕಿತಾಬುಲ್ ಉಮ್ಮ್ ಇಮಾಮ್ ಶಾಫಿಈ ಅವರ ಪರಿಪಕ್ವ ಫಿಕ್ಹೀ ಅಭಿಪ್ರಾಯಗಳು, ತರ್ಕಗಳು ಮತ್ತು ಸಂವಾದಗಳನ್ನು ಒಳಗೊಂಡ ಮಹತ್ವದ ಗ್ರಂಥ. ಅದನ್ನು ಮುಖ್ಯವಾಗಿ ಈಜಿಪ್ಟ್‌ನಲ್ಲಿ ರಚಿಸಲಾಯಿತು.",
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
    questionKn: "ಇಮಾಮ್ ಮುಹಮ್ಮದ್ ಬಿನ್ ಇದ್ರೀಸ್ ಶಾಫಿಈ (ರ) ಯಾವ ಹಿಜ್ರಿ ವರ್ಷದಲ್ಲಿ ಮತ್ತು ಎಲ್ಲಿ ಜನಿಸಿದರು?",
    options: [
      "150 AH in Gaza, Palestine (ഹിജ്റ 150-ൽ ഗസ്സയിൽ)",
      "164 AH in Baghdad (ഹിജ്റ 164-ൽ ബഗ്ദാദിൽ)",
      "80 AH in Kufa, Iraq (ഹിജ്റ 80-ൽ കൂഫയിൽ)",
      "93 AH in Madinah Munawwarah (ഹിജ്റ 93-ൽ മദീനയിൽ)"
    ],
    optionsKn: [
      "ಹಿಜ್ರಿ 150ರಲ್ಲಿ ಫಿಲಸ್ತೀನ್‌ನ ಗಾಝಾದಲ್ಲಿ",
      "ಹಿಜ್ರಿ 164ರಲ್ಲಿ ಬಗ್ದಾದ್‌ನಲ್ಲಿ",
      "ಹಿಜ್ರಿ 80ರಲ್ಲಿ ಇರಾಕ್‌ನ ಕೂಫಾದಲ್ಲಿ",
      "ಹಿಜ್ರಿ 93ರಲ್ಲಿ ಮದೀನಾ ಮುನವ್ವರದಲ್ಲಿ"
    ],
    correctIndex: 0,
    explanationEn: "Imam al-Shafi'i was born in the year 150 AH in Gaza (Palestine)—the exact year Imam Abu Hanifah passed away. He was later taken to Makkah as a young boy to learn Arabic and Islamic sciences.",
    explanationMl: "ഇമാം അബൂഹനീഫ (റ) വഫാത്തായ അതേ വർഷമായ ഹിജ്റ 150-ൽ ഫലസ്തീനിലെ ഗസ്സയിലാണ് ഇമാം ശാഫിഈ (റ) ജനിച്ചത്. പിന്നീട് കുട്ടിക്കാലത്ത് തന്നെ മാതാവ് അദ്ദേഹത്തെ മക്കയിലേക്ക് കൊണ്ടുപോയി വളർത്തി.",
    explanationKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರು ಹಿಜ್ರಿ 150ರಲ್ಲಿ ಫಿಲಸ್ತೀನ್‌ನ ಗಾಝಾದಲ್ಲಿ ಜನಿಸಿದರು. ಅದೇ ವರ್ಷ ಇಮಾಮ್ ಅಬೂ ಹನೀಫಾ ಅವರು ವಫಾತಾದರು; ನಂತರ ಬಾಲ್ಯದಲ್ಲೇ ಅವರು ಮಕ್ಕಾಗೆ ತೆರಳಿದರು.",
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
    questionKn: "ಮದೀನಾದಲ್ಲಿ 'ಅಲ್-ಮುವತ್ತಾ' ಕೃತಿಯನ್ನು ಕಂಠಪಾಠ ಮಾಡಿ ಇಮಾಮ್ ಶಾಫಿಈ ಯಾರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ವಿದ್ಯಾರ್ಜನೆ ಮಾಡಿದರು?",
    options: [
      "Imam Abu Hanifah (റ)",
      "Imam Ahmad ibn Hanbal (റ)",
      "Imam Malik ibn Anas (റ)",
      "Imam Al-Awza'i (റ)"
    ],
    optionsKn: [
      "ಇಮಾಮ್ ಅಬೂ ಹನೀಫಾ (ರ)",
      "ಇಮಾಮ್ ಅಹ್ಮದ್ ಬಿನ್ ಹನ್ಬಲ್ (ರ)",
      "ಇಮಾಮ್ ಮಾಲಿಕ್ ಬಿನ್ ಅನಸ್ (ರ)",
      "ಇಮಾಮ್ ಅಲ್-ಅವ್ಜಾಈ (ರ)"
    ],
    correctIndex: 2,
    explanationEn: "Imam al-Shafi'i traveled to Madinah to sit at the feet of Imam Dar al-Hijrah, Imam Malik ibn Anas (RA), having already memorized 'Al-Muwatta' in its entirety, dazzling Imam Malik with his intellect and eloquence.",
    explanationMl: "മദീനയിലെ വലിയ ഹദീസ് പണ്ഡിതനും 'അൽ-മുവത്വ'യുടെ രചയിതാവുമായ ഇമാം മാലിക് ബിൻ അനസ് (റ) തങ്ങളുടെ അടുത്താണ് ഇമാം ശാഫിഈ പഠനം നടത്തിയത്. പഠനത്തിന് മുമ്പ് തന്നെ മുവത്വ പൂർണ്ണമായി മനഃപാഠമാക്കിയിരുന്നു.",
    explanationKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರು ಅಲ್-ಮುವತ್ತಾವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಮನಪಾಠ ಮಾಡಿಕೊಂಡು ಮದೀನಾದ ಪ್ರಸಿದ್ಧ ವಿದ್ವಾಂಸ ಇಮಾಮ್ ಮಾಲಿಕ್ ಬಿನ್ ಅನಸ್ ಅವರ ಬಳಿ ವಿದ್ಯಾಭ್ಯಾಸ ಮಾಡಿದರು.",
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
    questionKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರ ತತ್ವದ ಪ್ರಕಾರ ಇಸ್ಲಾಮಿಕ್ ಶರಿಯಾದ ಒಪ್ಪಿತ ಮೂಲ ನಾಲ್ಕು ಆಧಾರಗಳು (ಪ್ರಮಾಣಗಳು) ಯಾವುವು?",
    options: [
      "The Quran, Sunnah, and Urf (Customary Practice)",
      "The Quran, Prophetic Sunnah, Ijma' (Consensus), and Qiyas (Analogy)",
      "The Quran, Istihsan (Juristic Preference), and Maslahah Mursalah",
      "The Quran and Hadith only"
    ],
    optionsKn: [
      "ಕುರ್‌ಆನ್, ಸುನ್ನತ್ ಮತ್ತು ಉರ್ಫ್ (ಸಾಂಪ್ರದಾಯಿಕ ಆಚರಣೆ)",
      "ಕುರ್‌ಆನ್, ಪ್ರವಾದಿ ಸುನ್ನತ್, ಇಜ್ಮಾಅ್ (ಒಮ್ಮತ) ಮತ್ತು ಕಿಯಾಸ್ (ಸಾದೃಶ್ಯ)",
      "ಕುರ್‌ಆನ್, ಇಸ್ತಿಹ್ಸಾನ್ (ನ್ಯಾಯಶಾಸ್ತ್ರೀಯ ಆದ್ಯತೆ) ಮತ್ತು ಮಸ್ಲಹಾ ಮುರ್ಸಲಾ",
      "ಕುರ್‌ಆನ್ ಮತ್ತು ಹದೀಸ್ ಮಾತ್ರ"
    ],
    correctIndex: 1,
    explanationEn: "Imam al-Shafi'i codified that all Islamic legal rulings must be derived from: 1. The Quran, 2. The Sunnah of Prophet Muhammad ﷺ, 3. Ijma' (scholarly consensus), and 4. Qiyas (sound legal analogy based on the first two).",
    explanationMl: "ഇമാം ശാഫിഈയുടെ ഫിഖ്ഹീ ഉസൂലനുസരിച്ച് ഇസ്ലാമിക നിയമ നിർമ്മാണത്തിന്റെ അടിസ്ഥാന പ്രമാണങ്ങൾ നാലാകുന്നു: 1. വിശുദ്ധ ഖുർആൻ, 2. പുണ്യ നബി ﷺ-യുടെ സുന്നത്ത്, 3. ഇജ്മാഅ് (പണ്ഡിത ഏകോപനം), 4. ഖിയാസ് (സാദൃശ്യ താരതമ്യം).",
    explanationKn: "ಇಮಾಮ್ ಶಾಫಿಈ ಅವರ ಉಸೂಲ್ ಪ್ರಕಾರ ಇಸ್ಲಾಮಿಕ್ ಕಾನೂನಿನ ನಾಲ್ಕು ಮೂಲಗಳು: ಕುರ್‌ಆನ್, ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ ﷺ ಅವರ ಸುನ್ನತ್, ಇಜ್ಮಾಅ್ ಮತ್ತು ಕಿಯಾಸ್.",
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
const SHUFFLED_DEFAULT_QUESTIONS = DEFAULT_QUESTIONS;

// Storage key version bumped to v3 for Shafi'i Fiqh question bank
const QUESTION_STORAGE_KEY = "meelad_quiz_questions_v4";

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
        const docSnap = await window.firestoreDb.collection('quiz_bank').doc('master_questions_v4').get();
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
