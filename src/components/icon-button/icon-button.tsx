import cn from 'clsx';

import { Icon, IIconProps } from '../icon';

 interface IIconButtonProps {
  /**
   * variant of the icon
   */
  variant: IIconProps["variant"],
  /**
     * Optional send custom classes
   */
   className?: string,
  /**
   * Optional disable button
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => React.ComponentProps<'button'>['onClick'];
}

export const IconButton = ({ variant, className, onClick, }: IIconButtonProps) => {
  return (
    <button 
      className={cn("cursor-pointer rounded-m p-xs hover:bg-primary-100", className)} 
      aria-label={variant} 
      onClick={onClick}
    >
      <Icon variant={variant} size='s'/>
    </button>
  );
};
