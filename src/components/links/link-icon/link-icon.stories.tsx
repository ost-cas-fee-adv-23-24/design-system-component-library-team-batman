import type { Meta, StoryObj } from '@storybook/react';
import { LinkIcon } from './link-icon';

const meta = {
  title: 'Component/Links/LinkIcon',
  component: LinkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LinkIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Username: Story = {
  args: {
    text: 'Username',
    icon: 'profile',
    href: '#',
  },
};
export const Timestamp: Story = {
  args: {
    text: 'Timestamp',
    icon: 'time',
    variant: 'secondary',
  },
};
export const Location: Story = {
  args: {
    text: 'Location',
    icon: 'location',
    variant: 'secondary',
  },
};
export const Calendar: Story = {
  args: {
    text: 'Joined',
    icon: 'calendar',
    variant: 'secondary',
  },
};
