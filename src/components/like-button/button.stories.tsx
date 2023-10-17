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

export const Unliked: Story = {
  args: {
    likes: 0,
  },
};

export const Liked: Story = {
  args: {
    variant: 'liked',
  },
};

export const Like: Story = {
  args: {
    variant: 'likes',
    likes: 1,
  },
};

export const Likes: Story = {
  args: {
    variant: 'likes',
    likes: 12,
  },
};
