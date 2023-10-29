import cn from 'clsx';
import { ComponentProps } from 'react';

import { Icon } from '../icon';
import { Label } from '../typography/label';

export interface LinkProps {
  /**
   * variant of the link
   */
  variant: 'profile' | 'time' | 'location' | 'calendar' | 'link';
  /**
   * Text to show
   */
  text: string;
  /**
   * Optional disable icon
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => ComponentProps<'button'>['onClick'];
}

export const Link = ({ variant = 'profile', disabled = false, text, onClick }: LinkProps) => {
  return (
    <button type="button" aria-label={text} className="group flex" onClick={onClick}>
      {variant !== 'link' && (
        <Icon
          size="xs2"
          variant={variant}
          className={cn(
            'mr-xs fill-primary-600 group-hover:fill-primary-900',
            disabled && 'fill-base-600 group-hover:fill-base-400',
          )}
        />
      )}
      <Label
        size="s"
        className={cn(
          'text-primary-600 group-hover:text-primary-900',
          disabled && 'text-base-600 group-hover:text-base-400',
          !disabled && 'cursor-pointer',
        )}
      >
        {text}
      </Label>
    </button>
  );
};

export default Link;
