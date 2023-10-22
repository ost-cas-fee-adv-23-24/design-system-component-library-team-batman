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
   *
   * actions
   */
  onLikeAdd?: () => Promise<void>;
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
  const [variant, setVariant] = useState<'unliked' | 'liked' | 'likes'>(likes > 0 ? 'likes' : 'unliked');
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleLike = async () => {
    if (isLiked) {
      setIsLiked(false);
      setIsDisabled(false);
      await onLikeRemove?.();
    } else {
      setIsLiked(true);
      setIsDisabled(true);
      setVariant('liked');
      await onLikeAdd?.();
      new Promise((resolve) =>
        setTimeout(() => {
          setVariant('likes');
          resolve(true);
        }, 600),
      );
    }
  };

  const style = {
    unliked: {
      icon: {
        color: 'fill-base-600',
      },
      text: {
        color: 'text-base-600',
      },
    },
    liked: {
      icon: {
        color: 'fill-accent-600',
      },
      text: {
        color: 'text-accent-900',
      },
    },
    likes: {
      icon: {
        color: 'fill-accent-600',
      },
      text: {
        color: 'text-accent-600',
      },
    },
  }[(isLiked && 'liked') || variant];

  const iconLabel = isLiked ? 'Liked' : likes > 1 ? 'Likes' : 'Like';

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
        className={cn(style.icon.color, !isDisabled && 'group-hover:fill-accent-600')}
        variant={variant === 'unliked' && !isLiked ? 'heart' : 'heart-filled'}
      />
      <Label
        size="m"
        className={cn(
          'ml-xs',
          !isDisabled && 'group-hover:text-accent-600',
          style.text?.color,
          !isDisabled && 'cursor-pointer',
        )}
      >
        {likes > 0 ? `${likes.toString()} ${iconLabel}` : iconLabel}
      </Label>
    </button>
  );
};
