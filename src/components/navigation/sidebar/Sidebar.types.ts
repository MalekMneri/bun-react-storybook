import type { UserInfoProps } from '@/components/data-display';

export type SidebarProps = {
  className?: string;
  logo: string;
  logoMinimized: string;
  links: Array<SidebarItem | SidebarGroup>;
  open?: boolean;
  userInfoProps?: UserInfoProps;
  translation: {
    logOut: string;
  };
  toggle?: (open: boolean) => void;
  onLogout?: () => void;
};

export type SidebarItem = {
  label: string;
  href: string;
  icon: any;
};
export type SidebarGroup = {
  groupName: string;
  items: Array<SidebarItem>;
};
