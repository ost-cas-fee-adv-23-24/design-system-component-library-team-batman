import type { Preview } from '@storybook/react';
import '../src/style.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Design-Tokens',
          ['Colors', 'Typography', 'Spacing', 'Border'],
          'Component',
          ['Buttons', 'Typography', 'Form', 'Links'],
          'Others',
        ],
      },
    },
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        sm: {
          name: 'sm',
          styles: {
            width: '640px',
            height: '960px',
          },
        },
        md: {
          name: 'md',
          styles: {
            width: '768px',
            height: '960px',
          },
        },
        lg: {
          name: 'lg',
          styles: {
            width: '1024px',
            height: '960px',
          },
        },
        xl: {
          name: 'xl',
          styles: {
            width: '1280px',
            height: '960px',
          },
        },
        xxl: {
          name: '2xl',
          styles: {
            width: '1536px',
            height: '960px',
          },
        },
      },
    },
  },
};

export default preview;
