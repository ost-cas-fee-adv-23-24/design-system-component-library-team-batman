import clsx from 'clsx';
import { ComponentProps } from 'react';

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
  const style = clsx(
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
