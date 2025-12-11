export type LanguageSelectorProps = {
  className?: string;
  options: Array<LanguageOption>;
  currentLanguage?: string;
  onChange?: (code: string) => void;
};

export type LanguageOption = {
  code: string; // e.g. "en", "fr", "de"
  label: string; // e.g. "English", "Français"
  flag: string; // e.g. "https://www.worldometers.info/img/flags/uk-flag.gif"
};
