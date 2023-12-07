import type { Meta, StoryObj } from '@storybook/react';
import { CommentButton } from './comment-button';

const meta = {
  title: 'Component/Buttons/CommentButton',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=415-23&mode=design&t=mXweN60cZx7FXUNd-4',
    },
  },
};
export const Comments: Story = {
  args: {
    comments: 32,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=427-343&mode=design&t=mXweN60cZx7FXUNd-4',
    },
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=415-23&mode=design&t=mXweN60cZx7FXUNd-4',
    },
  },
};
