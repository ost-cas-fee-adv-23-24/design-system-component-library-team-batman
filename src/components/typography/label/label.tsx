import { ComponentProps, ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind';

export interface ILabelProps extends ComponentProps<'label'> {
  /**
   * Label text
   */
  children: ReactNode;
  /**
   * Label font size
   */
  size: 's' | 'm' | 'l' | 'xl';

  as?: ElementType;
}

export const Label = ({ children, size, className, as: Component = 'label', ...rest }: ILabelProps) => {
  const style = cn(
    'text-inherit',
    size === 's' && 'mumble-font-label-s',
    size === 'm' && 'mumble-font-label-m',
    size === 'l' && 'mumble-font-label-l',
    size === 'xl' && 'mumble-font-label-xl',
    className,
  );

  return (
    <Component className={style} {...rest}>
      {children}
    </Component>
  );
};
