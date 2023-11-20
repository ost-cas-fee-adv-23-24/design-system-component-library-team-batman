import cn from 'clsx';

import { ComponentProps } from 'react';
import { Icon } from '../icon';
import { Label } from '../typography/label';
export interface ILogoProps {
  /**
   * Logo variant
   */
  variant?: 'primary' | 'white' | 'gradient';
  /**
   * Optional click handler
   */
  onClick?: () => ComponentProps<'button'>['onClick'];
}

export const Logo = ({ variant = 'primary', onClick }: ILogoProps) => {
  const classes = {
    primary: {
      icon: 'fill-primary-600',
      text: 'text-primary-600',
    },
    white: {
      icon: 'fill-white',
      text: 'text-white',
    },
    gradient: {
      icon: 'fill-primary-600',
      text: 'text-transparent bg-clip-text bg-gradient-to-br from-accent-400 to-primary-600',
    },
  }[variant];

  return (
    <button type="button" aria-label="Logo Mumble" onClick={onClick} className={'block justify-center md:flex'}>
      <Icon size="l" className={cn('mx-auto mb-xs h-[64px] w-[64px] md:mr-s', classes.icon)} variant="mumble" />
      <Label size="l" className={cn('hidden mumble-font-h1 sm:block', classes.text)}>
        Mumble
      </Label>
    </button>
  );
};
