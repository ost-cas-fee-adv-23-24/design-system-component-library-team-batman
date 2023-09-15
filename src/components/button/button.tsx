import clsx from 'clsx';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
  const mode = primary ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800';
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  }[size];

  return (
    <button type="button" className={clsx(sizeClasses, mode)} {...props}>
      {label}
    </button>
  );
};
