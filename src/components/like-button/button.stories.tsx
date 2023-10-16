import type { Meta, StoryObj } from '@storybook/react';

import { LikeButton } from './like-button';

const meta = {
  title: 'Component/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof LikeButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    likes: 0,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    likes: 10,
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    likes: 1,
  },
};
export const Custom: Story = {
  args: {
    variant: 'filled',
    label: 'Liked',
  },
};
