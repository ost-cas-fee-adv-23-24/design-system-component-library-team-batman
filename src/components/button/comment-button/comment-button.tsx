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
        'flex gap-xs rounded-m px-[12px] py-xs',
        'transition-colors duration-300 ease-in-out',
        'transition-all duration-300 ease-in-out',
        'fill-base-600 text-base-600',
        !disabled && 'cursor-pointer hover:bg-primary-50 hover:fill-primary-600 hover:text-primary-600',
      )}
    >
      <Icon
        size="s"
        className={cn(isCommented && 'fill-primary-600')}
        variant={!isCommented ? 'reply' : 'reply-filled'}
      />
      <Label as="span" size="m">
        {iconLabel}
      </Label>
    </button>
  );
};
