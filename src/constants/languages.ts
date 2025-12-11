export const LANGUAGES = [
  {
    code: 'en',
    label: 'English',
    flag: 'https://www.worldometers.info/img/flags/uk-flag.gif',
  },
  {
    code: 'fr',
    label: 'Français',
    flag: 'https://www.worldometers.info/img/flags/fr-flag.gif',
  },
  {
    code: 'ar',
    label: 'العربية',
    flag: 'https://www.worldometers.info/img/flags/sa-flag.gif',
  },
];

export type LanguageCode = (typeof LANGUAGES)[number]['code'];
