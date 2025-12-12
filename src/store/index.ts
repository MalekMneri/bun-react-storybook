import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createSessionSlice, type SessionSlice } from './sessionSlice';
import { createSettingsSlice, type SettingsSlice } from './settingsSlice';

export const useGlobalStore = create<SettingsSlice & SessionSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createSettingsSlice(...a),
        ...createSessionSlice(...a),
      }),
      {
        name: 'globalStore',
      },
    ),
  ),
);

export type WithDevtools<S> = StateCreator<S, [['zustand/devtools', never]], [], S>;
