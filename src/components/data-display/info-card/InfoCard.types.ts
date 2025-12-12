import type { ReactNode } from 'react';

export type InfoCardProps = {
  className?: string;
  title: string;
  content: Array<{ label: string; value: string | number | ReactNode; tooltip?: boolean }>;
};
