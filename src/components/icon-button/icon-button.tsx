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

export const IconButton = ({ variant, className, disabled = false, onClick, }: IIconButtonProps) => {
  return (
    <button 
      className={cn("rounded-full p-s bg-base-600 transition-color duration-300 hover:bg-base-700 focus:outline-4 focus:bg-base-700 hover:outline-[3px] outline-offset-0", className)} 
      aria-label={variant} 
      onClick={onClick}
      disabled={disabled}
    >
      <Icon variant={variant} size='s' className='fill-white'/>
    </button>
  );
};
