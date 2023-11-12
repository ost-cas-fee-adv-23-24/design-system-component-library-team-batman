import { ComponentProps } from 'react';
import { Icon } from '../icon';

export interface LogoProps {
  /**
   * Logo variant
   */
  variant?: 'primary' | 'secondary' | 'gradient';
  /**
   * Optional click handler
   */
  onClick?: () => ComponentProps<'button'>['onClick'];
}

export const Logo = ({
  //variant = 'primary',
  onClick,
}: LogoProps) => {
  return (
    <button
      type="button"
      aria-label="Logo Mumble"
      onClick={onClick}
      //className={clsx(style)}
    >
      <Icon size="l" className={'fill-accent-600'} variant="mumble" />
    </button>
  );
};
