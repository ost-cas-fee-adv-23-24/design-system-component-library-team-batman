import { themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logoUrl = require('../src/docs/assets/mumble-logo.svg');
export const storybookTheme = create({
  ...themes.light,
  base: 'light',
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Team Batman Storybook',
  brandUrl: 'https://github.com/ost-cas-fee-adv-23-24/design-system-component-library-team-batman',
  brandImage: logoUrl,
  brandTarget: '_blank',
});
