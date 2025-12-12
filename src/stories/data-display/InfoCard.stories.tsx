import { InfoCard } from '@/components/data-display';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'data-display/InfoCard',
  component: InfoCard,
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Experiment Details',
    className: 'lg:w-80 w-[250px]',
    content: [
      {
        label: 'Updated by',
        value: 'Jane Remover',
      },
      {
        label: 'Updated on',
        value: '2025-12-10 14:32 UTC',
      },
      {
        label: 'Factor',
        value: 2,
      },
      {
        label: 'Version',
        value: '2.2.5',
      },
      {
        label: 'Experiment Name',
        value: '0_01-test-version24',
      },
      {
        label: 'Status',
        value: (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            Active
          </span>
        ),
      },
      {
        label: '0312Pps2',
        tooltip: true,
        value: (
          <div className="flex flex-col gap-0.5 text-sm">
            <p>Donec ullamcorper porttitor ornare.</p>
            <p>Fusce varius lacinia nunc, id vehicula arcu volutpat ac.</p>
            <p className="text-secondary">
              Nulla facilisi. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        ),
      },
      {
        label: 'Target Audience',
        value: 'US • 18–34 • Mobile Only',
      },
      {
        label: 'Confidence Level',
        value: '98.7%',
      },
      {
        label: 'Uplift (Expected)',
        value: '+12.4%',
      },
      {
        label: 'Start Date',
        value: '2025-11-28',
      },
      {
        label: 'End Date',
        value: '2026-01-15 (estimated)',
      },
      {
        label: 'Variants',
        value: 'Control + Treatment A + Treatment B',
      },
      {
        label: 'Primary Metric Tracked',
        tooltip: true,
        value: (
          <div className="space-y-1 text-sm">
            <p>• Primary: Conversion Rate</p>
            <p>• Secondary: Avg. Order Value, Click-Through Rate</p>
            <p>• Guardrail: Bounce Rate, Page Load Time</p>
          </div>
        ),
      },
      {
        label: 'Tags',
        value: (
          <div className="flex flex-wrap justify-end gap-1">
            <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
              checkout-flow
            </span>
            <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-800">
              pricing-test
            </span>
            <span className="rounded bg-amber-100 px-2 py-1 text-xs text-amber-800">
              high-impact
            </span>
          </div>
        ),
      },
    ],
  },
};
