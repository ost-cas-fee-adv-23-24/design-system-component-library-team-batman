import clsx from 'clsx';

interface ButtonProps {
  /**
   * Button colors
   */
  color?: 'primary' | 'secondary' | 'gradient';
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
  /**
   * Optional disable button
   */
  disabled?: boolean,
}
/**
 * Primary UI component for user interaction
 */

/* RVO ToDo add Icons */

const buttonClasses = 'w-full border border-primary-500 rounded-md text-white text-base disabled:pointer-events-none disabled:border-1 disabled:opacity-75 active:border-4 outline-none'
export const Button = ({ 
  color = 'primary', 
  size = 'medium', 
  label,
  disabled = false,
  onClick,
 }: ButtonProps) => {

    const sizeClasses = {
    small: 'text-sm p-2',
    medium: 'text-base',
    large: 'text-lg',
  }[size];

  const colorClasses = {
    primary: 'bg-primary-600 focus:border-primary-200 hover:bg-primary-700',
    secondary: 'bg-base-600 focus:border-base-200 hover:bg-base-700',
    gradient: 'mumble-gradient',
  }[color]
console.log(colorClasses)
  return (
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        className={clsx(buttonClasses, colorClasses)}>
          <div className='flex place-content-center items-center'>
            <div className={`fwhitespace-nowrap ${sizeClasses}`}>{label}</div>
          </div>
      </button>
  );
};
