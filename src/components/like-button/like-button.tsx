
import cn from 'clsx';
import { ComponentProps, useState } from 'react';

import { Icon } from '../icon';
import { Label } from '../typography/label';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'unliked' | 'liked' | 'likes';
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
  variant = 'unliked',
  disabled = false,
  likes = 0,
  onClick,
}: ButtonProps) => {
  const [isActive, setIsActive] = useState(false)
  const style = {
    unliked: {
      icon: {
        color: 'base-600',
        active: 'accent-600',
      },
      text: {
        color: 'base-600',
        active: 'accent-600',
      }
    },
    liked: {
      icon: {
        color: 'accent-600',
      },
      text: {
        color: 'accent-900',
      }
    },
    likes: {
      icon: {
        color: 'accent-600',
        active: 'accent-600',
      },
      text: {
        color: 'accent-600',
        active: 'accent-900',
      }
    },
  }[variant]

  const iconLabel = variant === 'liked' ? 'Liked' : (likes > 1 ? 'Likes' : 'Like')
  const iconHover = `fill-${style.icon?.active}`
  const textover = `text-${style.text?.active}`

  const handleSetActive = (state: boolean) => {
    if (variant === 'liked') {
      return
    }
    setIsActive(state)
  }

  return (
    <button
      type="button"
      aria-label={iconLabel}
      onClick={onClick}
      disabled={disabled}
      className={cn('flex p-xs transition-colors duration-300 ease-in-out rounded-m', {
        'bg-primary-50': isActive,
      })}
      onMouseOver={() => handleSetActive(true)}
      onMouseLeave={() => handleSetActive(false)}
      onFocus={() => handleSetActive(true)}
      onBlur={() => handleSetActive(false)}
    >
      <Icon
        size="s"
        className={cn(`fill-${style.icon?.color}`, {
          [iconHover]: isActive,
        })}
        variant={variant === 'unliked' ? 'heart' : 'heart-filled'}
      />
      <Label size='m' className={cn('cursor-pointer ml-xs', `text-${style.text?.color}`, {
        [textover]: isActive,
      })}>
        {likes > 0 ? `${likes.toString()} ${iconLabel}` : iconLabel}
      </Label>
    </button>
  );
};