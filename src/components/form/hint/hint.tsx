import { cn } from '../../../utils/tailwind';

export interface IHintProps {
  /**
   * Hint id (used for aria-describedby)
   * it will be appended with `-hint` or `-error` depending if it has an error or not
   */
  id?: string;
  /**
   * Hint text (description for inputs)
   */
  hint?: string;
  /**
   * Hint error text
   */
  error?: string;
}

export const Hint = ({ id, error, hint }: IHintProps) => {
  if (!hint && !error) return null;

  return (
    <div className={cn('flex justify-between gap-xs text-[12px] font-medium', !hint && 'flex-row-reverse')}>
      {hint && (
        <span id={`${id}-hint`} className="text-base-400">
          {hint}
        </span>
      )}
      {error && (
        <span id={`${id}-error`} className="text-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
