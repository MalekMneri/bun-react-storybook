import { UserInfo } from '@/components/data-display';
import { ThemeSwitcher } from '@/components/theme';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { ChevronDown, TextAlignStart } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import { Breadcrumbs } from '../breadcrumbs';
import { LanguageSelector } from '../language-selector';
import type { NavbarProps } from './Navbar.types';

const Navbar = ({
  className,
  userInfoProps,
  themeSwitcherProps,
  languageSelectorProps,
  breadcrumbsProps,
  dropdownMenuItems,
  onClickMinimize,
}: NavbarProps) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  //   render
  const renderMenuItems = () => {
    return dropdownMenuItems.map((item, index) => {
      const isLink = 'href' in item;
      const Icon = item.icon;

      const buttonContent = (
        <>
          <Icon />
          <span>{item.label}</span>
        </>
      );

      return (
        <Button
          key={index + 1}
          size="sm"
          className={cn(
            'justify-start',
            item.destructive &&
              'text-destructive dark:hover:bg-destructive/20 hover:text-destructive hover:bg-destructive/5',
          )}
          variant="ghost"
          asChild={isLink}
          onClick={item.onClick}
        >
          {isLink ? <Link to={item.href}>{buttonContent}</Link> : buttonContent}
        </Button>
      );
    });
  };

  return (
    <nav
      className={cn(
        'bg-background dark:border-border flex items-center justify-between rounded-lg border border-transparent p-2 shadow-lg lg:p-4',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {onClickMinimize && (
          <Button
            className="text-muted-foreground"
            variant="ghost"
            size={isLargeScreen ? 'icon' : 'icon-sm'}
            onClick={onClickMinimize}
          >
            <TextAlignStart />
          </Button>
        )}
        {breadcrumbsProps && <Breadcrumbs {...breadcrumbsProps} className="hidden lg:block" />}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          {themeSwitcherProps && (
            <ThemeSwitcher {...themeSwitcherProps} size={isLargeScreen ? 'icon' : 'icon-sm'} />
          )}
          {languageSelectorProps && (
            <LanguageSelector {...languageSelectorProps} size={isLargeScreen ? 'default' : 'sm'} />
          )}
        </div>
        <div className="flex items-center gap-2">
          <UserInfo {...userInfoProps} minimized={!isLargeScreen} />
          <Popover>
            <PopoverTrigger asChild className="group">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <ChevronDown className="transition duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              sideOffset={16}
              align="end"
              className="flex w-50 flex-col overflow-hidden p-2"
            >
              {renderMenuItems()}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
