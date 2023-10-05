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
const buttonClasses = 'w-full border border-solid border-slate-200 rounded-md text-white text-base outline-none active:border-4 leading-none disabled:pointer-events-none disabled:border-1 disabled:opacity-75'

export const Button = ({ 
  color = 'primary', 
  size = 'medium', 
  label,
  disabled = false,
  onClick,
 }: ButtonProps) => {

    const sizeClasses = {
    small: {
      text: 'text-sm',
      container: 'px-2 py-1',
    },
    medium: {
      text: 'text-base',
      container: 'px-4 py-2',
    },
    large: {
      text: 'text-lg',
      container: 'px-8 py-4',
    },
  }[size];

  const colorClasses = {
    primary: 'bg-violet-600 focus:border-violet-200 hover:bg-violet-700',
    secondary: 'bg-slate-600 focus:border-slate-200 hover:bg-slate-700',
    gradient: 'bg-gradient-to-r from-pink-500 to-violet-600 focus:border-violet-200 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-700',
  }[color]

  return (
      <button
        type="button" 
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        className={clsx(buttonClasses, colorClasses)}>
          <div className={`flex place-content-center items-center ${sizeClasses.container}`}>
            <div className={`fwhitespace-nowrap ${sizeClasses.text}`}>{label}</div>
          </div>
      </button>
  );
};
