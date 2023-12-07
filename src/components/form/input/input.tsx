import { ComponentPropsWithRef, forwardRef } from 'react';
import { cn } from '../../../utils/tailwind';
import { IIconProps, Icon } from '../../icon';
import { Label } from '../../typography/label/label';
import { Hint } from '../hint';

export interface IInputProps extends ComponentPropsWithRef<'input'> {
  /**
   * Input name
   */
  name: string;
  /**
   * Input label
   */
  label?: string;
  /**
   * Input hint
   */
  hint?: string;
  /**
   * Input error (if error string is set, the input will turn red)
   */
  error?: string;
  /**
   * Input icon variant
   */
  icon?: IIconProps['variant'];
  onIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ name, label = '', error, hint, icon, id, className, onIconClick, ...rest }, ref) => {
    return (
      <div className="grid gap-xxs">
        {label && <Label children={label} size="m" htmlFor={name} className="text-base-700" />}
        <div className="relative">
          <input
            ref={ref}
            name={name}
            className={cn(
              // base
              'h-xl w-full rounded-s border border-base-200 bg-base-50 px-s text-base-700 placeholder-base-300 mumble-font-placeholder',
              // animation
              'transition-all duration-150 ease-in-out',
              // hover
              'hover:border-primary-600',
              // focus
              'focus:outline-none focus:ring-1 focus:ring-primary-600',
              // disabled
              'disabled:cursor-not-allowed disabled:bg-base-50 disabled:hover:border-base-200',
              // error
              error && 'border-error hover:border-error focus:ring-error',
              className,
            )}
            aria-label={label}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : ''}
            {...rest}
          />

          {(icon || error) && (
            <div
              className={cn(
                'px absolute right-0 top-0 grid h-full items-center pl-xs pr-s',
                onIconClick && 'cursor-pointer',
              )}
              onClick={onIconClick}
            >
              {error ? (
                <Icon variant="cancel" size="s" className="fill-error" />
              ) : (
                icon && <Icon variant={icon} size="s" />
              )}
            </div>
          )}
        </div>
        <Hint error={error} hint={hint} id={id} />
      </div>
    );
  },
);
