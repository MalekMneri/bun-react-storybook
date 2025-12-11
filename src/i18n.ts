import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from '@/locales/en';
import { fr } from '@/locales/fr';

const resources = {
  en,
  fr,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],

  defaultNS: 'common',
  ns: ['common', 'users'],

  interpolation: {
    escapeValue: false,
  },

  detection: {
    order: ['localStorage', 'cookie', 'htmlTag'],
    caches: ['localStorage', 'cookie'],
  },
});

export default i18n;
