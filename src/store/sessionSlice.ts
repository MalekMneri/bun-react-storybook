import type { WithDevtools } from '.';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface Session {
  user: User;
  status?: 'authenticated' | 'unauthenticated';
}

export interface SessionSlice {
  session: Session | null;
  setSession: (session: Session | null) => void;
  setStatus: (status: 'authenticated' | 'unauthenticated') => void;
}

export const createSessionSlice: WithDevtools<SessionSlice> = (set) => ({
  session: null,
  setSession: (session) => {
    set({ session }, false, 'SET_SESSION');
  },
  setStatus: (status: 'authenticated' | 'unauthenticated') => {
    set(
      (state) => ({
        session: state.session ? { ...state.session, status } : null,
      }),
      false,
      'SET_STATUS',
    );
  },
});
