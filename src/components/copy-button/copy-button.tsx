import cn from 'clsx';
import { ComponentProps } from 'react';

import { Icon } from '../icon';
import { Label } from '../typography/label';

export interface ICopyButtonProps {
  /**
   * Optional copied
   */
  copied?: boolean;
  /**
   * Optional disable icon
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: ComponentProps<'button'>['onClick'];
}

export const CopyButton = ({ disabled = false, copied = false, onClick }: ICopyButtonProps) => {
  const iconLabel = copied ? 'Link copied' : 'Copy link';

  return (
    <button
      type="button"
      aria-label={iconLabel}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'group flex rounded-m pb-xs pl-s pr-s pt-xs',
        'transition-colors duration-300 ease-in-out',
        !disabled && 'hover:bg-base-100',
        copied && 'bg-base-100',
      )}
    >
      <Icon size="s" variant="share" />
      <Label
        size="m"
        className={cn('ml-xs', 'transition-colors duration-300 ease-in-out', !disabled && 'cursor-pointer')}
      >
        {iconLabel}
      </Label>
    </button>
  );
};
