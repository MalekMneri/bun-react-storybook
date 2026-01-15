import { LanguageSelector } from '@/components/navigation';
import { Button } from '@/components/ui';
import { LANGUAGES } from '@/constants';
import { useGlobalStore } from '@/store';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/_app/')({
  component: DashboardPage,
});

function DashboardPage() {
  const theme = useGlobalStore((s) => s.settings.theme);
  const language = useGlobalStore((s) => s.settings.language);
  const setLanguage = useGlobalStore((s) => s.setLanguage);
  const setTheme = useGlobalStore((s) => s.setTheme);
  const { t } = useTranslation();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your pet store management dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Sample Cards could go here */}
      </div>

      <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <h2 className="mb-4 text-xl font-semibold">Settings Quick Access</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={toggleTheme} variant="outline">
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Language:</span>
            <LanguageSelector
              currentLanguage={language}
              onChange={setLanguage}
              options={LANGUAGES}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">{t('common:labels.links')}</h3>
        <ul className="list-inside list-disc">
          <li>
            <Link
              to="/"
              className="text-primary hover:underline"
              activeProps={{ className: 'font-bold' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-primary hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
