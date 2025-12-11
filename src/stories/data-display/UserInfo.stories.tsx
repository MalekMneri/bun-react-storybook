import { UserInfo } from '@/components/data-display';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'data-display/UserInfo',
  component: UserInfo,
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'Super duper Admin',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};
