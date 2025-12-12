import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { UserInfoProps } from './UserInfo.types';

function UserInfo({
  avatar,
  firstName,
  lastName,
  minimized,
  role,
  className,
}: Readonly<UserInfoProps>) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative size-[50px] p-2">
        <svg
          viewBox="0 0 47 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute start-0 top-0 size-full"
        >
          <path
            d="M1 23.3983C1 11.028 11.0736 1 23.5 1C35.9264 1 46 11.028 46 23.3983C46 28.6886 44.1575 33.5506 41.0765 37.383"
            stroke="var(--foreground)"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M23.4998 46.0214C16.5263 46.0214 10.3085 42.844 6.26571 37.8831"
            stroke="var(--foreground)"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        <Avatar
          className="-mt-px size-full overflow-visible"
          style={{
            boxShadow: '0px 6px 10px 0px #003B2F33',
          }}
        >
          <AvatarImage src={avatar} alt="avatar" className="rounded-full object-cover" />
          <AvatarFallback>{`${firstName} ${lastName}`}</AvatarFallback>
        </Avatar>
      </div>

      {!minimized && (
        <div>
          <h1 className="text-foreground -mb-1 text-start text-base font-bold">{`${firstName} ${lastName}`}</h1>
          <span className="text-muted-foreground text-start text-sm">{role}</span>
        </div>
      )}
    </div>
  );
}

export { UserInfo };
