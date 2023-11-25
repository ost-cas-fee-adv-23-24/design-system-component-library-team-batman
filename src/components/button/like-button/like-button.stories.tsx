import type { Meta, StoryObj } from '@storybook/react';

import { LikeButton } from './like-button';

const meta = {
  title: 'Component/Button/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onLikeAdd: { action: 'onLikeAdd' },
    onLikeRemove: { action: 'onLikeRemove' },
  },
} satisfies Meta<typeof LikeButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Unliked: Story = {
  args: {},
};

export const LikedByUser: Story = {
  args: {
    isLikedByUser: true,
    likes: 1,
  },
};

export const NotLikedByUser: Story = {
  args: {
    likes: 42,
  },
};
