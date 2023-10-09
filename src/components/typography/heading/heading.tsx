import { ComponentProps, ElementType } from 'react';
import { cn } from '../../../utils/tailwind';

export interface IHeadingProps extends ComponentProps<'h1' | 'h2' | 'h3' | 'h4'> {
  /**
   * Heading text
   */
  children: string;
  /**
   *  Heading level
   */
  level: 1 | 2 | 3 | 4;
  /**
   *  Optional: change visual level
   */
  visualLevel?: 1 | 2 | 3 | 4;
}

export const Heading = ({ children, level, visualLevel, className, ...rest }: IHeadingProps) => {
  const CustomTag = `h${level}` as ElementType;
  const currentVisualLevel = visualLevel || level;
  const style = cn(
    'text-base-600',
    currentVisualLevel === 1 && 'mumble-font-h1',
    currentVisualLevel === 2 && 'mumble-font-h2',
    currentVisualLevel === 3 && 'mumble-font-h3',
    currentVisualLevel === 4 && 'mumble-font-h4',
    className,
  );

  return (
    <CustomTag className={style} {...rest}>
      {children}
    </CustomTag>
  );
};
