import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta = {
  title: 'Component/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'OnClick' },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  args: {
    text: 'profile',
    variant: 'profile',
  },
};

export const Timestamp: Story = {
  args: {
    text: 'timestamp',
    variant: 'time',
  },
};

export const Location: Story = {
  args: {
    text: 'location',
    variant: 'location',
  },
};

export const Calendar: Story = {
  args: {
    text: 'calendar',
    variant: 'calendar',
  },
};

export const LinkLabel: Story = {
  args: {
    text: 'link',
  },
};

export const Disabled: Story = {
  args: {
    text: 'link',
    disabled: true,
  },
};
