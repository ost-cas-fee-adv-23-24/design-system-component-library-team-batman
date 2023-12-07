import cn from 'clsx';
import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import { Label } from '../../typography/label';

export interface ILinkProps extends ComponentPropsWithRef<'a'> {
  /**
   * Text to show
   */
  text: string;
  /**
   * link
   */
  href?: string;
  /**
   * With this prop you can use `next/link` instead of `<a>`
   */
  as?: ElementType;
}

export const Link = forwardRef<HTMLAnchorElement, ILinkProps>(({ text, href, as: LinkComponent = 'a' }, ref) => {
  return (
    <LinkComponent
      ref={ref}
      href={href}
      className={cn(
        'cursor-pointer',
        'underline underline-offset-4',
        'text-primary-600 hover:decoration-primary-200',
        'transition-colors duration-300',
      )}
    >
      <Label as="span" size="s">
        {text}
      </Label>
    </LinkComponent>
  );
});

export default Link;
