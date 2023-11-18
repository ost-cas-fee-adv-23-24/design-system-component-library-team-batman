import type { Meta, StoryObj } from '@storybook/react';
// import NextLink from 'next/link';

import { UserInfo } from './user-info';

const meta = {
  title: 'Component/User/UserInfo',
  component: UserInfo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

const user = {
  displayName: 'Display Name',
  username: 'Username',
  timestamp: 'vor 11 Minuten',
};
const link = {
  href: '/',
  target: '_blank',
  // as: NextLink,
};
const image = {
  src: 'https://nextui.org/images/fruit-1.jpeg',
  alt: 'image',
};

export const S: Story = {
  args: {
    image,
    user,
    link,
    size: 's',
  },
};
export const M: Story = {
  args: {
    image,
    user,
    link,
    size: 'm',
  },
};
export const L: Story = {
  args: {
    image,
    user,
    link,
    size: 'l',
  },
};
export const XL: Story = {
  args: {
    image,
    user,
    link,
    size: 'xl',
  },
};
