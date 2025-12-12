import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import type { ThemeSwitcherProps } from './ThemeSwitcher.types';

const ThemeSwitcher = ({ theme, className, size, toggle }: ThemeSwitcherProps) => {
  return (
    <Button
      className={cn('w-9 p-0 transition-all duration-300', className)}
      variant="outline"
      onClick={toggle}
      size={size}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className={cn(size !== 'icon-sm' && 'size-5')} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className={cn(size !== 'icon-sm' && 'size-5')} />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export { ThemeSwitcher };
