const langData = {
    he: {
        title: "מלי אבירם - שיעורי גיטרה מהלב",
        headerTitle: "מלי אבירם",
        headerTagline: "הדרך שלך אל הגיטרה מתחילה כאן",
        aboutHeading: "ברוכים הבאים לעולם המוזיקה",
        aboutText: "שמי מלי אבירם, ואני מזמינה אתכם למסע מוזיקלי מרתק. כמורה לגיטרה עם ניסיון של שנים, אני מאמינה שכל אחד יכול ללמוד לנגן - בקצב שלו, בדרך שלו, ועם הסגנון שמדבר אליו.",
        lessonsHeading: "על השיעורים",
        lessonsBeginnerTitle: "למתחילים",
        lessonsBeginnerDesc: "צעדים ראשונים בעולם הגיטרה, לימוד אקורדים בסיסיים, וקריאת טאבים.",
        lessonsAdvancedTitle: "למתקדמים",
        lessonsAdvancedDesc: "טכניקות מתקדמות, סולואים, ואלתור בסגנונות שונים.",
        lessonsTheoryTitle: "תיאוריה מוזיקלית",
        lessonsTheoryDesc: "הבנת מבנה המוזיקה, סולמות, והרמוניה בסיסית.",
        methodHeading: "שיטת הלימוד",
        methodItem1: "התאמה אישית לקצב ולסגנון של כל תלמיד",
        methodItem2: "דגש על הנאה ויצירתיות לצד למידה מובנית",
        methodItem3: "שילוב של תיאוריה ופרקטיקה",
        methodItem4: "עבודה על שירים שאתם אוהבים",
        contactHeading: "יצירת קשר",
        contactPhone: "טלפון: 050-1234567",
        contactEmail: "מייל: mali@example.com",
        contactAddress: "כתובת: רחוב המוזיקה 1, תל אביב",
        footerText: "© 2024 מלי אבירם - שיעורי גיטרה"
    },
    en: {
        title: "Maly Aviram - Guitar Lessons from the Heart",
        headerTitle: "Maly Aviram",
        headerTagline: "Your path to guitar starts here",
        aboutHeading: "Welcome to the World of Music",
        aboutText: "My name is Maly Aviram, and I invite you to an exciting musical journey. As a guitar teacher with years of experience, I believe everyone can learn to play - at their own pace, in their own way, and with the style that speaks to them.",
        lessonsHeading: "About the Lessons",
        lessonsBeginnerTitle: "For Beginners",
        lessonsBeginnerDesc: "First steps in the world of guitar, learning basic chords, and reading tabs.",
        lessonsAdvancedTitle: "For Advanced Players",
        lessonsAdvancedDesc: "Advanced techniques, solos, and improvisation in different styles.",
        lessonsTheoryTitle: "Music Theory",
        lessonsTheoryDesc: "Understanding music structure, scales, and basic harmony.",
        methodHeading: "Teaching Method",
        methodItem1: "Personalized adaptation to each student's pace and style",
        methodItem2: "Emphasis on enjoyment and creativity alongside structured learning",
        methodItem3: "Integration of theory and practice",
        methodItem4: "Working on songs that you love",
        contactHeading: "Contact Us",
        contactPhone: "Phone: 050-1234567",
        contactEmail: "Email: mali@example.com",
        contactAddress: "Address: Music Street 1, Tel Aviv",
        footerText: "© 2024 Maly Aviram - Guitar Lessons"
    },
    fr: {
      title: "Maly Aviram - Cours de Guitare du Cœur",
      headerTitle: "Maly Aviram",
      headerTagline: "Votre chemin vers la guitare commence ici",
        aboutHeading: "Bienvenue dans le monde de la musique",
        aboutText: "Je m'appelle Maly Aviram, et je vous invite à un voyage musical passionnant. En tant que professeur de guitare avec des années d'expérience, je crois que tout le monde peut apprendre à jouer - à son propre rythme, à sa manière et avec le style qui lui parle.",
        lessonsHeading: "À propos des cours",
        lessonsBeginnerTitle: "Pour débutants",
        lessonsBeginnerDesc: "Premiers pas dans le monde de la guitare, apprentissage des accords de base et lecture de tablatures.",
        lessonsAdvancedTitle: "Pour les joueurs avancés",
        lessonsAdvancedDesc: "Techniques avancées, solos et improvisation dans différents styles.",
        lessonsTheoryTitle: "Théorie musicale",
        lessonsTheoryDesc: "Compréhension de la structure musicale, des gammes et de l'harmonie de base.",
        methodHeading: "Méthode d'enseignement",
        methodItem1: "Adaptation personnalisée au rythme et au style de chaque élève",
        methodItem2: "Accent sur le plaisir et la créativité en plus d'un apprentissage structuré",
        methodItem3: "Intégration de la théorie et de la pratique",
        methodItem4: "Travail sur des chansons que vous aimez",
        contactHeading: "Nous contacter",
        contactPhone: "Téléphone: 050-1234567",
        contactEmail: "Email: mali@example.com",
         contactAddress: "Adresse: Rue de la Musique 1, Tel Aviv",
        footerText: "© 2024 Maly Aviram - Cours de Guitare"
    }
};

const languageSelect = document.getElementById('languageSelect');
const i18nElements = document.querySelectorAll('[data-i18n]');

function updateContent(lang) {
  i18nElements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[lang] && langData[lang][key]) {
        element.textContent = langData[lang][key];
         // Handle RTL if needed.
        if(lang === 'he' && element.parentElement.dir !== 'rtl')
          element.parentElement.dir = 'rtl';
        else if(lang !== 'he' && element.parentElement.dir !== 'ltr')
            element.parentElement.dir = 'ltr';
    }
  });
    document.documentElement.lang = lang;

}

languageSelect.addEventListener('change', () => {
    const selectedLang = languageSelect.value;
    updateContent(selectedLang);

});

// Set initial language based on user's preference
const initialLang = navigator.language.split('-')[0] || 'en'; //default to 'en'

updateContent(initialLang);
languageSelect.value = initialLang;