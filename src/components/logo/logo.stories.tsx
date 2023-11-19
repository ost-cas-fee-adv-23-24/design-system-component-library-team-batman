import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './logo';

const meta = {
  title: 'Component/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Logo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
export const White: Story = {
  args: {
    variant: 'white',
  },
};
export const Gradient: Story = {
  args: {
    variant: 'gradient',
  },
};
