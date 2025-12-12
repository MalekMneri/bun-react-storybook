import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbsProps } from './Breadcrumbs.types';

const Breadcrumbs = ({ links, className, maxItems = 4 }: BreadcrumbsProps) => {
  if (!links || links.length === 0) return null;

  const shouldTruncate = links.length > maxItems;

  const visibleLinks = shouldTruncate
    ? [links[0]!, { label: '...', disabled: true } as const, ...links.slice(-2)]
    : links;

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {visibleLinks.map((link, index) => {
          const isLast = index === visibleLinks.length - 1;
          const isEllipsis = 'disabled' in link;

          if (isEllipsis) {
            return (
              <BreadcrumbItem key="ellipsis">
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
            );
          }

          return (
            <BreadcrumbItem key={index + 1}>
              {link.to && !isLast ? (
                <BreadcrumbLink asChild>
                  <Link
                    // @ts-ignore
                    to={link.to}
                    params={link.params}
                    search={link.search}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <span className={cn('text-foreground', isLast && 'font-medium')}>{link.label}</span>
              )}

              {!isLast && <ChevronRight className="text-muted-foreground mx-1 h-4 w-4" />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { Breadcrumbs };
