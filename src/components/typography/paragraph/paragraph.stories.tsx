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

export const ChangeColorByClass: Story = {
  name: 'ℹ️ set color by class',
  args: {
    size: 'm',
    children: 'This is a text',
    className: 'text-accent-600',
  },
  argTypes: {
    className: {
      name: 'First dash style',
      options: ['text-accent-600', 'text-accent-300', 'text-primary-600', 'text-primary-300'],
      control: 'select',
    },
  },
};
