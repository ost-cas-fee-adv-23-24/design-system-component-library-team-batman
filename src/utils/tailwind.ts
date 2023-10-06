import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @description helper function to merge tailwind classes
 */
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
