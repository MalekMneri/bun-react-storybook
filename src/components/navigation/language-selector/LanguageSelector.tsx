import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Languages } from 'lucide-react';
import type { FC } from 'react';
import type { LanguageSelectorProps } from './LanguageSelector.types';

const LanguageSelector: FC<LanguageSelectorProps> = ({
  options,
  className,
  currentLanguage,
  onChange,
}) => {
  const selectedOption = options.find((opt) => opt.code === currentLanguage);

  return (
    <Select onValueChange={onChange} defaultValue={currentLanguage}>
      <SelectTrigger className={cn(className)}>
        {selectedOption ? (
          <div className="flex items-center gap-2">
            <img
              src={selectedOption.flag}
              alt={`${selectedOption.label} flag`}
              className="h-5 w-5 object-contain"
            />
            <span>{selectedOption.code.toUpperCase()}</span>
          </div>
        ) : (
          <span className="text-muted-foreground">
            <Languages />
          </span>
        )}
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem key={item.code} value={item.code}>
            <div className="flex items-center gap-3">
              <img src={item.flag} alt={`${item.label} flag`} className="h-5 w-5 object-contain" />
              <span className="font-medium">{item.code.toUpperCase()}</span>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { LanguageSelector };
