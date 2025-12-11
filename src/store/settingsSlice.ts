import { type Theme } from '@/constants';
import type { WithDevtools } from '.';

interface Settings {
  theme: Theme;
  language: string;
}

export interface SettingsSlice {
  settings: Settings;
  setSettings: (state: Settings) => void;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: string) => void;
}
export const createSettingsSlice: WithDevtools<SettingsSlice> = (set, get) => ({
  settings: {
    theme: 'light',
    language: 'en',
  },
  setSettings: (state) => {
    set({ settings: state }, false, 'SET_SETTINGS');
  },
  setTheme: (theme) => {
    set(
      {
        settings: { ...get().settings, theme },
      },
      false,
      'SET_THEME',
    );
  },

  setLanguage: (language) => {
    set(
      {
        settings: { ...get().settings, language },
      },
      false,
      'SET_LANGUAGE',
    );
  },
});
