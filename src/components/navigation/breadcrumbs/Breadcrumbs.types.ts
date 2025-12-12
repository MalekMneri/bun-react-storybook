import type { ToOptions } from '@tanstack/react-router';

export interface BreadcrumbLink {
  label: string;
  to?: string;
  params?: ToOptions['params'];
  search?: ToOptions['search'];
}

export interface BreadcrumbsProps {
  links: BreadcrumbLink[];
  className?: string;
  maxItems?: number;
}
