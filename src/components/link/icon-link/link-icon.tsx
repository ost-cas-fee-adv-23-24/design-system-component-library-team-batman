import cn from 'clsx';

import { IIconProps, Icon } from '../../icon';
import { Label } from '../../typography/label';

export interface IIconLinkProps {
  /**
   * variant of the link
   */
  variant?: 'primary' | 'secondary';
  /**
   * icon of the link
   */
  icon: IIconProps['variant'];
  /**
   * link (if not provided, it will be rendered as span)
   */
  href?: string;
  /**
   * Text to show
   */
  text: string;
}

export const IconLink = ({ variant = 'primary', text, href, icon }: IIconLinkProps) => {
  const Component = href ? 'a' : 'div';

  return (
    <Component className={cn('group flex gap-xxs', href && 'cursor-pointer')} href={href}>
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
};

export default IconLink;
