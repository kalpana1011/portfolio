import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import sv from "./sv.json";

const STORAGE_KEY = "portfolio.language";

const getStoredLanguage = () => {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "sv") {
    return stored;
  }

  const browserLanguage = navigator.language?.toLowerCase() ?? "en";
  return browserLanguage.startsWith("sv") ? "sv" : "en";
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sv: { translation: sv },
  },
  lng: getStoredLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

i18n.on("languageChanged", (language) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, language);
  }
});

export default i18n;
