import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './paragraph';

const meta = {
  title: 'Component/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const M: Story = {
  args: {
    children: 'Paragraph M',
    size: 'm',
  },
};

export const L: Story = {
  args: {
    children: 'Paragraph L',
    size: 'l',
  },
};
