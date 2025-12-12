import { Navbar } from '@/components/navigation';
import type { Meta, StoryObj } from '@storybook/react';
import { HelpCircle, LogOut, Mail, Settings2, User } from 'lucide-react';

const meta = {
  title: 'navigation/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: 'w-[95dvw]',
    dropdownMenuItems: [
      { icon: User, label: 'Profile', href: '/profile' },
      { icon: Settings2, label: 'Settings', href: '/settings' },
      { icon: HelpCircle, label: 'Help & Support', href: '/help' },
      { icon: Mail, label: 'Invite Friends', onClick: () => {} },
      { icon: LogOut, label: 'Logout', onClick: () => {}, destructive: true },
    ],
    userInfoProps: {
      avatar:
        'https://plus.unsplash.com/premium_photo-1720983571850-26fc90a0e9c9?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Administrator',
    },
    breadcrumbsProps: {
      links: [
        { label: 'Home', to: '/' },
        { label: 'Category', to: '/category' },
        { label: 'Product', to: '/category/product' },
        { label: 'Category', to: '/category/product/category' },
        { label: 'Category details', to: '/category/product/category/id' },
      ],
      maxItems: 3,
    },
    themeSwitcherProps: {
      theme: 'light',
    },
    onClickMinimize: () => {},
    languageSelectorProps: {
      currentLanguage: 'en',
      options: [
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
      ],
    },
  },
};
