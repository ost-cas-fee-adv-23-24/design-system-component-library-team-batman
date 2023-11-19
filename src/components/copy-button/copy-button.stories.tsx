import type { Meta, StoryObj } from '@storybook/react';

import { CopyButton } from './copy-button';

const meta = {
  title: 'Component/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'OnClick' },
  },
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Copy: Story = {
  args: {},
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const Copied: Story = {
  args: {
    copied: true,
  },
};
