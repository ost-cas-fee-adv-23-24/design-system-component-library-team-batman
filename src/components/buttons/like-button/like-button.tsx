'use client';
import cn from 'clsx';
import { useEffect, useState } from 'react';
import { Label } from '../../..';
import { Icon } from '../../icon';

export interface ILikeButtonProps {
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
  onLikeAdd?: () => void;
  /**
   * decrement Likes
   */
  onLikeRemove?: () => void;
}

const likesText = (likesCounter: number) => {
  if (likesCounter === 1) {
    return '1 Like';
  }
  return likesCounter > 0 ? `${likesCounter.toString()} Likes` : 'Like';
};

export const LikeButton = ({
  disabled = false,
  likes = 0,
  isLikedByUser = false,
  onLikeRemove,
  onLikeAdd,
}: ILikeButtonProps) => {
  const [variant, setVariant] = useState<'unliked' | 'like' | 'like-animated'>(likes > 0 ? 'like' : 'unliked');
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const [likesCount, setLikesCount] = useState(likes);
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    setLikesCount(likes);
  }, [likes]);

  const handleLike = async () => {
    setIsDisabled(true);
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
      onLikeRemove?.();
    } else {
      setIsLiked(true);
      setVariant('like-animated');
      setLikesCount(likesCount + 1);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onLikeAdd?.();
      setVariant('like');
    }
    setIsDisabled(false);
  };
  const iconLabel = variant === 'like-animated' ? 'Liked' : likesText(likesCount);

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={isDisabled}
      className={cn(
        'group flex rounded-m px-[12px] py-xs',
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
