
const langData = {
  he: {
    title: "מלי אבירם - מורה לגיטרה",
    description: "מלמדת גיטרה בשיעורים פרטיים לכל הרמות, עם דגש על הנאה ומקצועיות."
  },
  en: {
    title: "Maly Aviram - Guitar Teacher",
    description: "Teaches private guitar lessons at all levels, focusing on enjoyment and professionalism."
  },
  fr: {
    title: "Maly Aviram - Professeure de guitare",
    description: "Donne des leçons de guitare privées à tous les niveaux, axées sur le plaisir et le professionnalisme."
  }
};

const languageSelect = document.getElementById('languageSelect');
const siteTitle = document.getElementById('siteTitle');
const siteDescription = document.getElementById('siteDescription');

languageSelect.addEventListener('change', () => {
  const selectedLang = languageSelect.value;
  siteTitle.textContent = langData[selectedLang].title;
  siteDescription.textContent = langData[selectedLang].description;
});