import cn from 'clsx';
import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import { IIconProps, Icon } from '../../icon';
import { Label } from '../../typography/label';
export interface IIconLinkProps extends ComponentPropsWithRef<'a'> {
  /**
   * Text to show
   */
  text: string;
  /**
   * icon of the link
   */
  icon: IIconProps['variant'];
  /**
   * link (if not provided, it will be rendered as span)
   */
  href?: string;
  /**
   * variant of the link
   */
  variant?: 'primary' | 'secondary';
  /**
   * With this prop you can use `next/link` instead of `<a>`
   */
  as?: ElementType;
}

export const LinkIcon = forwardRef<HTMLAnchorElement | HTMLDivElement, IIconLinkProps>(
  ({ variant = 'primary', text, href, icon, as: LinkComponent = 'a' }, ref) => {
    const Component = href ? LinkComponent : 'div';

    return (
      <Component className={cn('group flex gap-xxs', href && 'cursor-pointer')} href={href} ref={ref}>
        <Icon
          variant={icon}
          className={cn(
            'h-[12px] w-[12px]',
            {
              primary: 'fill-primary-600 group-hover:fill-primary-900',
              secondary: 'fill-base-400 group-hover:fill-base-600',
            }[variant],
          )}
        />
        <Label
          as="span"
          size="s"
          className={cn(
            'text-base-400 group-hover:text-base-600',
            {
              primary: 'text-primary-600 group-hover:text-primary-900',
              secondary: 'text-base-400 group-hover:text-base-600',
            }[variant],
          )}
        >
          {text}
        </Label>
      </Component>
    );
  },
);

export default LinkIcon;
