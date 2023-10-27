import cn from 'clsx';
import { ComponentProps } from 'react';
import { Icon, IIconProps } from '../icon';

export interface IIconButtonProps {
  /**
   * variant of the icon
   */
  variant: IIconProps['variant'];
  /**
   * Optional send custom classes
   */
  className?: string;
  /**
   * Optional disable button
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: ComponentProps<'button'>['onClick'];
}

export const IconButton = ({ variant, className, disabled = false, onClick }: IIconButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-full bg-base-600 p-s outline-none transition-all duration-300 hover:bg-base-700 focus:bg-base-700',
        'otline-none hover:ring-[3px] hover:ring-base-100 focus:ring-4 focus:ring-base-200',
        className,
      )}
      aria-label={variant}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <Icon variant={variant} size="s" className="fill-white" />
    </button>
  );
};
