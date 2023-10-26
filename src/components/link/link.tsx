import { ComponentProps } from 'react';

import { Icon } from '../icon';

export interface LinkProps {
  /**
   * Text to show
   */
  text: string;
  /**
   * Optional disable icon
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => ComponentProps<'button'>['onClick'];
}

export const Link = ({ text, onClick }: LinkProps) => {
  return (
    <button type="button" aria-label={text} onClick={onClick} className="flex">
      <Icon size="s" variant="profile" className="mr-xs" />
      {text}
    </button>
  );
};

export default Link;
