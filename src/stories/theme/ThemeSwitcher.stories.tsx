import { ThemeSwitcher } from '@/components/theme';
import type { Theme } from '@/constants';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'theme/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    theme: 'light',
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    theme: 'light',
  },
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

    return (
      <div className="flex flex-col items-center gap-6">
        <ThemeSwitcher
          theme={currentTheme}
          toggle={() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    );
  },
};
