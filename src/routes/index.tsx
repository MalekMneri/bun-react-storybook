import { LanguageSelector } from '@/components/navigation';
import { Button } from '@/components/ui';
import { LANGUAGES } from '@/constants';
import { useGlobalStore } from '@/store';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
export const Route = createFileRoute('/')({
  component: () => {
    const theme = useGlobalStore((s) => s.settings.theme);
    const language = useGlobalStore((s) => s.settings.language);
    const setTheme = useGlobalStore((s) => s.setTheme);
    const setLanguage = useGlobalStore((s) => s.setLanguage);
    const { t } = useTranslation();

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return (
      <div className="gap-center bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-12 px-8">
        <Button onClick={toggleTheme}>Switch theme</Button>
        <LanguageSelector currentLanguage={language} onChange={setLanguage} options={LANGUAGES} />
        <div>
          <h1>{t('common:labels.links')}</h1>
          <ul>
            <li>
              <Button variant="link" className="data-[status=active]:text-green-600" asChild>
                <Link to="/" activeProps={{ className: 'font-bold text-primary' }}>
                  Home
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="data-[status=active]:text-green-600" asChild>
                <Link to="/hello" activeProps={{ className: 'font-bold text-primary' }}>
                  Hello
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" className="data-[status=active]:text-green-600" asChild>
                <Link to="/test" activeProps={{ className: 'font-bold text-primary' }}>
                  Test
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  },
});
