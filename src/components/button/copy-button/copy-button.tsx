import cn from 'clsx';

import { useState } from 'react';
import { Icon } from '../../icon';
import { Label } from '../../typography/label';

export interface ICopyButtonProps {
  /**
   * Optional disable button
   */
  disabled?: boolean;
  /**
   * text to copy into clipboard [default, after-click]
   */
  text?: [string, string];
  /**
   * text to copy into clipboard
   */
  textToCopy: string;
}
export const CopyButton = ({
  disabled = false,
  textToCopy = '',
  text = ['Copy link', 'Link copied'],
}: ICopyButtonProps) => {
  const [isCopy, setisCopy] = useState<boolean>(false);
  const iconLabel = isCopy ? text[1] : text[0];

  const handleClick = async () => {
    if (!isCopy) {
      setisCopy(true);
      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch (err) {
        null;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setisCopy(false);
    }
  };

  return (
    <button
      type="button"
      aria-label={iconLabel}
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        'group flex rounded-m pb-xs pl-s pr-s pt-xs',
        'transition-colors duration-300 ease-in-out',
        !disabled && 'hover:bg-base-100',
        isCopy && 'bg-base-100',
      )}
    >
      <Icon size="s" variant="share" />
      <Label
        as="span"
        size="m"
        className={cn('ml-xs', 'transition-colors duration-300 ease-in-out', !disabled && 'cursor-pointer')}
      >
        {iconLabel}
      </Label>
    </button>
  );
};
