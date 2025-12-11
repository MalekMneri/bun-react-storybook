// .storybook/preview.tsx
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { useEffect } from 'react';
import { createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import '../src/index.css';

// ------------------------------------------------------------------
// 1. TanStack Router decorator (v1: uses defaultComponent for Stories)
// ------------------------------------------------------------------

// Minimal root route (required, but we override rendering with defaultComponent)
const rootRoute = createRootRoute({});

// Single router instance (avoids type redeclaration issues)
const storybookRouter = createRouter({
  routeTree: rootRoute.addChildren([]), // Empty children — defaultComponent handles rendering
  defaultPreload: false,
  // This injects the Story as the "default" component to render
  defaultComponent: () => null, // Placeholder; overridden per-story below
});

// Single type declaration (prevents "subsequent property" errors)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof storybookRouter;
  }
}

// Decorator: Override defaultComponent with the actual Story
const withTanStackRouter = (Story: React.FC) => {
  // Recreate router with Story as defaultComponent (type-safe)
  const routerWithStory = createRouter({
    routeTree: rootRoute.addChildren([]),
    defaultPreload: false,
    defaultComponent: Story, // ← This renders your Story inside the router context
  });

  return <RouterProvider router={routerWithStory} />;
};

// ------------------------------------------------------------------
// 2. Theme sync decorator (applies dark class to <html> inside the iframe)
// ------------------------------------------------------------------
const withThemeSync = (Story: any, context: any) => {
  const theme = context.globals.theme || 'light';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <Story />;
};

// ------------------------------------------------------------------
// 3. Optional: make stories scrollable / full-height
// ------------------------------------------------------------------
const withScrollableStory = (Story: any) => (
  <div className="min-h-screen">
    <Story />
  </div>
);

// ------------------------------------------------------------------
// Preview configuration
// ------------------------------------------------------------------
const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
    },
  },

  decorators: [
    withScrollableStory,
    withTanStackRouter,
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body',
    }),
    withThemeSync,
  ],
};

export default preview;
