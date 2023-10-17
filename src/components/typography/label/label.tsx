import { ComponentProps } from 'react';
import { cn } from '../../../utils/tailwind';

export interface ILabelProps extends ComponentProps<'label'> {
  /**
   * Label text
   */
  children: string;
  /**
   * Label font size
   */
  size: 's' | 'm' | 'l' | 'xl';
}

export const Label = ({ children, size, className, ...rest }: ILabelProps) => {
  const style = cn(
    'text-base-600',
    size === 's' && 'mumble-font-label-s',
    size === 'm' && 'mumble-font-label-m',
    size === 'l' && 'mumble-font-label-l',
    size === 'xl' && 'mumble-font-label-xl',
    className,
  );

  return (
    <label className={style} {...rest}>
      {children}
    </label>
  );
};
