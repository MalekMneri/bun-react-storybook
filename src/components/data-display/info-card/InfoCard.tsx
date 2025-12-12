import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { ChevronDownSquare, Info } from 'lucide-react';
import type { InfoCardProps } from './InfoCard.types';

const InfoCard = ({ content, title, className }: InfoCardProps) => {
  // render
  const renderContent = () => {
    return content.map((item, index) => {
      const isTooltip = 'tooltip' in item;
      const isReactNode = typeof item.value !== 'string' && typeof item.value !== 'number';

      const valueNode = isReactNode ? (
        item.value
      ) : (
        <span className="text-muted-foreground text-end">{item.value}</span>
      );

      return (
        <div
          key={index + 1}
          className={cn(
            'flex justify-between gap-2',
            index !== 0 && 'border-t-border/30 dark:border-t-border/80 border-t pt-3',
          )}
        >
          <span className="text-card-foreground text-sm font-semibold">{item.label}</span>
          {isTooltip ? (
            <Tooltip>
              <TooltipTrigger>
                <Info className="text-primary size-5" />
              </TooltipTrigger>
              <TooltipContent>
                {isReactNode ? item.value : <span className="text-end">{item.value}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            valueNode
          )}
        </div>
      );
    });
  };

  return (
    <div className={cn('rounded-sm bg-neutral-100 p-4 dark:bg-neutral-800', className)}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={title} className="flex flex-col gap-4">
          <AccordionTrigger className="text-primary p-0 hover:no-underline [&_.chevron-icon]:hidden">
            <h1 className="text-base">{title}</h1>
            <ChevronDownSquare className="size-5" />
          </AccordionTrigger>
          <AccordionContent className="bg-card flex flex-col gap-3 rounded-sm p-3">
            {renderContent()}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { InfoCard };
