import type { Theme } from '@/constants';

export type ThemeSwitcherProps = {
  className?: string;
  theme: Theme;
  toggle?: () => void;
};
