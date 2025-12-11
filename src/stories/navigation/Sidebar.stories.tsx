import { Sidebar } from '@/components/navigation';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ActivitySquare,
  Bell,
  Calendar,
  ChartAreaIcon,
  ChartBarIncreasingIcon,
  CreditCard,
  FileSearch,
  FileText,
  FolderKanban,
  HeartHandshake,
  HelpCircle,
  Image,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Plug,
  Settings,
  Shield,
  Sparkles,
  ThumbsUp,
  Users,
} from 'lucide-react';

const meta = {
  title: 'navigation/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    translation: {
      logOut: 'Logout',
    },
    links: [
      {
        href: '/dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
      },
      { href: '/tasks', label: 'Tasks', icon: ChartBarIncreasingIcon },
      { href: '/calendar', label: 'Calendar', icon: Calendar },
      { href: '/analytics', label: 'Analytics', icon: ChartAreaIcon },
      { href: '/projects', label: 'Projects', icon: FolderKanban },
      { href: '/inbox', label: 'Inbox', icon: Mail },
      {
        groupName: 'Team & Collaboration',
        items: [
          { href: '/team', label: 'Team Members', icon: Users },
          { href: '/discussions', label: 'Discussions', icon: MessageSquare },
          { href: '/activity', label: 'Activity Feed', icon: ActivitySquare },
          { href: '/notifications', label: 'Notifications', icon: Bell },
        ],
      },
      {
        groupName: 'Content & Assets',
        items: [
          { href: '/files', label: 'Files & Documents', icon: FileText },
          { href: '/media', label: 'Media Library', icon: Image },
          { href: '/templates', label: 'Templates', icon: LayoutTemplate },
        ],
      },
      {
        groupName: 'Administration',
        items: [
          { href: '/settings', label: 'Settings', icon: Settings },
          { href: '/billing', label: 'Billing & Plans', icon: CreditCard },
          { href: '/security', label: 'Security', icon: Shield },
          { href: '/integrations', label: 'Integrations', icon: Plug },
          { href: '/logs', label: 'Audit Logs', icon: FileSearch },
        ],
      },
      {
        groupName: 'Support',
        items: [
          { href: '/help', label: 'Help Center', icon: HelpCircle },
          { href: '/feedback', label: 'Send Feedback', icon: ThumbsUp },
          { href: '/changelog', label: 'What’s New', icon: Sparkles },
          { href: '/status', label: 'System Status', icon: HeartHandshake },
        ],
      },
    ],
    open: true,
    userInfoProps: {
      firstName: 'Jane',
      lastName: 'Doe',
      role: 'Super duper Admin',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    logo: '/logo.png',
    logoMinimized: '/logo-small.png',
    className: 'h-[90dvh]',
  },
};
