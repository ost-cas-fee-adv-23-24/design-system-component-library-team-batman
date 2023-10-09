import clsx from 'clsx';

import { Icon } from '../icon';

interface IconButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  /* ToDo import interfaces from icon */
  variant: 
  | 'mumble'
  | 'repost'
  | 'share'
  | 'time'
  | 'profile'
  | 'eye'
  | 'fullscreen'
  | 'settings'
  | 'send'
  | 'logout'
  | 'upload'
  | 'edit'
  | 'location'
  | 'calendar'
  | 'checkmark'
  | 'cancel'
  | 'heart'
  | 'heart-filled'
  | 'reply'
  | 'reply-filled'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right';
  /**
   * Optional send custom classes
   */
  classNames?: string,
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ variant, classNames, onClick, }: IconButtonProps) => {
  return (
    <div className={clsx(classNames, "cursor-pointer rounded-m p-xs")} onClick={onClick}>
      <Icon variant={variant} />
    </div>
  );
};
