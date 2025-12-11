import i18n from '@/i18n';
import { useGlobalStore } from '@/store';

useGlobalStore.subscribe((state) => {
  const language = state.settings.language;

  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }
});
