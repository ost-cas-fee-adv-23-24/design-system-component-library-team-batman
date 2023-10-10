import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './icon-button';

const meta = {
  title: 'Component/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Send: Story = {
  args: {
    variant: 'send',
  },
};
