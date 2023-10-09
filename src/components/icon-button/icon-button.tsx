import clsx from 'clsx';

import { Icon, IIconProps } from '../icon';

 interface IconButtonProps extends IIconProps {
  /**
     * Optional send custom classes
     */
   classNames?: string,
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const IconButton = ({ variant, size, classNames, onClick, }: IconButtonProps) => {
  return (
    <div className={clsx(classNames, "cursor-pointer rounded-m p-xs")} onClick={onClick}>
      <Icon variant={variant} size={size} />
    </div>
  );
};
