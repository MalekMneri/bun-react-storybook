import { Button } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { LoaderCircle, Search } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const,
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'] as const,
    },
    disabled: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic variants showcase
export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Learn more',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Search',
    children: <Search />,
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <LoaderCircle className="mr-2 -ml-1 size-4 animate-spin" />
        Processing...
      </>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        Deploy
      </>
    ),
  },
};

// asChild / Slot usage (great for Next.js Link, etc.)
export const AsChild: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `asChild` to compose the button with another component (e.g. Next.js `<Link>`).',
      },
    },
  },
  args: {
    asChild: true,
    children: <a href="https://x.ai">Visit xAI</a>,
  },
  render: (args) => <Button {...args} />,
};

// Full variant matrix (great for visual regression testing)
export const AllVariants: Story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const).map(
        (variant) => (
          <div key={variant} className="flex flex-wrap items-center gap-4">
            <span className="w-24 text-sm font-medium capitalize">{variant}</span>
            <Button variant={variant} size="sm">
              Small
            </Button>
            <Button variant={variant}>Default</Button>
            <Button variant={variant} size="lg">
              Large
            </Button>
            <Button variant={variant} size="icon" aria-label={variant}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </div>
        ),
      )}
    </div>
  ),
};
