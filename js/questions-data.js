/**
 * Meelad Fest Goliyangadi - Master Islamic Question Bank
 * Curated with authentic Seerah un-Nabi ﷺ, Quran, Sahaba, Islamic History, and Public Audience questions.
 * Bilingual: English and Malayalam (മലയാളം)
 */

const DEFAULT_QUESTIONS = [
  // ================= ROUND 1: SEERAH UN-NABI ﷺ (പ്രവാചക ചരിത്രം) =================
  {
    id: "sq_1",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Easy",
    questionEn: "In which historic year was the Holy Prophet Muhammad ﷺ born in Makkah, famously known as the 'Year of the Elephant'?",
    questionMl: "പ്രവാചകൻ മുഹമ്മദ് നബി ﷺ ജനിച്ച 'ആനക്കലാപം' നടന്ന വർഷം (ആമുൽ ഫീൽ) ഏത് ക്രിസ്താബ്ദത്തിലാണ്?",
    options: [
      "570 / 571 CE",
      "610 CE",
      "622 CE",
      "632 CE"
    ],
    correctIndex: 0,
    explanationEn: "Prophet Muhammad ﷺ was born on 12th Rabi' al-Awwal in 570/571 CE in Makkah, in the year of the Elephant (Aam al-Feel).",
    explanationMl: "ഹിജ്റക്ക് മുൻപ് എ.ഡി 570/571-ൽ റബീഉൽ അവ്വൽ മാസത്തിലാണ് പുണ്യ നബി ﷺ മക്കയിൽ ഭൂജാതരായത്.",
    points: 10
  },
  {
    id: "sq_2",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Easy",
    questionEn: "Who was the foster mother of Prophet Muhammad ﷺ who nursed him in the desert of Banu Sa'd?",
    questionMl: "ബനൂ സഅ്ദ് ഗോത്രത്തിൽ പ്രവാചകൻ മുഹമ്മദ് നബി ﷺ-യെ പോറ്റി വളർത്തിയ മുലയൂട്ടിയ മാതാവ് ആരാണ്?",
    options: [
      "Halimah al-Sa'diyyah (റ)",
      "Barakah / Umm Ayman (റ)",
      "Fatimah bint Asad (റ)",
      "Thuwaybah (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyidatuna Halimah al-Sa'diyyah (RA) took baby Muhammad ﷺ to the desert of Banu Sa'd and was blessed with immense Barakah.",
    explanationMl: "ബനൂ സഅ്ദ് ഗോത്രത്തിൽ നിന്നുള്ള ഹലീമത്തുസ്സഅ്ദിയ്യ (റ) ആണ് നബി ﷺ-യെ മുലയൂട്ടി വളർത്തിയത്.",
    points: 10
  },
  {
    id: "sq_3",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Medium",
    questionEn: "In which cave did Prophet Muhammad ﷺ receive the very first divine revelation of the Holy Quran through Angel Jibreel (AS)?",
    questionMl: "ജിബ്‌രീൽ (അ) മുഖേന വിശുദ്ധ ഖുർആനിലെ പ്രഥമ ദിവ്യസന്ദേശം നബി ﷺ-ക്ക് അവതരിച്ച ഗുഹ ഏതാണ്?",
    options: [
      "Cave of Hira (ഹിറാ ഗുഹ)",
      "Cave of Thawr (സൗർ ഗുഹ)",
      "Cave of Uhud (ഉഹ്ദ് ഗുഹ)",
      "Cave of Kahf (കഹ്ഫ് ഗുഹ)"
    ],
    correctIndex: 0,
    explanationEn: "The first revelation (Surah Al-Alaq: 1-5) was revealed in Cave Hira on Jabal al-Noor during Ramadan in 610 CE.",
    explanationMl: "ജബലുന്നുറിലെ ഹിറാ ഗുഹയിൽ ധ്യാനത്തിലിരിക്കുമ്പോഴാണ് നബി ﷺ-ക്ക് ആദ്യമായി 'ഇഖ്റഅ്' എന്ന ദിവ്യവചനങ്ങൾ ലഭിച്ചത്.",
    points: 10
  },
  {
    id: "sq_4",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Medium",
    questionEn: "What was the name of the trusted camel ridden by Prophet Muhammad ﷺ during the historic Hijrah from Makkah to Madinah?",
    questionMl: "മക്കയിൽ നിന്ന് മദീനയിലേക്കുള്ള ചരിത്രപ്രസിദ്ധമായ ഹിജ്റ വേളയിൽ നബി ﷺ സഞ്ചരിച്ച ഒട്ടകത്തിന്റെ പേരെന്ത്?",
    options: [
      "Al-Qaswa (ഖസ്വാഅ്)",
      "Al-Adhba (അദ്ബാഅ്)",
      "Al-Jad'a (ജദ്ആഅ്)",
      "Al-Buraq (ബുറാഖ്)"
    ],
    correctIndex: 0,
    explanationEn: "Al-Qaswa was the beloved she-camel of the Prophet ﷺ that determined the location of Masjid an-Nabawi in Madinah.",
    explanationMl: "നബി ﷺ-യുടെ പ്രിയപ്പെട്ട ഒട്ടകമായ 'ഖസ്വാഅ്' മദീനയിൽ എത്തിയപ്പോൾ ഇരുന്ന സ്ഥലത്താണ് മസ്ജിദുന്നബവി നിർമ്മിച്ചത്.",
    points: 10
  },
  {
    id: "sq_5",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Hard",
    questionEn: "Who was the companion who accompanied the Prophet Muhammad ﷺ during the secret journey of Hijrah in the Cave of Thawr?",
    questionMl: "ഹിജ്റ വേളയിൽ സൗർ ഗുഹയിൽ വെച്ച് നബി ﷺ-യോടൊപ്പം കൂട്ടുകാരനായി നിലകൊണ്ട സ്വഹാബി ആര്?",
    options: [
      "Abu Bakr as-Siddiq (റ)",
      "Umar ibn al-Khattab (റ)",
      "Ali ibn Abi Talib (റ)",
      "Uthman ibn Affan (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Abu Bakr as-Siddiq (RA) was the sole companion in the Cave of Thawr ('The Second of the Two').",
    explanationMl: "ഖുർആൻ 'രണ്ടാളുകളിൽ രണ്ടാമൻ' എന്ന് വിശേഷിപ്പിച്ച അബൂബക്കർ സിദ്ദീഖ് (റ) ആണ് സൗർ ഗുഹയിൽ നബി ﷺ-ക്ക് കൂട്ടായിരുന്നത്.",
    points: 10
  },
  {
    id: "sq_6",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Medium",
    questionEn: "What was the title given to Prophet Muhammad ﷺ by the people of Makkah even before Prophethood due to his honesty and trustworthiness?",
    questionMl: "നബിത്വത്തിന് മുൻപ് തന്നെ സത്യസന്ധതയും വിശ്വസ്തതയും കണ്ട് മക്കക്കാർ നബി ﷺ-ക്ക് നൽകിയ നാമവിശേഷണം എന്തായിരുന്നു?",
    options: [
      "Al-Sadiq & Al-Ameen (അസ്സ്വാദിഖ് & അൽ അമീൻ)",
      "Al-Farooq (അൽ ഫാറൂഖ്)",
      "Dhun-Noorayn (ദുന്നൂറൈൻ)",
      "Asadullah (അസദുല്ലാഹ്)"
    ],
    correctIndex: 0,
    explanationEn: "Makkans called him 'Al-Sadiq' (The Truthful) and 'Al-Ameen' (The Trustworthy).",
    explanationMl: "ഏറ്റവും വലിയ സത്യസന്ധനും വിശ്വസ്തനുമായതിനാൽ മക്കക്കാർ നബി ﷺ-യെ അസ്സ്വാദിഖുൽ അമീൻ എന്ന് വിളിച്ചു.",
    points: 10
  },
  {
    id: "sq_7",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Hard",
    questionEn: "In which year of the prophetic mission did the miraculous Night Journey (Isra' and Mi'raj) take place?",
    questionMl: "പ്രവാചകത്വത്തിന്റെ എത്രാമത്തെ വർഷത്തിലാണ് പരിശുദ്ധ ഇസ്റാഅ് - മിഅ്റാജ് (നിശാപ്രയാണം) നടന്നത്?",
    options: [
      "10th / 11th Year of Prophethood (നബിത്വത്തിന്റെ 10-11 ആം വർഷം)",
      "1st Year of Prophethood (ഒന്നാം വർഷം)",
      "5th Year of Hijrah (ഹിജ്റ 5-ൽ)",
      "8th Year of Hijrah (ഹിജ്റ 8-ൽ)"
    ],
    correctIndex: 0,
    explanationEn: "Isra and Mi'raj occurred around the 10th-11th year of Prophethood (approx. 620-621 CE), before the Hijrah to Madinah.",
    explanationMl: "നബിത്വത്തിന്റെ 10-11 ആം വർഷത്തിൽ (ഹിജ്റക്ക് തൊട്ടുമുൻപ്) റജബ് മാസത്തിലാണ് ഇസ്റാഅ് മിഅ്റാജ് നടന്നത്.",
    points: 10
  },
  {
    id: "sq_8",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Medium",
    questionEn: "What was the name of the peace treaty signed in 6 AH between the Muslims of Madinah and the Quraysh of Makkah?",
    questionMl: "ഹിജ്റ ആറാം വർഷത്തിൽ മുസ്ലിംകളും മക്കയിലെ ഖുറൈശികളും തമ്മിൽ ഒപ്പുവെച്ച ചരിത്രപ്രസിദ്ധമായ സമാധാന ഉടമ്പടി ഏതാണ്?",
    options: [
      "Treaty of Hudaybiyyah (ഹുദൈബിയ്യ സന്ധി)",
      "Pledge of Ridwan (ബൈഅത്തുർ രിള്‌വാൻ)",
      "Constitution of Madinah (മദീന ചാർട്ടർ)",
      "Pledge of Aqabah (അഖബ ഉടമ്പടി)"
    ],
    correctIndex: 0,
    explanationEn: "Sulh al-Hudaybiyyah was called 'Fathan Mubeena' (a clear victory) in Surah Al-Fath.",
    explanationMl: "ഹുദൈബിയ്യ സന്ധിയെ വിശുദ്ധ ഖുർആൻ 'പ്രത്യക്ഷമായ വിജയം' (ഫത്‌ഹൻ മുബീന) എന്നാണ് വിശേഷിപ്പിച്ചത്.",
    points: 10
  },
  {
    id: "sq_9",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Easy",
    questionEn: "Who was the grandfather of Prophet Muhammad ﷺ who took care of him after the demise of his mother Sayyidatuna Aminah (RA)?",
    questionMl: "മാതാവ് ആമിന ബീവിയുടെ വഫാത്തിന് ശേഷം ബാലനായ നബി ﷺ-യെ സംരക്ഷിച്ച പിതാമഹൻ (മുത്തശ്ശൻ) ആരാണ്?",
    options: [
      "Abdul Muttalib (അബ്ദുൽ മുത്ത്വലിബ്)",
      "Abu Talib (അബൂ ത്വാലിബ്)",
      "Hamzah ibn Abdul Muttalib (ഹംസ)",
      "Abbas ibn Abdul Muttalib (അബ്ബാസ്)"
    ],
    correctIndex: 0,
    explanationEn: "His grandfather Abdul Muttalib cared for him until he passed away when the Prophet ﷺ was eight years old.",
    explanationMl: "മുത്തശ്ശൻ അബ്ദുൽ മുത്ത്വലിബ് എട്ടാം വയസ്സ് വരെ നബി ﷺ-യെ സ്വന്തം മക്കളെക്കാൾ സ്നേഹത്തോടെ പോറ്റി വളർത്തി.",
    points: 10
  },
  {
    id: "sq_10",
    round: "r1",
    roundName: "Seerah un-Nabi ﷺ",
    roundNameMl: "പ്രവാചക ചരിത്രം ﷺ",
    category: "Seerah",
    difficulty: "Hard",
    questionEn: "How old was Prophet Muhammad ﷺ when he delivered the historic Farewell Sermon (Khutbat al-Wada') and completed his worldly mission?",
    questionMl: "വിടവാങ്ങൽ ഹജ്ജ് വേളയിൽ ചരിത്രപ്രസിദ്ധമായ വിടവാങ്ങൽ പ്രസംഗം നടത്തുമ്പോൾ പുണ്യ നബി ﷺ-യുടെ പ്രായം എത്രയായിരുന്നു?",
    options: [
      "63 Lunar Years (63 വയസ്സ്)",
      "60 Years (60 വയസ്സ്)",
      "65 Years (65 വയസ്സ്)",
      "58 Years (58 വയസ്സ്)"
    ],
    correctIndex: 0,
    explanationEn: "Prophet Muhammad ﷺ completed his mission and passed away at the age of 63 lunar years in 11 AH (632 CE).",
    explanationMl: "ഹിജ്റ 11-ൽ 63-ാം വയസ്സിലാണ് തിരുനബി ﷺ ഈ ലോകത്തോട് വിടപറഞ്ഞത്.",
    points: 10
  },

  // ================= ROUND 2: HOLY QURAN (വിശുദ്ധ ഖുർആൻ) =================
  {
    id: "qq_1",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Easy",
    questionEn: "Which Surah in the Holy Quran is known as 'Umm al-Kitab' (The Mother of the Book) and is recited in every unit of Salah?",
    questionMl: "വിശുദ്ധ ഖുർആനിലെ 'ഉമ്മുൽ കിതാബ്' (വേദഗ്രന്ഥത്തിന്റെ മാതാവ്) എന്നറിയപ്പെടുന്നതും എല്ലാ നമസ്കാരത്തിലും നിർബന്ധമായും ഓതുന്നതുമായ സൂറത്ത് ഏത്?",
    options: [
      "Surah Al-Fatihah (സൂറത്തുൽ ഫാത്തിഹ)",
      "Surah Al-Baqarah (സൂറത്തുൽ ബഖറ)",
      "Surah Ya-Sin (സൂറത്തു യാസീൻ)",
      "Surah Al-Ikhlas (സൂറത്തുൽ ഇഖ്‌ലാസ്)"
    ],
    correctIndex: 0,
    explanationEn: "Surah Al-Fatihah is the opening chapter of the Quran and the foundation of every Rak'ah of prayer.",
    explanationMl: "സൂറത്തുൽ ഫാത്തിഹയാണ് ഖുർആന്റെ തുടക്കവും എല്ലാ റക്അത്തിലും പാരായണം ചെയ്യേണ്ടതുമായ സൂറത്ത്.",
    points: 10
  },
  {
    id: "qq_2",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Easy",
    questionEn: "Which is the longest Surah and contains the greatest single verse (Ayat al-Kursi) in the Holy Quran?",
    questionMl: "വിശുദ്ധ ഖുർആനിലെ ഏറ്റവും നീളമേറിയതും 'ആയത്തുൽ കുർസിയ്യ്' ഉൾക്കൊള്ളുന്നതുമായ സൂറത്ത് ഏതാണ്?",
    options: [
      "Surah Al-Baqarah (സൂറത്തുൽ ബഖറ)",
      "Surah Aal-e-Imran (സൂറത്തു ആലു ഇംറാൻ)",
      "Surah An-Nisa (സൂറത്തുന്നിസാഅ്)",
      "Surah Al-Ma'idah (സൂറത്തുൽ മാഇദ)"
    ],
    correctIndex: 0,
    explanationEn: "Surah Al-Baqarah contains 286 verses, and Ayat al-Kursi (2:255) is regarded as the greatest verse of the Quran.",
    explanationMl: "286 സൂക്തങ്ങളുള്ള സൂറത്തുൽ ബഖറയാണ് ഏറ്റവും വലിയ സൂറത്ത്; ഇതിൽ ആയത്തുൽ കുർസിയ്യ് (2:255) അടങ്ങിയിരിക്കുന്നു.",
    points: 10
  },
  {
    id: "qq_3",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Medium",
    questionEn: "Which Surah does NOT begin with 'Bismillahir Rahmanir Raheem'?",
    questionMl: "'ബിസ്മില്ലാഹിർറഹ്മാനിർറഹീം' കൂടാതെ ആരംഭിക്കുന്ന ഒരേയൊരു സൂറത്ത് ഏതാണ്?",
    options: [
      "Surah At-Tawbah (സൂറത്തുത്തൗബ)",
      "Surah Al-Anfal (സൂറത്തുൽ അൻഫാൽ)",
      "Surah Al-Fath (സൂറത്തുൽ ഫത്ഹ്)",
      "Surah Al-Hajj (സൂറത്തുൽ ഹജ്ജ്)"
    ],
    correctIndex: 0,
    explanationEn: "Surah At-Tawbah (Surah Bara'at, chapter 9) begins directly without Bismillah.",
    explanationMl: "സൂറത്തുത്തൗബ (ബറാഅത്ത്) മാത്രമാണ് ബിസ്മി ഇല്ലാതെ ആരംഭിക്കുന്നത്.",
    points: 10
  },
  {
    id: "qq_4",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Medium",
    questionEn: "Which Surah contains 'Bismillahir Rahmanir Raheem' twice inside the Quranic text?",
    questionMl: "സൂക്തങ്ങൾക്കുള്ളിലായി 'ബിസ്മില്ലാഹിർറഹ്മാനിർറഹീം' രണ്ടുതവണ പരാമർശിക്കപ്പെട്ട സൂറത്ത് ഏതാണ്?",
    options: [
      "Surah An-Naml (സൂറത്തുന്നംല് - ഉറുമ്പ്)",
      "Surah An-Nahl (സൂറത്തുന്നഹ്‌ല് - തേനീച്ച)",
      "Surah Al-Ankabut (സൂറത്തുൽ അൻകബൂത്ത് - ചിലന്തി)",
      "Surah Al-Feel (സൂറത്തുൽ ഫീൽ - ആന)"
    ],
    correctIndex: 0,
    explanationEn: "Surah An-Naml has Bismillah at the beginning and also in verse 30 ('Innahu min Sulaimana wa innahu Bismillahir Rahmanir Raheem').",
    explanationMl: "സൂറത്തുന്നംലിൽ ആരംഭത്തിലും സുലൈമാൻ നബിയുടെ കത്ത് പറയുന്ന 30-ാം സൂക്തത്തിലും ബിസ്മി വരുന്നു.",
    points: 10
  },
  {
    id: "qq_5",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Hard",
    questionEn: "Who is the only female figure explicitly mentioned by name in the Holy Quran, and has an entire Surah named after her?",
    questionMl: "വിശുദ്ധ ഖുർആനിൽ പേരെടുത്ത് പരാമർശിക്കപ്പെടുകയും ഒരു സൂറത്ത് തന്നെ സ്വന്തം പേരിൽ ഉള്ളതുമായ ഏക വനിത ആര്?",
    options: [
      "Sayyidatuna Maryam (മർയം ബീവി)",
      "Sayyidatuna Asiyah (ആസിയ ബീവി)",
      "Sayyidatuna Khadijah (ഖദീജ ബീവി)",
      "Sayyidatuna Fatimah (ഫാത്തിമ ബീവി)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyidatuna Maryam (AS), the mother of Prophet Isa (AS), is mentioned 34 times by name and Chapter 19 is named Surah Maryam.",
    explanationMl: "ഈസാ നബി (അ)-യുടെ മാതാവായ മർയം (അ) ആണ് ഖുർആനിൽ പേര് പരാമർശിക്കപ്പെട്ട ഏക വനിത (സൂറത്ത് 19).",
    points: 10
  },
  {
    id: "qq_6",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Hard",
    questionEn: "Who is the only Sahabi (companion of the Prophet ﷺ) explicitly mentioned by name in the text of the Holy Quran?",
    questionMl: "വിശുദ്ധ ഖുർആനിലെ ആയത്തിൽ പേര് വ്യക്തമായി പരാമർശിക്കപ്പെട്ട ഒരേയൊരു സ്വഹാബി ആരാണ്?",
    options: [
      "Zayd ibn Harithah (റ) (സൈദ് ബിൻ ഹാരിസ)",
      "Abu Bakr as-Siddiq (റ)",
      "Bilal ibn Rabah (റ)",
      "Salman al-Farsi (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Zayd ibn Harithah (RA) is explicitly mentioned in Surah Al-Ahzab (33:37): 'فلما قضى زيد منها وطرا'.",
    explanationMl: "സൂറത്തുൽ അഹ്‌സാബിലെ 37-ാം സൂക്തത്തിൽ 'സൈദ്' (റ) എന്ന പേര് ഖുർആനിൽ വ്യക്തമാക്കിയിട്ടുണ്ട്.",
    points: 10
  },
  {
    id: "qq_7",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Medium",
    questionEn: "Reciting which short Surah is equated in reward to one-third (1/3) of the entire Holy Quran?",
    questionMl: "ഖുർആന്റെ മൂന്നിലൊന്നിന് തുല്യമായി പുണ്യം ലഭിക്കുമെന്ന് നബി ﷺ വിശേഷിപ്പിച്ച സൂറത്ത് ഏത്?",
    options: [
      "Surah Al-Ikhlas (സൂറത്തുൽ ഇഖ്‌ലാസ്)",
      "Surah Al-Kafirun (സൂറത്തുൽ കാഫിറൂൻ)",
      "Surah Al-Mulk (സൂറത്തുൽ മുൽക്)",
      "Surah Al-Falaq (സൂറത്തുൽ ഫലഖ്)"
    ],
    correctIndex: 0,
    explanationEn: "Prophet Muhammad ﷺ stated in Sahih Bukhari that Surah Al-Ikhlas equals one-third of the Quran due to its pure declaration of Tawheed.",
    explanationMl: "തൗഹീദിന്റെ സാരാംശം ഉൾക്കൊള്ളുന്ന സൂറത്തുൽ ഇഖ്‌ലാസ് ഓതുന്നത് ഖുർആന്റെ മൂന്നിലൊന്ന് ഓതുന്നതിന് തുല്യമാണ്.",
    points: 10
  },
  {
    id: "qq_8",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Easy",
    questionEn: "How many chapters (Surahs) are there in total in the Holy Quran?",
    questionMl: "വിശുദ്ധ ഖുർആനിൽ ആകെ എത്ര സൂറത്തുകൾ (അധ്യായങ്ങൾ) അടങ്ങിയിരിക്കുന്നു?",
    options: [
      "114 Surahs (114 അധ്യായങ്ങൾ)",
      "110 Surahs (110 അധ്യായങ്ങൾ)",
      "120 Surahs (120 അധ്യായങ്ങൾ)",
      "99 Surahs (99 അധ്യായങ്ങൾ)"
    ],
    correctIndex: 0,
    explanationEn: "The Holy Quran consists of 114 Surahs divided into 30 Juz.",
    explanationMl: "വിശുദ്ധ ഖുർആനിൽ 30 ജുസ്ഉകളിലായി ആകെ 114 സൂറത്തുകൾ ഉണ്ട്.",
    points: 10
  },
  {
    id: "qq_9",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Hard",
    questionEn: "Which Prophet is mentioned the most number of times by name (136 times) in the Holy Quran?",
    questionMl: "വിശുദ്ധ ഖുർആനിൽ ഏറ്റവും കൂടുതൽ തവണ (136 തവണ) പേര് പരാമർശിക്കപ്പെട്ട പ്രവാചകൻ ആര്?",
    options: [
      "Prophet Musa (അ) (മൂസാ നബി)",
      "Prophet Ibrahim (അ) (ഇബ്രാഹീം നബി)",
      "Prophet Isa (അ) (ഈസാ നബി)",
      "Prophet Nuh (അ) (നൂഹ് നബി)"
    ],
    correctIndex: 0,
    explanationEn: "Prophet Musa (AS) is mentioned by name 136 times across various Surahs of the Holy Quran.",
    explanationMl: "മൂസാ നബി (അ)-യുടെ പേര് ഖുർആനിൽ 136 തവണ പല അധ്യായങ്ങളിലായി പരാമർശിച്ചിട്ടുണ്ട്.",
    points: 10
  },
  {
    id: "qq_10",
    round: "r2",
    roundName: "Holy Quran & Revelations",
    roundNameMl: "വിശുദ്ധ ഖുർആൻ",
    category: "Quran",
    difficulty: "Medium",
    questionEn: "Which night is described in Surah Al-Qadr as being 'better than a thousand months'?",
    questionMl: "ആയിരം മാസങ്ങളെക്കാൾ പുണ്യമേറിയ രാവായി സൂറത്തുൽ ഖദ്‌റിൽ അല്ലാഹു വിശേഷിപ്പിച്ച രാവ് ഏതാണ്?",
    options: [
      "Laylat al-Qadr (ലൈലത്തുൽ ഖദ്ർ)",
      "Night of Bara'at (ലൈലത്തുൽ ബറാഅത്ത്)",
      "Night of Isra & Mi'raj (മിഅ്റാജ് രാവ്)",
      "Night of Eid (പെരുന്നാൾ രാവ്)"
    ],
    correctIndex: 0,
    explanationEn: "Laylatul Qadr (The Night of Decree) in Ramadan is better than 1,000 months (83.3 years).",
    explanationMl: "റമളാനിലെ ലൈലത്തുൽ ഖദ്ർ 1,000 മാസങ്ങളേക്കാൾ (ഏകദേശം 83 വർഷം) ശ്രേഷ്ഠമാണെന്ന് ഖുർആൻ വ്യക്തമാക്കുന്നു.",
    points: 10
  },

  // ================= ROUND 3: SAHABA & ISLAMIC HISTORY (സ്വഹാബത്തും ചരിത്രവും) =================
  {
    id: "hq_1",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Easy",
    questionEn: "Who was the first person to accept Islam from among the adult men and became the First Rightly Guided Caliph (Khaleefah)?",
    questionMl: "പുരുഷന്മാരിൽ നിന്ന് ആദ്യമായി ഇസ്ലാം സ്വീകരിക്കുകയും ഒന്നാം ഖലീഫയായി തിരഞ്ഞെടുക്കപ്പെടുകയും ചെയ്ത മഹാനായ സ്വഹാബി ആര്?",
    options: [
      "Abu Bakr as-Siddiq (റ)",
      "Umar ibn al-Khattab (റ)",
      "Uthman ibn Affan (റ)",
      "Ali ibn Abi Talib (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Abu Bakr as-Siddiq (RA) was the first adult male convert and the first Caliph of Islam.",
    explanationMl: "അബൂബക്കർ സിദ്ദീഖ് (റ) ആണ് പുരുഷന്മാരിൽ ആദ്യം വിശ്വസിച്ചതും ഒന്നാം ഖലീഫയുമായ മഹാൻ.",
    points: 10
  },
  {
    id: "hq_2",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Easy",
    questionEn: "Who was appointed by Prophet Muhammad ﷺ as the very first Mu'addhin (caller to prayer) of Islam in Madinah?",
    questionMl: "ഇസ്ലാമിലെ പ്രഥമ മുഅദ്ദിനായി (ബാങ്ക് വിളിക്കാൻ) നബി ﷺ തിരഞ്ഞെടുത്ത സ്വഹാബി ആര്?",
    options: [
      "Bilal ibn Rabah al-Habashi (റ)",
      "Abdullah ibn Umm Maktum (റ)",
      "Abu Mahdhura (റ)",
      "Sa'd al-Qaraz (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Bilal ibn Rabah (RA), blessed with a melodious voice and unshakable faith, was the first Mu'addhin.",
    explanationMl: "ബിലാൽ ഇബ്നു റബാഹ് (റ) ആണ് ഇസ്ലാമിൽ ആദ്യമായി മധുര ശബ്ദത്തിൽ ബാങ്ക് വിളിച്ച പ്രഥമ മുഅദ്ദിൻ.",
    points: 10
  },
  {
    id: "hq_3",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Medium",
    questionEn: "Which Sahabi was honored with the title 'Sayfullah' (The Sword of Allah) by Prophet Muhammad ﷺ?",
    questionMl: "നബി ﷺ 'സൈഫുല്ലാഹ്' (അല്ലാഹുവിന്റെ വാൾ) എന്ന വീരപദവി നൽകി ആദരിച്ച സ്വഹാബി ആരാണ്?",
    options: [
      "Khalid ibn al-Walid (റ)",
      "Hamzah ibn Abdul Muttalib (റ)",
      "Sa'd ibn Abi Waqqas (റ)",
      "Ali ibn Abi Talib (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Khalid ibn al-Walid (RA) earned the title 'The Sword of Allah' due to his unmatched military genius.",
    explanationMl: "ഖാലിദ് ബിൻ വലീദ് (റ) ആണ് 'സൈഫുല്ലാഹ്' (അല്ലാഹുവിന്റെ വാൾ) എന്ന് പ്രവാചകനാൽ വിശേഷിപ്പിക്കപ്പെട്ടത്.",
    points: 10
  },
  {
    id: "hq_4",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Hard",
    questionEn: "During the reign of which Caliph was the Holy Quran compiled into a single standard written Mushaf and copies distributed to Islamic provinces?",
    questionMl: "ഏത് ഖലീഫയുടെ ഭരണകാലത്താണ് വിശുദ്ധ ഖുർആൻ ഒരൊറ്റ ഔദ്യോഗിക മുസ്ഹഫായി ക്രോഡീകരിച്ച് വിവിധ പ്രവിശ്യകളിലേക്ക് എത്തിച്ചത്?",
    options: [
      "Uthman ibn Affan (റ)",
      "Abu Bakr as-Siddiq (റ)",
      "Umar ibn al-Khattab (റ)",
      "Ali ibn Abi Talib (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Uthman ibn Affan (RA) unified the recitation upon the standard Quraishi dialect, earning the title 'Jami' al-Quran'.",
    explanationMl: "ഉസ്മാൻ (റ) ആണ് എല്ലാ മുസ്ലിംകൾക്കുമായി ഖുർആൻ ഏകീകൃത മുസ്ഹഫായി പകർത്തിയെഴുതി പ്രചരിപ്പിച്ചത്.",
    points: 10
  },
  {
    id: "hq_5",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Medium",
    questionEn: "Which Sahabi proposed the brilliant military strategy of digging a trench (Khandaq) around Madinah during the Battle of the Ahzab?",
    questionMl: "ഖൻദഖ് യുദ്ധവേളയിൽ മദീനക്ക് ചുറ്റും കിടങ്ങ് (ഖൻദഖ്) കുഴിക്കാൻ ബുദ്ധിപരമായ ഉപദേശം നൽകിയ സ്വഹാബി ആര്?",
    options: [
      "Salman al-Farsi (റ)",
      "Abu Dharr al-Ghifari (റ)",
      "Ammar ibn Yasir (റ)",
      "Miqdad ibn Amr (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Salman al-Farsi (RA) suggested the Persian technique of trench warfare which protected Madinah.",
    explanationMl: "പേർഷ്യക്കാരനായ സൽമാനുൽ ഫാരിസി (റ) ആണ് കിടങ്ങ് കുഴിച്ച് ശത്രുക്കളെ പ്രതിരോധിക്കാൻ നിർദ്ദേശിച്ചത്.",
    points: 10
  },
  {
    id: "hq_6",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Hard",
    questionEn: "Who was the first martyr (Shaheeda) in Islam, who sacrificed her life standing firm upon Tawheed in Makkah?",
    questionMl: "ഇസ്ലാമിലെ പ്രഥമ രക്തസാക്ഷി (ശഹീദ) ആയ വനിത ആരാണ്?",
    options: [
      "Sumayyah bint Khayyat (റ)",
      "Umm Ayman (റ)",
      "Asma bint Abi Bakr (റ)",
      "Khawlah bint Azwar (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyidatuna Sumayyah bint Khayyat (RA), mother of Ammar (RA), was the first martyr of Islam.",
    explanationMl: "അമ്മാറിന്റെ മാതാവായ സുമയ്യ ബിൻത് ഖയ്യാത്ത് (റ) ആണ് സത്യവിശ്വാസത്തിനായി ജീവൻ ത്യജിച്ച ആദ്യത്തെ ശഹീദ.",
    points: 10
  },
  {
    id: "hq_7",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Medium",
    questionEn: "In which Islamic year did the decisive Battle of Badr (Ghazwat Badr al-Kubra) take place on the 17th of Ramadan?",
    questionMl: "റമളാൻ 17-ന് നടന്ന ചരിത്രപ്രസിദ്ധമായ ബദ്ർ യുദ്ധം ഹിജ്റ എത്രാം വർഷത്തിലായിരുന്നു?",
    options: [
      "2 AH (ഹിജ്റ 2)",
      "1 AH (ഹിജ്റ 1)",
      "3 AH (ഹിജ്റ 3)",
      "5 AH (ഹിജ്റ 5)"
    ],
    correctIndex: 0,
    explanationEn: "The Battle of Badr took place on Friday, 17th Ramadan, 2 AH (624 CE), where 313 Sahaba gained victory.",
    explanationMl: "ഹിജ്റ രണ്ടാം വർഷം റമളാൻ 17-നാണ് 313 ശുഹദാക്കളടങ്ങിയ ബദ്ർ പോരാട്ടം നടന്നത്.",
    points: 10
  },
  {
    id: "hq_8",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Easy",
    questionEn: "Which beloved wife of the Prophet ﷺ was known as 'Umm al-Mu'mineen' who was his first wife and supported him through the initial revelations?",
    questionMl: "ആദ്യമായി ഇസ്ലാം സ്വീകരിക്കുകയും പ്രവാചകത്വത്തിന്റെ ആദ്യഘട്ടത്തിൽ താങ്ങായി നിലകൊള്ളുകയും ചെയ്ത നബി ﷺ-യുടെ പ്രഥമ പത്നി ആര്?",
    options: [
      "Khadijah bint Khuwaylid (റ)",
      "Aisha bint Abi Bakr (റ)",
      "Hafsa bint Umar (റ)",
      "Zaynab bint Khuzaymah (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyidatuna Khadijah (RA) comforted the Prophet ﷺ, believed in him first, and spent all her wealth for Islam.",
    explanationMl: "ഖദീജത്തുൽ കുബ്റാ (റ) ആണ് നബി ﷺ-യിൽ ആദ്യമായി വിശ്വസിക്കുകയും സർവ്വസ്വവും ഇസ്ലാമിനായി ത്യജിക്കുകയും ചെയ്ത പ്രഥമ പത്നി.",
    points: 10
  },
  {
    id: "hq_9",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Hard",
    questionEn: "Which companion was titled 'Dhun-Noorayn' (Possessor of Two Lights) because he married two daughters of the Prophet ﷺ?",
    questionMl: "നബി ﷺ-യുടെ രണ്ട് പെൺമക്കളെ വിവാഹം കഴിച്ചതിനാൽ 'ദുന്നൂറൈൻ' (രണ്ട് പ്രകാശങ്ങളുടെ ഉടമ) എന്നറിയപ്പെട്ട സ്വഹാബി ആര്?",
    options: [
      "Uthman ibn Affan (റ)",
      "Ali ibn Abi Talib (റ)",
      "Abdur Rahman ibn Awf (റ)",
      "Talhah ibn Ubaydullah (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Uthman (RA) married Sayyidatuna Ruqayyah and, after her demise, Sayyidatuna Umm Kulthum (RA).",
    explanationMl: "നബി ﷺ-യുടെ മക്കളായ റുഖിയ്യ (റ), പിന്നീട് ഉമ്മുകുൽസൂം (റ) എന്നിവരെ വിവാഹം ചെയ്ത ഉസ്മാൻ (റ) ആണ് ദുന്നൂറൈൻ.",
    points: 10
  },
  {
    id: "hq_10",
    round: "r3",
    roundName: "Sahaba & Islamic History",
    roundNameMl: "സ്വഹാബത്തും ഇസ്ലാമിക ചരിത്രവും",
    category: "Sahaba & History",
    difficulty: "Medium",
    questionEn: "Who was the uncle of the Prophet ﷺ known as the 'Lion of Allah' (Asadullah) who was martyred in the Battle of Uhud?",
    questionMl: "'അസദുല്ലാഹ്' (അല്ലാഹുവിന്റെ സിംഹം) എന്നറിയപ്പെടുകയും ഉഹ്ദ് യുദ്ധത്തിൽ രക്തസാക്ഷിയാവുകയും ചെയ്ത നബി ﷺ-യുടെ പിതൃവ്യൻ ആര്?",
    options: [
      "Hamzah ibn Abdul Muttalib (റ)",
      "Abbas ibn Abdul Muttalib (റ)",
      "Abu Talib",
      "Ja'far ibn Abi Talib (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyiduna Hamzah (RA) was called 'Asadullah' and 'Sayyid al-Shuhada' (Master of Martyrs).",
    explanationMl: "ഹംസ (റ) ആണ് 'സയ്യിദുശ്ശുഹദാഅ്' എന്നും അല്ലാഹുവിന്റെ സിംഹം എന്നും അറിയപ്പെട്ട ധീരനായ സ്വഹാബി.",
    points: 10
  },

  // ================= ROUND 4: ISLAMIC KNOWLEDGE & ETHICS (ഇസ്ലാമിക വിജ്ഞാനം) =================
  {
    id: "kq_1",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Easy",
    questionEn: "How many mandatory (Fard) daily prayers (Salah) are ordained upon every adult Muslim?",
    questionMl: "ഓരോ മുസ്ലിമിനും ദിവസവും നിർബന്ധമാക്കപ്പെട്ട (ഫർള്) നമസ്കാരങ്ങൾ എത്രയാണ്?",
    options: [
      "5 Times (5 തവണ)",
      "3 Times (3 തവണ)",
      "7 Times (7 തവണ)",
      "4 Times (4 തവണ)"
    ],
    correctIndex: 0,
    explanationEn: "The five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) were ordained during Isra' and Mi'raj.",
    explanationMl: "സുബ്ഹി, ളുഹ്ർ, അസ്വർ, മഗ്‌രിബ്, ഇശാഅ് എന്നീ അഞ്ച് നേരത്തെ നമസ്കാരം ഇസ്ലാമിന്റെ പ്രധാന തൂണാണ്.",
    points: 10
  },
  {
    id: "kq_2",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Easy",
    questionEn: "What is the third pillar of Islam that purifies wealth and aids the poor and needy?",
    questionMl: "സമ്പത്ത് ശുദ്ധീകരിക്കാനും അഗതികളെ സഹായിക്കാനുമായി ഇസ്ലാം കൽപ്പിച്ച മൂന്നാമത്തെ നിർബന്ധ കാര്യമേത്?",
    options: [
      "Zakah (സകാത്ത്)",
      "Sawm / Fasting (നോമ്പ്)",
      "Hajj (ഹജ്ജ്)",
      "Sadaqah (സ്വദഖ)"
    ],
    correctIndex: 0,
    explanationEn: "Zakah is an obligatory pillar of Islam paid on surplus wealth exceeding Nisab.",
    explanationMl: "നിശ്ചിത നിസ്വാബുള്ള സമ്പത്തിൽ നിന്ന് പാവങ്ങൾക്ക് നൽകുന്ന നിർബന്ധ ദാനമാണ് സകാത്ത്.",
    points: 10
  },
  {
    id: "kq_3",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Medium",
    questionEn: "What are the names of the two angels who question every deceased soul in the grave (Barzakh)?",
    questionMl: "ഖബറിലെ ചോദ്യം ചെയ്യലിനായി നിയോഗിക്കപ്പെട്ട രണ്ട് മലക്കുകൾ ആരാണ്?",
    options: [
      "Munkar and Nakeer (മുൻകറും നകീറും)",
      "Jibreel and Mika'eel (ജിബ്‌രീലും മീഖാഈലും)",
      "Raqeeb and Ateed (റഖീബും അതീദും)",
      "Malik and Ridwan (മാലിക്കും രിള്‌വാനും)"
    ],
    correctIndex: 0,
    explanationEn: "Munkar and Nakeer question every soul in the grave about their Lord, Prophet, and Religion.",
    explanationMl: "ഖബറിൽ റബ്ബ്, നബി, ദീൻ എന്നിവയെക്കുറിച്ച് ചോദിക്കാൻ വരുന്ന മലക്കുകളാണ് മുൻകറും നകീറും.",
    points: 10
  },
  {
    id: "kq_4",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Medium",
    questionEn: "Which sacred month marks the beginning (first month) of the Islamic Hijri Lunar Calendar?",
    questionMl: "ഇസ്ലാമിക ഹിജ്റ കലണ്ടറിലെ പ്രഥമ (ഒന്നാമത്തെ) മാസം ഏതാണ്?",
    options: [
      "Muharram (മുഹറം)",
      "Rabi' al-Awwal (റബീഉൽ അവ്വൽ)",
      "Ramadan (റമളാൻ)",
      "Dhul Hijjah (ദുൽഹിജ്ജ)"
    ],
    correctIndex: 0,
    explanationEn: "Muharram is the first month of the Islamic calendar and one of the four sacred months (Al-Ashhur al-Hurum).",
    explanationMl: "വിശുദ്ധ നാല് മാസങ്ങളിൽ പെട്ട ഒന്നായ മുഹറം മാസമാണ് ഹിജ്റ വർഷത്തിന്റെ തുടക്കം.",
    points: 10
  },
  {
    id: "kq_5",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Hard",
    questionEn: "Which major Imam is the author of the most authentic collection of prophetic traditions (Sahih al-Bukhari)?",
    questionMl: "ഹദീഥ് ഗ്രന്ഥങ്ങളിൽ ഏറ്റവും ആധികാരികമായ 'സ്വഹീഹുൽ ബുഖാരി' രചിച്ച മഹാനായ ഇമാം ആര്?",
    options: [
      "Imam Muhammad ibn Ismail al-Bukhari (ഇമാം ബുഖാരി)",
      "Imam Muslim ibn al-Hajjaj (ഇമാം മുസ്ലിം)",
      "Imam Abu Hanifa (ഇമാം അബൂഹനീഫ)",
      "Imam Shafi'i (ഇമാം ശാഫിഇ)"
    ],
    correctIndex: 0,
    explanationEn: "Imam Muhammad ibn Ismail al-Bukhari compiled the revered Sahih al-Bukhari with meticulous verification.",
    explanationMl: "മുഹമ്മദ് ഇബ്നു ഇസ്മാഈൽ അൽ ബുഖാരി (റ) ആണ് സ്വഹീഹുൽ ബുഖാരി ക്രോഡീകരിച്ചത്.",
    points: 10
  },
  {
    id: "kq_6",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Hard",
    questionEn: "What is the term used in Islamic ethics for the continuous charity that benefits a person even after death?",
    questionMl: "മരണശേഷവും മനുഷ്യന് പ്രതിഫലം ലഭിച്ചുകൊണ്ടിരിക്കുന്ന നിലക്കാത്ത പുണ്യദാനത്തിന് എന്ത് പറയുന്നു?",
    options: [
      "Sadaqah Jariyah (സ്വദഖത്തുൻ ജാരിയഃ)",
      "Zakat al-Fitr (സകാത്തുൽ ഫിത്വർ)",
      "Kaffarah (കഫാറത്ത്)",
      "Fidya (ഫിദ്‌യ)"
    ],
    correctIndex: 0,
    explanationEn: "Sadaqah Jariyah is continuous flowing charity (e.g. water wells, beneficial knowledge, mosques).",
    explanationMl: "മരണശേഷവും നിലക്കാത്ത പ്രതിഫലം നൽകുന്ന പുണ്യദാനമാണ് സ്വദഖത്തുൻ ജാരിയഃ.",
    points: 10
  },
  {
    id: "kq_7",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Easy",
    questionEn: "Which angel is tasked by Almighty Allah with blowing the Trumpet (Soor) on the Day of Judgment?",
    questionMl: "അന്ത്യനാളിൽ കാഹളം (സൂർ) ഊതാൻ അല്ലാഹു ചുമതലപ്പെടുത്തിയ മലക്ക് ആരാണ്?",
    options: [
      "Israfeel (അ) (ഇസ്റാഫീൽ)",
      "Izraeel / Malak al-Mawt (അ) (ഇസ്റാഈൽ)",
      "Mika'eel (അ) (മീഖാഈൽ)",
      "Jibreel (അ) (ജിബ്‌രീൽ)"
    ],
    correctIndex: 0,
    explanationEn: "Angel Israfeel (AS) will blow the Trumpet to signal the end of the world and the resurrection of humanity.",
    explanationMl: "അന്ത്യനാളിലും പുനരുത്ഥാന വേളയിലും കാഹളത്തിൽ ഊതുന്നത് ഇസ്റാഫീൽ (അ) ആണ്.",
    points: 10
  },
  {
    id: "kq_8",
    round: "r4",
    roundName: "Islamic Knowledge & Ethics",
    roundNameMl: "ഇസ്ലാമിക വിജ്ഞാനം & കർമ്മശാസ്ത്രം",
    category: "Fiqh & Ethics",
    difficulty: "Medium",
    questionEn: "What is the sacred well in Makkah that miraculously gushed forth for Sayyidatuna Hajar (AS) and baby Ismail (AS)?",
    questionMl: "ഹാജറ ബീവിക്കും ഇസ്മാഈൽ നബിക്കും വേണ്ടി മക്കയിൽ അത്ഭുതകരമായി ഉറവ പൊട്ടിയ പുണ്യതീർത്ഥം ഏത്?",
    options: [
      "Zamzam (സംസം കിണർ)",
      "Kawthar (കൗഥർ)",
      "Salsabeel (സൽസബീൽ)",
      "Tasneem (തസ്നീം)"
    ],
    correctIndex: 0,
    explanationEn: "The blessed well of Zamzam located adjacent to the Ka'bah has provided pure water for thousands of years.",
    explanationMl: "കഅ്ബയുടെ അടുത്ത് സ്ഥിതി ചെയ്യുന്ന സംസം ജലം ലോകത്തെ ഏറ്റവും അനുഗ്രഹീതമായ തീർത്ഥമാണ്.",
    points: 10
  },

  // ================= ROUND 5: RAPID FIRE / PUBLIC AUDIENCE SPECIAL (പബ്ലിക് ഓഡിയൻസ് റൗണ്ട്) =================
  {
    id: "pq_1",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Easy",
    questionEn: "In which Arabic month do Muslims celebrate the blessed birth of Prophet Muhammad ﷺ (Meelad-un-Nabi)?",
    questionMl: "മുസ്ലിം ലോകം നബിദിനം (മീലാദുന്നബി ﷺ) ആഘോഷിക്കുന്ന പുണ്യമാസം ഏതാണ്?",
    options: [
      "Rabi' al-Awwal (റബീഉൽ അവ്വൽ)",
      "Ramadan (റമളാൻ)",
      "Shawwal (ശവ്വാൽ)",
      "Sha'ban (ശഅ്ബാൻ)"
    ],
    correctIndex: 0,
    explanationEn: "Meelad-un-Nabi is joyously celebrated on 12th Rabi' al-Awwal across the Muslim world.",
    explanationMl: "റബീഉൽ അവ്വൽ 12-നാണ് ലോകമെമ്പാടും പുണ്യ പ്രവാചകരുടെ തിരുപ്പിറവി ആഘോഷിക്കുന്നത്.",
    points: 15
  },
  {
    id: "pq_2",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Easy",
    questionEn: "What was the name of the Prophet's father who passed away before the Prophet ﷺ was born?",
    questionMl: "നബി ﷺ ജനിക്കുന്നതിന് തൊട്ടുമുൻപ് അന്തരിച്ച തിരുനബിയുടെ പിതാവിന്റെ പേരെന്ത്?",
    options: [
      "Abdullah (അബ്ദുല്ലാഹ്)",
      "Abdul Muttalib (അബ്ദുൽ മുത്ത്വലിബ്)",
      "Abu Talib (അബൂ ത്വാലിബ്)",
      "Hashim (ഹാശിം)"
    ],
    correctIndex: 0,
    explanationEn: "Abdullah ibn Abdul Muttalib passed away in Yathrib (Madinah) before the Prophet ﷺ was born.",
    explanationMl: "നബി ﷺ-യുടെ പിതാവ് അബ്ദുല്ലാഹ് നബി ജനിക്കുന്നതിന് മുൻപ് തന്നെ വഫാത്താവുകയാണുണ്ടായത്.",
    points: 15
  },
  {
    id: "pq_3",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Medium",
    questionEn: "Which historic mosque in Madinah was the first mosque built by Prophet Muhammad ﷺ upon his migration?",
    questionMl: "ഹിജ്റ വേളയിൽ നബി ﷺ മദീനയിലെത്തിയപ്പോൾ നിർമ്മിച്ച ഇസ്ലാമിലെ പ്രഥമ മസ്ജിദ് ഏത്?",
    options: [
      "Masjid Quba (മസ്ജിദു ഖുബാ)",
      "Masjid an-Nabawi (മസ്ജിദുന്നബവി)",
      "Masjid al-Qiblatayn (മസ്ജിദുൽ ഖിബ്‌ലതൈൻ)",
      "Masjid al-Aqsa (മസ്ജിദുൽ അഖ്സ്വാ)"
    ],
    correctIndex: 0,
    explanationEn: "Masjid Quba was the very first mosque established in Islam by the Prophet ﷺ.",
    explanationMl: "ഖുബായിൽ വെച്ച് നബി ﷺ സ്ഥാപിച്ച മസ്ജിദു ഖുബാ ആണ് ഇസ്ലാമിലെ ആദ്യത്തെ പള്ളി.",
    points: 15
  },
  {
    id: "pq_4",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Easy",
    questionEn: "Which holy city is the Qibla (direction of prayer) for all Muslims around the globe?",
    questionMl: "ലോകത്തെ മുഴുവൻ മുസ്ലിംകളും നമസ്കാരത്തിൽ തിരിഞ്ഞു നിൽക്കുന്ന പുണ്യ ഖിബ്‌ല ഏത് നഗരത്തിലാണ്?",
    options: [
      "Makkah al-Mukarramah (മക്ക)",
      "Madinah al-Munawwarah (മദീന)",
      "Al-Quds / Jerusalem (ഖുദ്സ്)",
      "Baghdad (ബാഗ്ദാദ്)"
    ],
    correctIndex: 0,
    explanationEn: "The Holy Ka'bah in Makkah al-Mukarramah is the universal Qibla for all Muslims.",
    explanationMl: "പരിശുദ്ധ മക്കയിലെ കഅ്ബാലയമാണ് ലോക മുസ്ലിംകളുടെ നിത്യമായ ഖിബ്‌ല.",
    points: 15
  },
  {
    id: "pq_5",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Medium",
    questionEn: "What is the term for sending prayers and blessings upon Prophet Muhammad ﷺ?",
    questionMl: "പുണ്യ നബി ﷺ-യുടെ പേരിൽ അനുഗ്രഹങ്ങൾ വർഷിക്കാൻ പ്രാർത്ഥിക്കുന്നതിന് എന്ത് പറയുന്നു?",
    options: [
      "Salawat / Durood (സ്വലാത്ത് / ദുറൂദ്)",
      "Tasbeeh (തസ്ബീഹ്)",
      "Tahmeed (തഹ്മീദ്)",
      "Tahleel (തഹ്‌ലീൽ)"
    ],
    correctIndex: 0,
    explanationEn: "Reciting Salawat (Allahumma Salli Ala Sayyidina Muhammad) brings immense rewards and blessings.",
    explanationMl: "നബി ﷺ-യുടെ മേൽ അല്ലാഹുവിന്റെ അനുഗ്രഹങ്ങൾ തേടുന്ന പ്രാർത്ഥനയാണ് സ്വലാത്ത്.",
    points: 15
  },
  {
    id: "pq_6",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Medium",
    questionEn: "Which daughter of Prophet Muhammad ﷺ was known as 'Sayyidatu Nisa' Ahl al-Jannah' (Leader of the Women of Paradise)?",
    questionMl: "സ്വർഗ്ഗത്തിലെ സ്ത്രീകളുടെ നേതാവ് (സയ്യിദത്തു നിസാഇ അഹ്‌ലിൽ ജന്ന) എന്ന് നബി ﷺ വിശേഷിപ്പിച്ച മകൾ ആര്?",
    options: [
      "Sayyidatuna Fatimah az-Zahra (റ)",
      "Sayyidatuna Ruqayyah (റ)",
      "Sayyidatuna Zaynab (റ)",
      "Sayyidatuna Umm Kulthum (റ)"
    ],
    correctIndex: 0,
    explanationEn: "Sayyidatuna Fatimah az-Zahra (RA), mother of Imam Hasan and Imam Husayn, is the leader of women in Jannah.",
    explanationMl: "ഫാത്തിമത്തുസ്സഹ്‌റ (റ) ആണ് സ്വർഗ്ഗത്തിലെ സ്ത്രീകളുടെ നേതാവായി നബി ﷺ വിശേഷിപ്പിച്ച തിരുമകൾ.",
    points: 15
  },
  {
    id: "pq_7",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Hard",
    questionEn: "What is the name of the Prophet's grandfather's lineage which traces back to Prophet Ismail (AS)?",
    questionMl: "ഇസ്മാഈൽ നബിയിലേക്ക് എത്തുന്ന തിരുനബി ﷺ-യുടെ പ്രശസ്തമായ അറബ് കുടുംബ പരമ്പര ഏത്?",
    options: [
      "Quraysh / Adnanite (ഖുറൈശി / അദ്നാൻ പരമ്പര)",
      "Qahtanite (ഖഹ്ത്വാനി)",
      "Himyarite (ഹിംയരി)",
      "Ghassanid (ഗസ്സാനി)"
    ],
    correctIndex: 0,
    explanationEn: "Prophet Muhammad ﷺ belonged to the noble Banu Hashim clan of the Quraysh tribe, descending from Adnan and Prophet Ismail (AS).",
    explanationMl: "ഖുറൈശി ഗോത്രത്തിലെ ബനൂ ഹാശിം കുടുംബത്തിൽ അദ്നാൻ വഴി ഇസ്മാഈൽ നബിയിലേക്ക് എത്തുന്നതാണ് നബിയുടെ പരമ്പര.",
    points: 15
  },
  {
    id: "pq_8",
    round: "r5",
    roundName: "Public Audience & Rapid Fire",
    roundNameMl: "പബ്ലിക് ഓഡിയൻസ് & റാപ്പിഡ് ഫയർ",
    category: "Public Special",
    difficulty: "Easy",
    questionEn: "What greeting do Muslims say to one another to spread peace, mercy, and blessings?",
    questionMl: "പരസ്പരം കാണുമ്പോൾ സമാധാനവും കാരുണ്യവും ആശംസിക്കാൻ മുസ്ലിംകൾ പറയുന്ന അഭിസംബോധന ഏതാണ്?",
    options: [
      "Assalamu Alaikum wa Rahmatullah (അസ്സലാമു അലൈക്കും വറഹ്മത്തുല്ലാഹ്)",
      "Ahlan wa Sahlan (അഹ്‌ലൻ വസഹ്‌ലൻ)",
      "Marhaban (മർഹബൻ)",
      "Shukran Jazeelan (ശുക്റൻ ജസീലാ)"
    ],
    correctIndex: 0,
    explanationEn: "Salam is the universal Islamic greeting wishing divine peace and mercy upon others.",
    explanationMl: "'നിങ്ങൾക്ക് അല്ലാഹുവിന്റെ സമാധാനവും കാരുണ്യവും ഉണ്ടാകട്ടെ' എന്ന ആശംസയാണ് സലാം.",
    points: 15
  }
];

// Helper to get questions from localStorage or fallback to DEFAULT_QUESTIONS
function getStoredQuestions() {
  try {
    const saved = localStorage.getItem("meelad_quiz_questions_v1");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading questions from localStorage:", e);
  }
  return DEFAULT_QUESTIONS;
}

function saveQuestionsToStorage(questions) {
  try {
    localStorage.setItem("meelad_quiz_questions_v1", JSON.stringify(questions));
    return true;
  } catch (e) {
    console.error("Error saving questions to localStorage:", e);
    return false;
  }
}
