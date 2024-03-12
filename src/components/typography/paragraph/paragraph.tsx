import { ComponentProps } from 'react';
import { cn } from '../../../utils/tailwind';

export interface IParagraphProps extends ComponentProps<'p'> {
  /**
   * Paragraph text
   */
  children: string | string[];
  /**
   * Paragraph font size
   */
  size: 'm' | 'l';
}

export const Paragraph = ({ children, size, className, ...rest }: IParagraphProps) => {
  const style = cn(
    'text-inherit',
    size === 'm' && 'mumble-font-paragraph-m',
    size === 'l' && 'mumble-font-paragraph-l',
    className,
  );

  return (
    <p className={style} {...rest}>
      {children}
    </p>
  );
};
