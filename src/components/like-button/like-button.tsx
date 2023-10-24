import cn from 'clsx';
import { ComponentProps, useState } from 'react';

import { Icon } from '../icon';
import { Label } from '../typography/label';

export interface LikeButtonProps {
  /**
   * liked by user
   */
  isLikedByUser?: boolean;
  /**
   * increment Likes
   */
  onLikeAdd?: () => Promise<void>;
  /**
   * decrement Likes
   */
  onLikeRemove?: () => Promise<void>;
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
  disabled = false,
  likes = 0,
  isLikedByUser,
  onLikeRemove,
  onLikeAdd,
}: LikeButtonProps) => {
  const [variant, setVariant] = useState<'unliked' | 'liked' | 'likes'>(
    isLikedByUser ? 'liked' : likes > 0 ? 'likes' : 'unliked',
  );
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const [likesCount, setLikesCount] = useState(likes);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const handleLike = async () => {
    if (isLiked) {
      setIsLiked(false);
      setIsDisabled(true);
      setLikesCount(likesCount - 1);
      await onLikeRemove?.();
      setIsDisabled(false);
    } else {
      setIsLiked(true);
      setIsDisabled(true);
      setVariant('liked');
      setLikesCount(likesCount + 1);
      await onLikeAdd?.();
      new Promise((resolve) =>
        setTimeout(() => {
          setVariant('likes');
          setIsDisabled(false);
          resolve(true);
        }, 1000),
      );
    }
  };

  const style = {
    unliked: {
      icon: {
        color: 'fill-base-500',
      },
      text: {
        color: 'text-base-600',
      },
    },
    liked: {
      icon: {
        color: 'fill-accent-500',
      },
      text: {
        color: 'text-accent-900',
      },
    },
    likes: {
      icon: {
        color: 'fill-accent-500',
      },
      text: {
        color: 'text-accent-900',
      },
    },
  }[variant];

  const iconLabel = variant === 'liked' ? 'Liked' : likesCount > 1 ? `${likesCount.toString()} Likes` : 'Like';

  return (
    <button
      type="button"
      aria-label={iconLabel}
      onClick={handleLike}
      disabled={isDisabled}
      className={cn(
        'group flex rounded-m pb-xs pl-s pr-s pt-xs',
        'transition-colors duration-300 ease-in-out',
        !isDisabled && 'hover:bg-accent-50',
      )}
    >
      <Icon
        size="s"
        className={cn(style.icon.color, 'group-hover:fill-accent-500', 'transition-colors duration-300 ease-in-out')}
        variant={variant === 'unliked' ?? isLiked ? 'heart' : 'heart-filled'}
      />
      <Label
        size="m"
        className={cn(
          'ml-xs',
          'transition-colors duration-300 ease-in-out',
          !isDisabled && 'group-hover:text-accent-600',
          style.text?.color,
          !isDisabled && 'cursor-pointer',
        )}
      >
        {iconLabel}
      </Label>
    </button>
  );
};
