import type { Meta, StoryObj } from '@storybook/react';

import { UserCard } from './user-card';

const meta = {
  title: 'Component/User/UserCard',
  component: UserCard,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const src = 'https://nextui.org/images/fruit-1.jpeg';
const alt = 'image';

export const Default: Story = {
  args: {
    image: {
      alt,
      src,
    },
    onClick: () => null,
    info: {
      user: {
        displayName: 'Display Name',
        username: 'Username',
      },
      link: {
        href: '/',
        target: '_blank',
      },
    },
  },
};
