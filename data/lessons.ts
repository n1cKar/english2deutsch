export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string;
  resources?: { title: string; url: string }[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and other common greetings in German.",
    content: `
In German, greetings vary by time of day and formality.
Here are some common greetings:

- Hallo! (Hello!)
- Guten Morgen! (Good morning!)
- Guten Tag! (Good day!)
- Guten Abend! (Good evening!)
- Tschüss! (Bye - informal)
- Auf Wiedersehen! (Goodbye - formal)

Practice saying these aloud. Notice how “Guten” means “good” and changes based on time of day.
    `,
    resources: [
      { title: "German Greetings - YouTube", url: "https://www.youtube.com/watch?v=TxJb1Yt38K4" },
      { title: "German Greetings & Farewells - ThoughtCo", url: "https://www.thoughtco.com/german-greetings-4076465" }
    ]
  },
  {
    id: 2,
    title: "Numbers 1-20",
    description: "Understand numbers from 1 to 20 and how to use them in everyday situations.",
    content: `
Here are German numbers from 1 to 20 with pronunciation tips:

1 - eins (ines)  
2 - zwei (tsvai)  
3 - drei (dry)  
4 - vier (feer)  
5 - fünf (fuunf)  
6 - sechs (zeks)  
7 - sieben (zeeben)  
8 - acht (acht)  
9 - neun (noyn)  
10 - zehn (tsehn)

11 - elf  
12 - zwölf (tsvölf)  
13 - dreizehn  
14 - vierzehn  
15 - fünfzehn  
16 - sechzehn  
17 - siebzehn  
18 - achtzehn  
19 - neunzehn  
20 - zwanzig

Tip: Numbers 13-19 end with "-zehn" like "ten." Practice counting aloud.
    `,
    resources: [
      { title: "Learn German Numbers 1-20 - GermanPod101", url: "https://www.germanpod101.com/german-numbers/" },
      { title: "German Numbers 1-20 - YouTube", url: "https://www.youtube.com/watch?v=6dDRDy0L-dY" }
    ]
  },
  {
    id: 3,
    title: "Days of the Week",
    description: "Learn the days of the week and how to use them in sentences.",
    content: `
Learn the days of the week in German:

- Montag (Monday)  
- Dienstag (Tuesday)  
- Mittwoch (Wednesday)  
- Donnerstag (Thursday)  
- Freitag (Friday)  
- Samstag (Saturday)  
- Sonntag (Sunday)

Note: Days of the week are masculine and usually capitalized. They are often used with “am” for “on” (e.g., am Montag = on Monday).
    `,
    resources: [
      { title: "Days of the Week in German - Duolingo Blog", url: "https://blog.duolingo.com/days-of-the-week-in-german/" },
      { title: "German Days of the Week - YouTube", url: "https://www.youtube.com/watch?v=ryW_Yz0m87k" }
    ]
  },
  {
    id: 4,
    title: "Months and Seasons",
    description: "Get familiar with months of the year and seasons in German.",
    content: `
Months in German:

- Januar (January)  
- Februar (February)  
- März (March)  
- April (April)  
- Mai (May)  
- Juni (June)  
- Juli (July)  
- August (August)  
- September (September)  
- Oktober (October)  
- November (November)  
- Dezember (December)

Seasons:

- Frühling (Spring)  
- Sommer (Summer)  
- Herbst (Autumn)  
- Winter (Winter)
    `,
    resources: [
      { title: "German Months and Seasons - Digital Dialects", url: "https://www.digitaldialects.com/German/Months.htm" },
      { title: "Learn German: Months and Seasons - YouTube", url: "https://www.youtube.com/watch?v=UZZlRWjJuUc" }
    ]
  },
  {
    id: 5,
    title: "Introducing Yourself",
    description: "Practice phrases to introduce yourself and ask others about their name and origin.",
    content: `
Common phrases to introduce yourself:

- Ich heiße... (My name is...)  
- Wie heißt du? (What is your name?)  
- Ich komme aus... (I come from...)  
- Woher kommst du? (Where do you come from?)  
- Freut mich, dich kennenzulernen! (Nice to meet you!)

Practice these phrases aloud to get comfortable with introductions.
    `,
    resources: [
      { title: "Introducing Yourself in German - GermanPod101", url: "https://www.germanpod101.com/lesson-library/introducing-yourself/" },
      { title: "How to Introduce Yourself in German - YouTube", url: "https://www.youtube.com/watch?v=8lS9_EzBlPc" }
    ]
  },
  {
    id: 6,
    title: "Common Questions",
    description: "Learn how to ask and answer basic questions in German.",
    content: `
Useful question words:

- Wer? (Who?)  
- Was? (What?)  
- Wo? (Where?)  
- Wann? (When?)  
- Warum? (Why?)  
- Wie? (How?)

Example questions:

- Wo wohnst du? (Where do you live?)  
- Was machst du? (What are you doing?)  
- Wann kommst du? (When are you coming?)

Practice forming your own questions.
    `,
    resources: [
      { title: "German Question Words - ThoughtCo", url: "https://www.thoughtco.com/german-question-words-4068413" },
      { title: "Basic German Questions - YouTube", url: "https://www.youtube.com/watch?v=28C_Jn9Svvk" }
    ]
  },
  {
    id: 7,
    title: "Family Vocabulary",
    description: "Learn words for family members and how to talk about your family.",
    content: `
Family members in German:

- Mutter (Mother)  
- Vater (Father)  
- Bruder (Brother)  
- Schwester (Sister)  
- Sohn (Son)  
- Tochter (Daughter)  
- Großmutter (Grandmother)  
- Großvater (Grandfather)

Example:  
Meine Mutter heißt Anna. (My mother's name is Anna.)
    `,
    resources: [
      { title: "Family Vocabulary in German - Digital Dialects", url: "https://www.digitaldialects.com/German/Family.htm" },
      { title: "German Family Words - YouTube", url: "https://www.youtube.com/watch?v=6_dJzftfGjQ" }
    ]
  },
  {
    id: 8,
    title: "Colors",
    description: "Learn the names of common colors in German.",
    content: `
Basic colors:

- Rot (Red)  
- Blau (Blue)  
- Grün (Green)  
- Gelb (Yellow)  
- Schwarz (Black)  
- Weiß (White)  
- Grau (Gray)  
- Braun (Brown)

Use colors to describe objects:  
Das Auto ist rot. (The car is red.)
    `,
    resources: [
      { title: "Colors in German - GermanPod101", url: "https://www.germanpod101.com/german-colors/" },
      { title: "German Colors - YouTube", url: "https://www.youtube.com/watch?v=zqvtCYcvq3g" }
    ]
  },
  {
    id: 9,
    title: "Food and Drinks",
    description: "Common vocabulary for food and drinks in German.",
    content: `
Food and drinks:

- Brot (Bread)  
- Käse (Cheese)  
- Wasser (Water)  
- Kaffee (Coffee)  
- Tee (Tea)  
- Apfel (Apple)  
- Milch (Milk)

Example sentence:  
Ich trinke Kaffee. (I drink coffee.)
    `,
    resources: [
      { title: "German Food Vocabulary - FluentU", url: "https://www.fluentu.com/blog/german/german-food-vocabulary/" },
      { title: "German Food Words - YouTube", url: "https://www.youtube.com/watch?v=rgXELr-79vg" }
    ]
  },
  {
    id: 10,
    title: "Basic Verbs",
    description: "Learn some important German verbs and how to conjugate them in present tense.",
    content: `
Common verbs:

- sein (to be): ich bin, du bist, er/sie/es ist  
- haben (to have): ich habe, du hast, er/sie/es hat  
- gehen (to go): ich gehe, du gehst, er/sie/es geht  
- machen (to do/make): ich mache, du machst, er/sie/es macht

Practice conjugating these verbs in simple sentences.
    `,
    resources: [
      { title: "German Verbs for Beginners - ThoughtCo", url: "https://www.thoughtco.com/basic-german-verbs-4068431" },
      { title: "Common German Verbs - YouTube", url: "https://www.youtube.com/watch?v=Vkj6S-Ro6qs" }
    ]
  },
  {
    id: 11,
    title: "Basic Sentence Structure",
    description: "Understand how to build simple sentences in German.",
    content: `
German sentences usually follow Subject-Verb-Object order:

- Ich sehe den Hund. (I see the dog.)  
- Du liest ein Buch. (You are reading a book.)  
- Er isst einen Apfel. (He is eating an apple.)

Note: The verb is always the second element in main clauses.
    `,
    resources: [
      { title: "German Sentence Structure Basics - ThoughtCo", url: "https://www.thoughtco.com/german-sentence-structure-4068373" },
      { title: "Basic German Sentences - YouTube", url: "https://www.youtube.com/watch?v=SCccgi5RmSo" }
    ]
  },
  {
    id: 12,
    title: "Articles and Gender",
    description: "Learn about definite and indefinite articles and German noun genders.",
    content: `
German nouns have genders: masculine, feminine, neuter.

Definite articles (the):  
- der (masc.)  
- die (fem.)  
- das (neut.)

Indefinite articles (a/an):  
- ein (masc., neut.)  
- eine (fem.)

Example:  
Der Hund (the dog), die Katze (the cat), das Haus (the house)
    `,
    resources: [
      { title: "German Articles and Gender Explained - GermanPod101", url: "https://www.germanpod101.com/german-articles/" },
      { title: "Noun Gender in German - YouTube", url: "https://www.youtube.com/watch?v=4YrVnLyrPzQ" }
    ]
  },
  {
    id: 13,
    title: "Personal Pronouns",
    description: "Learn German personal pronouns used for people.",
    content: `
Personal pronouns:

- ich (I)  
- du (you - informal)  
- er (he)  
- sie (she)  
- es (it)  
- wir (we)  
- ihr (you all - informal)  
- sie (they)  
- Sie (you - formal)

Example:  
Ich bin müde. (I am tired.)
    `,
    resources: [
      { title: "German Personal Pronouns - ThoughtCo", url: "https://www.thoughtco.com/german-personal-pronouns-4068434" },
      { title: "Personal Pronouns in German - YouTube", url: "https://www.youtube.com/watch?v=EknHj2HYzzg" }
    ]
  },
  {
    id: 14,
    title: "Possessive Pronouns",
    description: "Learn how to say 'my', 'your', 'his', etc., in German.",
    content: `
Possessive pronouns:

- mein (my)  
- dein (your - informal)  
- sein (his)  
- ihr (her)  
- unser (our)  
- euer (your - plural informal)  
- ihr/Ihr (their/your formal)

Example:  
Das ist mein Buch. (That is my book.)
    `,
    resources: [
      { title: "German Possessive Pronouns - GermanPod101", url: "https://www.germanpod101.com/german-possessive-pronouns/" },
      { title: "Possessive Pronouns in German - YouTube", url: "https://www.youtube.com/watch?v=dZQyEz6Ujl4" }
    ]
  },
  {
    id: 15,
    title: "Common Prepositions",
    description: "Basic prepositions and their usage in German sentences.",
    content: `
Common prepositions:

- in (in)  
- auf (on)  
- unter (under)  
- neben (next to)  
- vor (in front of)  
- hinter (behind)  
- mit (with)  
- ohne (without)

Example:  
Das Buch liegt auf dem Tisch. (The book is on the table.)
    `,
    resources: [
      { title: "German Prepositions Overview - ThoughtCo", url: "https://www.thoughtco.com/german-prepositions-4068376" },
      { title: "Learn German Prepositions - YouTube", url: "https://www.youtube.com/watch?v=BLV1eQ9nTjc" }
    ]
  },
  {
    id: 16,
    title: "Time and Date",
    description: "Learn how to tell time and talk about dates in German.",
    content: `
Telling time:

- Wie spät ist es? (What time is it?)  
- Es ist drei Uhr. (It is three o'clock.)  
- halb vier (half past three)  
- Viertel nach drei (quarter past three)

Talking about dates:  
- Heute ist der erste Januar. (Today is the first of January.)
    `,
    resources: [
      { title: "Telling Time in German - GermanPod101", url: "https://www.germanpod101.com/lesson-library/telling-time/" },
      { title: "German Dates and Time - YouTube", url: "https://www.youtube.com/watch?v=3T3rnjEaCbQ" }
    ]
  },
  {
    id: 17,
    title: "Directions and Locations",
    description: "Phrases to ask for and give directions.",
    content: `
Useful phrases:

- Wo ist...? (Where is...?)  
- Gehen Sie geradeaus. (Go straight ahead.)  
- Biegen Sie links ab. (Turn left.)  
- Biegen Sie rechts ab. (Turn right.)  
- Es ist neben dem Supermarkt. (It is next to the supermarket.)
    `,
    resources: [
      { title: "Asking for Directions in German - ThoughtCo", url: "https://www.thoughtco.com/german-directions-4068401" },
      { title: "Giving Directions in German - YouTube", url: "https://www.youtube.com/watch?v=2TVhkdiySPE" }
    ]
  },
  {
    id: 18,
    title: "Shopping Vocabulary",
    description: "Learn common words and phrases for shopping in German.",
    content: `
Shopping terms:

- Wie viel kostet das? (How much does this cost?)  
- Ich möchte das kaufen. (I want to buy this.)  
- Die Kasse (checkout)  
- Rabatt (discount)  
- Öffnungszeiten (opening hours)

Practice conversations for buying goods.
    `,
    resources: [
      { title: "Shopping Vocabulary in German - FluentU", url: "https://www.fluentu.com/blog/german/german-shopping-vocabulary/" },
      { title: "Shopping in German - YouTube", url: "https://www.youtube.com/watch?v=Ov2aTiZQ8BY" }
    ]
  },
  {
    id: 19,
    title: "Ordering Food and Drinks",
    description: "Phrases and vocabulary for ordering in restaurants and cafes.",
    content: `
Useful phrases:

- Ich hätte gern... (I would like...)  
- Die Speisekarte, bitte. (The menu, please.)  
- Zahlen, bitte! (The check, please!)  
- Ein Glas Wasser (a glass of water)  
- Ohne Eis (without ice)

Practice polite ordering.
    `,
    resources: [
      { title: "Ordering Food in German - GermanPod101", url: "https://www.germanpod101.com/lesson-library/order-food/" },
      { title: "German Restaurant Phrases - YouTube", url: "https://www.youtube.com/watch?v=5gGsXH9fLvI" }
    ]
  },
  {
    id: 20,
    title: "Talking About Weather",
    description: "Learn how to describe the weather in German.",
    content: `
Weather vocabulary:

- Es ist sonnig. (It is sunny.)  
- Es regnet. (It is raining.)  
- Es ist kalt. (It is cold.)  
- Es schneit. (It is snowing.)  
- Das Wetter ist schön. (The weather is nice.)

Use these to describe the day.
    `,
    resources: [
      { title: "Weather Vocabulary in German - ThoughtCo", url: "https://www.thoughtco.com/weather-vocabulary-in-german-4076456" },
      { title: "German Weather Phrases - YouTube", url: "https://www.youtube.com/watch?v=xm7DHt15H9c" }
    ]
  },
  {
    id: 21,
    title: "Hobbies and Interests",
    description: "Talk about hobbies and free time activities in German.",
    content: `
Common hobbies:

- Lesen (reading)  
- Schwimmen (swimming)  
- Tanzen (dancing)  
- Reisen (traveling)  
- Musik hören (listening to music)

Example:  
Ich lese gern Bücher. (I like reading books.)
    `,
    resources: [
      { title: "Hobbies Vocabulary in German - FluentU", url: "https://www.fluentu.com/blog/german/german-hobbies-vocabulary/" },
      { title: "German Hobbies and Interests - YouTube", url: "https://www.youtube.com/watch?v=8TCx5TOOE80" }
    ]
  },
  {
    id: 22,
    title: "Jobs and Professions",
    description: "Vocabulary related to jobs and talking about professions.",
    content: `
Common jobs:

- Lehrer (teacher)  
- Arzt (doctor)  
- Ingenieur (engineer)  
- Verkäufer (salesperson)  
- Student (student)

Example:  
Ich bin Ingenieur. (I am an engineer.)
    `,
    resources: [
      { title: "Jobs Vocabulary in German - ThoughtCo", url: "https://www.thoughtco.com/german-professions-vocabulary-4076451" },
      { title: "German Jobs and Professions - YouTube", url: "https://www.youtube.com/watch?v=ZcK8z0rsOy4" }
    ]
  },
  {
    id: 23,
    title: "Travel and Transportation",
    description: "Words and phrases for traveling and using public transport.",
    content: `
Travel vocabulary:

- Zug (train)  
- Bus (bus)  
- Flughafen (airport)  
- Fahrkarte (ticket)  
- Abfahrt (departure)

Example:  
Wo ist der Bahnhof? (Where is the train station?)
    `,
    resources: [
      { title: "Travel Vocabulary in German - GermanPod101", url: "https://www.germanpod101.com/german-travel-phrases/" },
      { title: "German Travel Phrases - YouTube", url: "https://www.youtube.com/watch?v=AxzK8-K_QBo" }
    ]
  },
  {
    id: 24,
    title: "At the Hotel",
    description: "Useful phrases for checking in and staying at hotels.",
    content: `
Hotel phrases:

- Ich habe eine Reservierung. (I have a reservation.)  
- Wo ist mein Zimmer? (Where is my room?)  
- Gibt es WLAN? (Is there Wi-Fi?)  
- Können Sie mir helfen? (Can you help me?)

Practice polite communication.
    `,
    resources: [
      { title: "Hotel Vocabulary in German - FluentU", url: "https://www.fluentu.com/blog/german/german-hotel-vocabulary/" },
      { title: "German Hotel Phrases - YouTube", url: "https://www.youtube.com/watch?v=9rQjZwl9Y3o" }
    ]
  },
  {
    id: 25,
    title: "Health and Emergencies",
    description: "Basic vocabulary and phrases for health and emergencies.",
    content: `
Important phrases:

- Mir ist schlecht. (I feel sick.)  
- Ich brauche einen Arzt. (I need a doctor.)  
- Rufen Sie die Polizei! (Call the police!)  
- Wo ist die Apotheke? (Where is the pharmacy?)

Be prepared for emergency situations.
    `,
    resources: [
      { title: "Health & Emergency German Phrases - GermanPod101", url: "https://www.germanpod101.com/german-health-phrases/" },
      { title: "Emergency German Phrases - YouTube", url: "https://www.youtube.com/watch?v=7fQ5qpjXTI8" }
    ]
  }
];

