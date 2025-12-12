import { Breadcrumbs } from '@/components/navigation';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'navigation/Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', to: '/' },
      { label: 'Category', to: '/category' },
      { label: 'Product', to: '/category/product' },
      { label: 'Category', to: '/category/product/category' },
      { label: 'Category details', to: '/category/product/category/id' },
    ],
    maxItems: 3,
  },
};
