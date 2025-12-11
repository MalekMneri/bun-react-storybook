import { useGlobalStore } from '@/store';

useGlobalStore.subscribe((state) => {
  const theme = state.settings.theme;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

const initialTheme = useGlobalStore.getState().settings.theme;
if (initialTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
