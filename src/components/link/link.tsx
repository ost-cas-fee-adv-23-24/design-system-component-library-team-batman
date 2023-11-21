import cn from 'clsx';
import { ComponentProps } from 'react';

import { Icon } from '../icon';
import { Label } from '../typography/label';

export interface ILinkProps {
  /**
   * variant of the link
   */
  variant?: 'profile' | 'time' | 'location' | 'calendar' | 'link';
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
  onClick?: ComponentProps<'button'>['onClick'];
}

export const Link = ({ variant = 'link', disabled = false, text, onClick }: ILinkProps) => {
  return (
    <button
      type="button"
      aria-label={text}
      className={cn('group', variant !== 'profile' && 'cursor-default', disabled && 'pointer-events-none opacity-40')}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex">
        {variant !== 'link' && (
          <Icon
            variant={variant}
            className={cn(
              'h-[12px] w-[12px]',
              'mr-xxs fill-base-400 group-hover:fill-base-600',
              variant === 'profile' && 'fill-primary-600 group-hover:fill-primary-900',
            )}
          />
        )}
        <Label
          size="s"
          className={cn(
            'text-base-400 group-hover:text-base-600',
            variant === 'link' && 'cursor-pointer text-primary-600 group-hover:text-primary-600',
            variant === 'profile' && 'cursor-pointer text-primary-600 group-hover:text-primary-900',
            disabled && 'opacity-50',
          )}
        >
          {text}
        </Label>
      </div>
      {variant === 'link' && <span className="block border border-primary-600 group-hover:border-primary-200" />}
    </button>
  );
};

export default Link;
