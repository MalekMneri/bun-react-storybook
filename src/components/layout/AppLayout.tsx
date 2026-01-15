import { Sidebar, Navbar } from '@/components/navigation';
import { useGlobalStore } from '@/store';
import { useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Bell,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme, language } = useGlobalStore((s) => s.settings);
  const setTheme = useGlobalStore((s) => s.setTheme);
  const setLanguage = useGlobalStore((s) => s.setLanguage);
  const session = useGlobalStore((s) => s.session);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const links = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/team', label: 'Team', icon: Users },
    {
      groupName: 'System',
      items: [
        { href: '/settings', label: 'Settings', icon: Settings },
        { href: '/notifications', label: 'Notifications', icon: Bell },
      ],
    },
    {
      groupName: 'Support',
      items: [
        { href: '/feedback', label: 'Feedback', icon: MessageSquare },
        { href: '/changelog', label: 'What’s New', icon: Sparkles },
      ],
    },
  ];

  const userInfo = {
    firstName: session?.user?.name?.split(' ')[0] || 'Jane',
    lastName: session?.user?.name?.split(' ')[1] || 'Doe',
    role: session?.user?.role || 'Super duper Admin',
    avatar:
      session?.user?.avatar ||
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const languageSelectorProps = {
    currentLanguage: language,
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
    onChange: setLanguage,
  };

  return (
    <div className="bg-background flex h-screen w-full overflow-hidden">
      <Sidebar
        open={isSidebarOpen}
        toggle={(val) => setIsSidebarOpen(!!val)}
        links={links}
        logo="images/logo.png"
        logoMinimized="images/logo-small.png"
        userInfoProps={userInfo}
        translation={{ logOut: 'Logout' }}
        onLogout={() => console.log('Logout')}
        className="h-full border-r"
      />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        <Navbar
          userInfoProps={userInfo}
          themeSwitcherProps={{
            theme,
            toggle: toggleTheme,
            size: 'icon',
          }}
          languageSelectorProps={languageSelectorProps}
          dropdownMenuItems={[
            { label: 'Profile', icon: Users, href: '/profile' },
            { label: 'Settings', icon: Settings, href: '/settings' },
            {
              label: 'Logout',
              icon: LogOut,
              onClick: () => console.log('Logout'),
              destructive: true,
            },
          ]}
          onClickMinimize={toggleSidebar}
          className="m-2 lg:m-4"
        />

        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
