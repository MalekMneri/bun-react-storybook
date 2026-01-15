import { UserInfo } from '@/components/data-display';
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { LogOut } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import type { SidebarGroup, SidebarItem, SidebarProps } from './Sidebar.types';

function Sidebar({
  links,
  open,
  logo,
  className,
  logoMinimized,
  userInfoProps,
  translation,
  toggle,
  onLogout,
}: Readonly<SidebarProps>) {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  // render
  const renderLinks = (items: Array<SidebarItem | SidebarGroup>) => {
    return items.map((item, index) => {
      const isGroup = 'groupName' in item;

      if (isGroup) {
        return (
          <div key={`group-${index + 1}`} className="flex flex-col gap-2">
            {open ? (
              <h2 className="text-muted-foreground px-3 text-xs font-medium tracking-wider uppercase">
                {item.groupName}
              </h2>
            ) : (
              <div className="bg-border/50 mx-3 h-px" />
            )}
            <div className="flex flex-col gap-1">{renderLinks(item.items)}</div>
          </div>
        );
      }

      const Icon = item.icon;

      const linkContent = (
        <>
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span
            title={item.label}
            className={cn('line-clamp-1 truncate', open ? 'block' : 'hidden')}
          >
            {item.label}
          </span>
        </>
      );

      const button = (
        <Button
          variant="ghost"
          className={cn(
            'h-10 w-full justify-start gap-3 px-3',
            'hover:bg-accent hover:text-accent-foreground',
            !open && 'justify-center px-0',
          )}
          asChild
        >
          <Link to={item.href} activeProps={{ className: 'bg-accent text-accent-foreground' }}>
            {linkContent}
          </Link>
        </Button>
      );

      if (!open) {
        return (
          <Tooltip key={item.href || index}>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-3">
              {item.label}
            </TooltipContent>
          </Tooltip>
        );
      }

      return <div key={item.href || index}>{button}</div>;
    });
  };

  const renderLinksMobile = (items: Array<SidebarItem | SidebarGroup>) => {
    return items.map((item, index) => {
      const isGroup = 'groupName' in item;

      if (isGroup) {
        return (
          <div key={`mobile-group-${index + 1}`} className="col-span-12 flex flex-col gap-3">
            <h2 className="text-muted-foreground px-1 text-xs font-semibold tracking-wider uppercase">
              {item.groupName}
            </h2>
            <div className="grid grid-cols-12 gap-2">{renderLinksMobile(item.items)}</div>
          </div>
        );
      }

      const Icon = item.icon;
      return (
        <Button
          key={item.href || index}
          variant="ghost"
          className="hover:bg-accent hover:text-accent-foreground col-span-12 h-12 w-full justify-start gap-4 text-base sm:col-span-6"
          asChild
        >
          <Link
            to={item.href}
            activeProps={{ className: 'bg-accent text-accent-foreground font-medium' }}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span title={item.label} className="line-clamp-1 truncate">
              {item.label}
            </span>
          </Link>
        </Button>
      );
    });
  };

  if (isLargeScreen) {
    return (
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            'bg-background dark:border-border flex flex-col justify-between gap-6 rounded-lg border border-transparent shadow-lg',
            open ? 'w-64' : 'w-21',
            className,
          )}
          data-state={open ? 'open' : 'collapsed'}
        >
          <div className="mt-5 flex items-center justify-between gap-3 p-4">
            <img alt="logo" src={logo} className={cn('h-auto w-full', open ? 'block' : 'hidden')} />
            <img
              alt="logo"
              src={logoMinimized}
              className={cn('h-auto w-full', open ? 'hidden' : 'block')}
            />
          </div>

          <div className="scrollbar-thin scrollbar-thumb scrollbar-track-transparent scrollbar-thumb-accent flex flex-1 flex-col gap-2 overflow-auto p-2">
            {renderLinks(links)}
          </div>

          <div className="flex w-full flex-col gap-3 p-2">
            {userInfoProps && (
              <Tooltip>
                <TooltipTrigger>
                  <UserInfo {...userInfoProps} className="px-2" minimized={!open} />
                </TooltipTrigger>
                {!open && (
                  <TooltipContent side="right">
                    <div>
                      <h1 className="-mb-1 text-base font-bold">{`${userInfoProps.firstName} ${userInfoProps.lastName}`}</h1>
                      <span className="text-sm">{userInfoProps.role}</span>
                    </div>
                  </TooltipContent>
                )}
              </Tooltip>
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={onLogout}
                  className="dark:border-border justify-center border border-transparent shadow-xs"
                >
                  <LogOut className="h-4 w-4 shrink-0" />
                  {open && <span>{translation.logOut}</span>}
                </Button>
              </TooltipTrigger>
              {!open && <TooltipContent side="right">{translation.logOut}</TooltipContent>}
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    );
  }

  return (
    <Sheet open={open} onOpenChange={toggle}>
      <SheetContent side="top" className="h-dvh">
        <SheetHeader>
          <SheetTitle>
            <img alt="logo" src={logo} className={cn('h-auto max-w-[80%] sm:max-w-[400px]')} />
          </SheetTitle>
          <SheetDescription className="sr-only">sidebar</SheetDescription>
        </SheetHeader>
        <div className="scrollbar-thin scrollbar-thumb scrollbar-track-transparent scrollbar-thumb-accent flex-1 overflow-y-auto p-4">
          <div className="flex h-full flex-col justify-between gap-3">
            <div className="grid grid-cols-12 gap-2">{renderLinksMobile(links)}</div>
            <div className="border-border/50 flex flex-col gap-4 border-t py-4">
              {userInfoProps && <UserInfo {...userInfoProps} className="px-3" minimized={false} />}
              <Button
                variant="outline"
                size="lg"
                onClick={onLogout}
                className="w-full justify-start gap-4"
              >
                <LogOut className="h-5 w-5 shrink-0" />
                <span className="text-base">{translation.logOut}</span>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { Sidebar };
