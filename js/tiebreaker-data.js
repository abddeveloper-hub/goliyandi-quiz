/**
 * Meelad Fest Goliyangadi — Sudden Death & Tie-Breaker Questions
 * Rapid 10-second high stakes questions for Grand Islamic Quiz Champions
 */

const TIEBREAKER_QUESTIONS = [
  {
    id: "tb_1",
    round: "Sudden Death Tie-Breaker",
    questionMl: "വിശുദ്ധ ഖുർആനിൽ 'ബിസ്മില്ലാഹിർറഹ്മാനിർറഹീം' രണ്ട് പ്രാവശ്യം പരാമർശിക്കപ്പെട്ട സൂറത്ത് ഏതാണ്?",
    questionKn: "ಪವಿತ್ರ ಕುರ್‌ಆನ್‌ನಲ್ಲಿ 'ಬಿಸ್ಮಿಲ್ಲಾಹಿರ್ ರಹ್ಮಾನಿರ್ ರಹೀಮ್' ಎರಡು ಬಾರಿ ಉಲ್ಲೇಖಿಸಲಾದ ಸೂರಃ ಯಾವುದು?",
    questionEn: "Which Surah in the Holy Quran contains 'Bismillahir Rahmanir Raheem' twice?",
    options: [
      { id: "A", ml: "സൂറത്തുൽ ബഖറ", kn: "ಸೂರಃ ಅಲ್-ಬಖರಾ", en: "Surah Al-Baqarah" },
      { id: "B", ml: "സൂറത്തുന്നംല്", kn: "ಸೂರಃ ಅನ್-ನಮ್ಲ್", en: "Surah An-Naml" },
      { id: "C", ml: "സൂറത്തുത്തൗബ", kn: "ಸೂರಃ ಅತ್-ತೌಬಾ", en: "Surah At-Tawbah" },
      { id: "D", ml: "സൂറത്തു യാസീൻ", kn: "ಸೂರಃ ಯಾಸೀನ್", en: "Surah Ya-Sin" }
    ],
    correctAnswer: "B",
    explanationMl: "സൂറത്തുന്നംലിൽ (27:30) സുലൈമാൻ നബിയുടെ കത്ത് പരാമർശിക്കുമ്പോൾ ബിസ്മി രണ്ടാമതും വരുന്നു.",
    explanationKn: "ಸೂರಃ ಅನ್-ನಮ್ಲ್ (27:30) ನಲ್ಲಿ ಸುಲೈಮಾನ್ (ಅ) ಅವರ ಪತ್ರವನ್ನು ಉಲ್ಲೇಖಿಸುವಾಗ ಬಿಸ್ಮಿಲ್ಲಾಹ್ ಪುನಃ ಬರುತ್ತದೆ.",
    explanationEn: "In Surah An-Naml (27:30), Bismillah appears in the beginning and inside the letter of Prophet Sulaiman (AS)."
  },
  {
    id: "tb_2",
    round: "Sudden Death Tie-Breaker",
    questionMl: "ഇസ്ലാമിലെ ആദ്യത്തെ മുഅദ്ദിൻ (ബാങ്ക് വിളിച്ച സ്വഹാബി) ആരാണ്?",
    questionKn: "ಇಸ್ಲಾಂನ ಪ್ರಪ್ರಥಮ ಮುಅದ್ದಿನ್ (ಆಜಾನ್ ಕೂಗಿದ ಸಹಾಬಿ) ಯಾರು?",
    questionEn: "Who was the first Muazzin (caller to prayer) in Islam?",
    options: [
      { id: "A", ml: "ബിലാൽ ബിൻ റബാഹ് (റ)", kn: "ಬಿಲಾಲ್ ಬಿನ್ ರಬಾಹ್ (ರ)", en: "Bilal ibn Rabah (RA)" },
      { id: "B", ml: "അബൂബക്കർ സിദ്ദീഖ് (റ)", kn: "ಅಬೂಬಕರ್ ಸಿದ್ದೀಖ್ (ರ)", en: "Abu Bakr As-Siddiq (RA)" },
      { id: "C", ml: "ഉസ്മാൻ ബിൻ അഫ്ഫാൻ (റ)", kn: "ಉಸ್ಮಾನ್ ಬಿನ್ ಅಫ್ಫಾನ್ (ರ)", en: "Uthman ibn Affan (RA)" },
      { id: "D", ml: "സൽമാനുൽ ഫാരിസി (റ)", kn: "ಸಲ್ಮಾನ್ ಅಲ್-ಫಾರಿಸಿ (ರ)", en: "Salman Al-Farsi (RA)" }
    ],
    correctAnswer: "A",
    explanationMl: "നബി(സ്വ) തങ്ങളുടെ നിർദ്ദേശപ്രകാരം കഅ്ബയുടെ മുകളിൽ കയറി ആദ്യമായി ബാങ്ക് വിളിച്ചത് ബിലാൽ(റ) ആണ്.",
    explanationKn: "ಪ್ರವಾದಿ (ಸ) ಅವರ ಆದೇಶದ ಮೇರೆಗೆ ಕಅಬಾದ ಮೇಲೆ ನಿಂತು ಪ್ರಥಮ ಆಜಾನ್ ಕೂಗಿದವರು ಹಝ್ರತ್ ಬಿಲಾಲ್ (ರ).",
    explanationEn: "Hazrat Bilal ibn Rabah (RA) was appointed by Prophet Muhammad (PBUH) as the very first Muazzin of Islam."
  },
  {
    id: "tb_3",
    round: "Sudden Death Tie-Breaker",
    questionMl: "ഖുർആനിലെ ഏറ്റവും നീളം കൂടിയ ആയത്ത് (സൂക്തം) ഏതാണ്?",
    questionKn: "ಪವಿತ್ರ ಕುರ್‌ಆನ್‌ನ ಅತ್ಯಂತ ದೀರ್ಘವಾದ ಆಯತ್ (ವಾಕ್ಯ) ಯಾವುದು?",
    questionEn: "Which is the longest Ayah (verse) in the Holy Quran?",
    options: [
      { id: "A", ml: "ആയത്തുൽ കുർസി", kn: "ಆಯತುಲ್ ಕುರ್ಸಿ", en: "Ayatul Kursi" },
      { id: "B", ml: "ആയത്തുദ്ദയ്ൻ (സൂറത്തുൽ ബഖറ 282)", kn: "ಆಯತುದ್ ದಯ್ನ್ (ಸೂರಃ ಅಲ್-ಬಖರಾ 282)", en: "Ayat ad-Dayn (Surah Al-Baqarah 282)" },
      { id: "C", ml: "ആയത്തുന്നൂർ", kn: "ಆಯತುನ್ ನೂರ್", en: "Ayat An-Nur" },
      { id: "D", ml: "സൂറത്തുൽ ഇഖ്ലാസ്", kn: "ಸೂರಃ ಅಲ್-ಇಖ್ಲಾಸ್", en: "Surah Al-Ikhlas" }
    ],
    correctAnswer: "B",
    explanationMl: "സാമ്പത്തിക ഇടപാടുകളെക്കുറിച്ചുള്ള ആയത്തുദ്ദയ്ൻ (സൂറത്തുൽ ബഖറ 282) ആണ് ഖുർആനിലെ ഏറ്റവും വലിയ ആയത്ത്.",
    explanationKn: "ಸಾಲ ಮತ್ತು ಆರ್ಥಿಕ ವ್ಯವಹಾರಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಸೂರಃ ಅಲ್-ಬಖರಾದ 282ನೇ ಆಯತ್ ಕುರ್‌ಆನ್‌ನ ಅತಿ ಉದ್ದನೆಯ ಆಯತ್ ಆಗಿದೆ.",
    explanationEn: "Ayat ad-Dayn (Surah Al-Baqarah 2:282), the verse of loan and contracts, is the longest verse in the Quran."
  },
  {
    id: "tb_4",
    round: "Sudden Death Tie-Breaker",
    questionMl: "ഇസ്ലാമിൽ ആദ്യമായി ഹിജ്റ പോയ രാജ്യം ഏതാണ്?",
    questionKn: "ಇಸ್ಲಾಂನ ಇತಿಹಾಸದಲ್ಲಿ ಪ್ರಥಮ ಹಿಜ್ರತ್ ನಡೆದ ದೇಶ ಯಾವುದು?",
    questionEn: "Which country was the destination of the first Migration (Hijrah) in Islam?",
    options: [
      { id: "A", ml: "മദീനത്തുൽ മുനവ്വറ", kn: "ಮದೀನತುಲ್ ಮುನವ್ವರಾ", en: "Madinah Al-Munawwarah" },
      { id: "B", ml: "അബിസീനിയ (ഹബശ - എത്യോപ്യ)", kn: "ಅಬಿಸೀನಿಯಾ (ಹಬಶಾ - ಇಥಿಯೋಪಿಯಾ)", en: "Abyssinia (Habasha - Ethiopia)" },
      { id: "C", ml: "ഈജിപ്ത് (മിസ്ർ)", kn: "ಈಜಿಪ್ಟ್ (ಮಿಸ್ರ್)", en: "Egypt (Misr)" },
      { id: "D", ml: "യമൻ", kn: "ಯಮನ್", en: "Yemen" }
    ],
    correctAnswer: "B",
    explanationMl: "നജ്ജാശി രാജാവിന്റെ ഭരണത്തിൻ കീഴിലുള്ള ഹബശയിലേക്കായിരുന്നു (എത്യോപ്യ) സ്വഹാബികളുടെ ആദ്യ ഹിജ്റ.",
    explanationKn: "ರಾಜ ನಜ್ಜಾಶಿಯ ಆಳ್ವಿಕೆಯಲ್ಲಿದ್ದ ಹಬಶಾ (ಇಥಿಯೋಪಿಯಾ) ದೇಶಕ್ಕೆ ಸಹಾಬಿಗಳ ಮೊದಲ ಹಿಜ್ರತ್ ನಡೆಯಿತು.",
    explanationEn: "The first migration of early Muslims under persecution was to Abyssinia (Habasha / modern Ethiopia)."
  },
  {
    id: "tb_5",
    round: "Sudden Death Tie-Breaker",
    questionMl: "നബി(സ്വ) തങ്ങൾ പങ്കെടുത്ത ആദ്യത്തെ പ്രധാന യുദ്ധം ഏതാണ്?",
    questionKn: "ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ (ಸ) ಅವರು ಭಾಗವಹಿಸಿದ ಪ್ರಥಮ ಪ್ರಮುಖ ಯುದ್ಧ ಯಾವುದು?",
    questionEn: "Which was the first major battle fought by Prophet Muhammad (PBUH) and the Muslims?",
    options: [
      { id: "A", ml: "ബദർ യുദ്ധം", kn: "ಬದರ್ ಯುದ್ಧ", en: "Battle of Badr" },
      { id: "B", ml: "ഉഹ്ദ് യുദ്ധം", kn: "ಉಹುದ್ ಯುದ್ಧ", en: "Battle of Uhud" },
      { id: "C", ml: "ഖൻദഖ് യുദ്ധം", kn: "ಖಂದಖ್ ಯುದ್ಧ", en: "Battle of Khandaq" },
      { id: "D", ml: "ഹുനൈൻ യുദ്ധം", kn: "ಹುನೈನ್ ಯುದ್ಧ", en: "Battle of Hunayn" }
    ],
    correctAnswer: "A",
    explanationMl: "ഹിജ്റ രണ്ടാം വർഷം റമളാൻ 17 ന് നടന്ന ബദർ യുദ്ധമാണ് ആദ്യത്തെ പ്രധാന പോരാട്ടം.",
    explanationKn: "ಹಿಜ್ರಿ 2ನೇ ವರ್ಷದ ರಮಝಾನ್ 17 ರಂದು ನಡೆದ ಬದರ್ ಕದನವು ಪ್ರಥಮ ಪ್ರಮುಖ ಯುದ್ಧವಾಗಿದೆ.",
    explanationEn: "The Battle of Badr, fought on 17th Ramadan 2 AH, was the first major battle in Islamic history."
  }
];

window.TIEBREAKER_QUESTIONS = TIEBREAKER_QUESTIONS;
