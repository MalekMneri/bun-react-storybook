import { LanguageSelector } from '@/components/navigation';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const options = [
  { code: 'en', label: 'English', flag: 'https://www.worldometers.info/img/flags/uk-flag.gif' },
  {
    code: 'fr',
    label: 'Français',
    flag: 'https://www.worldometers.info/img/flags/fr-flag.gif',
  },
  { code: 'ar', label: 'العربية', flag: 'https://www.worldometers.info/img/flags/sa-flag.gif' },
];

const meta = {
  title: 'navigation/LanguageSelector',
  component: LanguageSelector,
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    options,
  },
  render: () => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="text-muted-foreground text-sm">
          Current language: <span className="font-bold">{currentLanguage.toUpperCase()}</span>
        </div>

        <LanguageSelector
          currentLanguage={currentLanguage}
          onChange={setCurrentLanguage}
          options={options}
        />
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    options,
  },
};
