import { ComponentProps } from 'react';
import { Icon } from '../icon';
import { Label } from '../typography/label';

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
  //variant = 'primary', md:flex md:justify-right
  onClick,
}: LogoProps) => {
  return (
    <button type="button" aria-label="Logo Mumble" onClick={onClick} className={'block justify-center md:flex'}>
      <Icon size="l" className={'mx-auto mb-xs h-[64px] w-[64px] fill-primary-600 md:mr-s'} variant="mumble" />
      <Label size="l" className="hidden text-primary-600 mumble-font-h1 sm:block">
        Mumble
      </Label>
    </button>
  );
};
