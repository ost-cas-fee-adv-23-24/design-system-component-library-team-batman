import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const tailwindMerge = extendTailwindMerge<'mumble-radius' | 'mumble-fonts'>({
  extend: {
    theme: {
      spacing: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    classGroups: {
      'mumble-radius': [{ rounded: ['none', 's', 'm', 'full'] }],
      'mumble-fonts': [
        'mumble-font-label-s',
        'mumble-font-label-m',
        'mumble-font-label-l',
        'mumble-font-label-xl',
        'mumble-font-placeholder',
        'mumble-font-paragraph-m',
        'mumble-font-paragraph-l',
        'mumble-font-h4',
        'mumble-font-h3',
        'mumble-font-h2',
        'mumble-font-h1',
      ],
    },
  },
});
/**
 * @description helper function to merge tailwind classes
 */
export const cn = (...args: ClassValue[]) => {
  return tailwindMerge(clsx(args));
};
