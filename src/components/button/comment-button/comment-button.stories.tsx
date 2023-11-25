import type { Meta, StoryObj } from '@storybook/react';

import { CommentButton } from './comment-button';

const meta = {
  title: 'Component/Button/CommentButton',
  component: CommentButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'OnClick' },
  },
} satisfies Meta<typeof CommentButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NoComments: Story = {
  args: {},
};
export const Comments: Story = {
  args: {
    comments: 254,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
