import type { UserInfoProps } from '@/components/data-display';
import type { ThemeSwitcherProps } from '@/components/theme';
import type { BreadcrumbsProps } from '../breadcrumbs';
import type { LanguageSelectorProps } from '../language-selector';

export type NavbarProps = {
  className?: string;
  breadcrumbsProps?: BreadcrumbsProps;
  userInfoProps: UserInfoProps;
  themeSwitcherProps?: ThemeSwitcherProps;
  languageSelectorProps?: LanguageSelectorProps;
  dropdownMenuItems: Array<DropdownMenuItemType>;
  onClickMinimize?: () => void;
};

type DropdownMenuItemType = {
  label: string;
  icon: any;

  href?: string;
  onClick?: () => void;
  destructive?: boolean;
};
