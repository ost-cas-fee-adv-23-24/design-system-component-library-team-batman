import clsx from 'clsx';
import { ComponentProps } from 'react';
import { cn } from '../../utils/tailwind';
import { Icon } from '../icon';

export interface IButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * How large should the button be?
   */
  size?: 'm' | 'l';
  /**
   * Button contents
   */
  children: string;
  /**
   * Needed for accesability
   */
  ariaLabel?: string;
  /**
   * Optional Icon to display
   */
  icon?: ComponentProps<typeof Icon>['variant'];
  /**
   * Optional disable button
   */
  disabled?: boolean;
  /**
   * Display button in full width
   */
  fullWidth?: boolean;
  /**
   * Optional click handler
   */
  onClick?: ComponentProps<'button'>['onClick'];
}

export const Button = ({
  variant = 'primary',
  size = 'm',
  disabled = false,
  fullWidth = false,
  children,
  ariaLabel,
  icon,
  onClick,
}: IButtonProps) => {
  const style = cn(
    'flex place-content-center rounded-s text-white outline-none mumble-font-label-m',
    'outline-offset-0 transition-colors duration-300 ease-in-out',
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:ring-0',
    fullWidth && 'w-full',
    {
      primary: [
        'bg-primary-600',
        'hover:bg-primary-700 hover:ring-[3px] hover:ring-primary-100',
        'focus:bg-primary-700 focus:ring-4 focus:ring-primary-100 ',
      ],
      secondary: [
        'bg-base-600',
        'hover:bg-base-700 hover:ring-[3px] hover:ring-base-100',
        'focus:bg-base-700 focus:ring-4 focus:ring-base-100 ',
      ],
      tertiary: [
        'mumble-gradient',
        'hover:ring-[3px] hover:ring-primary-100 hover:mumble-gradient-hover',
        'focus:ring-primary-100 focus:mumble-gradient-focus active:ring-4',
      ],
    }[variant],
    {
      m: 'gap-xs p-[12px]',
      l: 'gap-[12px] px-m py-s',
    }[size],
  );

  return (
    <button
      type="button"
      aria-label={ariaLabel || children}
      onClick={onClick}
      disabled={disabled}
      className={clsx(style)}
    >
      {children}
      {icon && <Icon size="s" className={'fill-white'} variant={icon} />}
    </button>
  );
};
