import cn from 'clsx';
import { useState } from 'react';
import { Label } from '../../..';
import { Icon } from '../../icon';

export interface LikeButtonProps {
  /**
   * liked by user
   */
  isLikedByUser?: boolean;
  /**
   * likes counter
   */
  likes?: number;
  /**
   * Optional disable icon
   */
  disabled?: boolean;
  /**
   * increment Likes
   */
  onLikeAdd?: () => Promise<void>;
  /**
   * decrement Likes
   */
  onLikeRemove?: () => Promise<void>;
}

export const LikeButton = ({
  disabled = false,
  likes = 0,
  isLikedByUser,
  onLikeRemove,
  onLikeAdd,
}: LikeButtonProps) => {
  const [variant, setVariant] = useState<'unliked' | 'like' | 'like-animated'>(likes > 0 ? 'like' : 'unliked');
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const [likesCount, setLikesCount] = useState(likes);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleLike = async () => {
    setIsDisabled(true);
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
      await onLikeRemove?.();
    } else {
      setIsLiked(true);
      setVariant('like-animated');
      setLikesCount(likesCount + 1);
      await onLikeAdd?.();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setVariant('like');
    }
    setIsDisabled(false);
  };

  const iconLabel = variant === 'like-animated' ? 'Liked' : likesCount > 0 ? `${likesCount.toString()} Likes` : 'Like';

  return (
    <button
      type="button"
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
        className={cn(
          variant === 'unliked' ? 'fill-base-500' : 'fill-accent-500',
          'group-hover:fill-accent-500',
          'transition-colors duration-300 ease-in-out',
        )}
        variant={variant === 'unliked' || !isLiked ? 'heart' : 'heart-filled'}
      />
      <Label
        as="span"
        size="m"
        className={cn(
          variant === 'unliked' ? 'text-base-600' : 'text-accent-900',
          !isDisabled && 'cursor-pointer group-hover:text-accent-600',
          'ml-xs',
          'transition-colors duration-300 ease-in-out',
        )}
      >
        {iconLabel}
      </Label>
    </button>
  );
};
