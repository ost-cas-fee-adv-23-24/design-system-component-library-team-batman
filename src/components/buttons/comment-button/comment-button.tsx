import cn from 'clsx';
import { ComponentProps } from 'react';

import { Icon } from '../../icon';
import { Label } from '../../typography/label';

export interface ICommentButtonProps {
  /**
   * comments counter
   */
  comments?: number;
  /**
   * Optional disable icon
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: ComponentProps<'button'>['onClick'];
}

export const CommentButton = ({ disabled = false, comments = 0, onClick }: ICommentButtonProps) => {
  const isCommented = comments > 0;

  const iconLabel = isCommented ? `${comments.toString()} Comments` : 'Comment';

  return (
    <button
      type="button"
      aria-label={iconLabel}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'group flex rounded-m pb-xs pl-s pr-s pt-xs',
        'transition-colors duration-300 ease-in-out',
        !disabled && 'hover:bg-accent-50',
      )}
    >
      <Icon
        size="s"
        className={cn(!disabled && 'group-hover:fill-primary-600', isCommented && 'fill-primary-600')}
        variant={!isCommented ? 'reply' : 'reply-filled'}
      />
      <Label
        size="m"
        className={cn(
          'ml-xs',
          'transition-colors duration-300 ease-in-out',
          !disabled && 'group-hover:text-primary-600',
          !disabled && 'cursor-pointer',
        )}
      >
        {iconLabel}
      </Label>
    </button>
  );
};
