import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json"
import et from "./i18n/et.json"

const resources = {
  en: {
    translation: en
  },
  et: {
    translation: et
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorage.getItem("keel") || "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;