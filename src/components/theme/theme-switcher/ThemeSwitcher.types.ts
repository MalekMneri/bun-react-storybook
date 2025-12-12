import type { Theme } from '@/constants';

export type ThemeSwitcherProps = {
  className?: string;
  theme: Theme;
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg' | null;
  toggle?: () => void;
};
