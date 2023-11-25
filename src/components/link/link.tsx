import cn from 'clsx';

import { Label } from '../typography/label';

export interface ILinkProps {
  /**
   * Text to show
   */
  text: string;
  /**
   * link
   */
  href: string;
}

export const Link = ({ text, href }: ILinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        'cursor-pointer',
        'underline underline-offset-4',
        'text-primary-600 hover:decoration-primary-200',
        'transition-colors duration-300',
      )}
    >
      <Label as="span" size="s" className={cn('')}>
        {text}
      </Label>
    </a>
  );
};

export default Link;
