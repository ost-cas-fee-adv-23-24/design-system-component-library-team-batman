import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from './copy-button';

const meta = {
  title: 'Component/Buttons/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textToCopy: 'Mumble is the best!',
  },
};
export const CustomText: Story = {
  args: {
    textToCopy: 'Mumble is the best!',
    text: ['Copy Text', 'Copied!'],
  },
};
export const Disabled: Story = {
  args: {
    textToCopy: 'Mumble is the best!',
    disabled: true,
  },
};
