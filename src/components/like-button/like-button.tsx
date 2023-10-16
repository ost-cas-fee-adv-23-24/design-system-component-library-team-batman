
import cn from 'clsx';

import { ComponentProps } from 'react';
import { Icon } from '../icon';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'filled' | 'gray';
  /**
   * Button label
   */
  label?: string,
  /**
   * likes counter
   */
  likes?: number;
  /**
   * Optional disable icon
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => ComponentProps<'button'>['onClick'];
}

export const LikeButton = ({
  variant = 'primary',
  label = undefined,
  disabled = false,
  likes = 0,
  onClick,
}: ButtonProps) => {
  const style = {
    primary: {
      color: 'accent-600',
    },
    filled: {
      color: 'accent-600',
    },
    gray: {
      color: 'base-600',
    },
  }[variant]


  const iconLabel = (label) || (likes > 1 ? 'Likes' : 'Like')

  return (
    <button
      type="button"
      aria-label={iconLabel}
      onClick={onClick}
      disabled={disabled}
      className={cn('flex place-content-center mumble-font-label-m', `text-${style.color}`)}
    >
      <Icon size="s" className={`fill-${style.color} mr-xs`} variant={variant === 'filled' ? 'heart-filled' : 'heart'} />
      {likes > 0 && likes} {iconLabel}
    </button>
  );
};