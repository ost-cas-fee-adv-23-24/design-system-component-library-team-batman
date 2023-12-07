import { ComponentPropsWithRef, forwardRef } from 'react';
import { Label } from '../../..';
import { cn } from '../../../utils/tailwind';
import { Hint } from '../hint';

export interface ITextArea extends ComponentPropsWithRef<'textarea'> {
  name: string;
  label?: string;
  hint?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ name, label, hint, error, className, id, ...rest }, ref) => {
    return (
      <div className="grid gap-xxs">
        {label && <Label children={label} size="m" htmlFor={name} className="text-base-700" />}
        <textarea
          ref={ref}
          className={cn(
            // base
            'w-full rounded-s border border-base-200 bg-base-50 p-s text-base-900 placeholder-base-500 outline-none mumble-font-placeholder',
            // animation
            'transition-all duration-150 ease-in-out',
            // hover
            'hover:border-base-300 hover:ring-1 hover:ring-base-300',
            // focus
            'focus:border-primary-600 focus:ring-1 focus:ring-primary-600',
            // disabled
            'disabled:cursor-not-allowed disabled:bg-base-50 disabled:hover:border-base-200 disabled:hover:ring-0',
            // error
            error && 'border-error hover:border-error hover:ring-error focus:border-error focus:ring-error',
            className,
          )}
          name={name}
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : ''}
          {...rest}
        />
        <Hint error={error} hint={hint} id={id} />
      </div>
    );
  },
);
