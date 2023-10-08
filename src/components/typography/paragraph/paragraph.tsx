import clsx from 'clsx';
import { ComponentProps } from 'react';

export interface IParagraphProps extends ComponentProps<'p'> {
  /**
   * Paragraph text
   */
  children: string;
  /**
   * Paragraph font size
   */
  size: 'm' | 'l';
}

export const Paragraph = ({ children, size, className, ...rest }: IParagraphProps) => {
  const style = clsx(size === 'm' && 'mumble-font-paragraph-m', size === 'l' && 'mumble-font-paragraph-l', className);

  return (
    <p className={style} {...rest}>
      {children}
    </p>
  );
};
