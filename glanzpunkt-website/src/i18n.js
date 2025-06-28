import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation files
import deTranslation from './locales/de/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  de: {
    translation: deTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de', // German as default language
    lng: 'de', // Set German as the primary language
    debug: false,

    interpolation: {
      escapeValue: false // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

