import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from './like-button';

const meta = {
  title: 'Component/Buttons/LikeButton',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=413-342&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const LikedByUser: Story = {
  args: {
    isLikedByUser: true,
    likes: 1,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=427-443&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const NotLikedByUser: Story = {
  args: {
    isLikedByUser: true,
    likes: 42,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=427-352&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};
