import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createSettingsSlice, type SettingsSlice } from './settingsSlice';

export const useGlobalStore = create<SettingsSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createSettingsSlice(...a),
      }),
      {
        name: 'globalStore',
      },
    ),
  ),
);

export type WithDevtools<S> = StateCreator<S, [['zustand/devtools', never]], [], S>;
