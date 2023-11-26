import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta = {
  title: 'Component/Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const S: Story = {
  args: {
    children: 'Label S',
    size: 's',
  },
};

export const M: Story = {
  args: {
    children: 'Label M',
    size: 'm',
  },
};

export const L: Story = {
  args: {
    children: 'Label L',
    size: 'l',
  },
};

export const XL: Story = {
  args: {
    children: 'Label XL',
    size: 'xl',
  },
};

export const ChangeColorByClass: Story = {
  name: 'ℹ️ set color by class',
  args: {
    size: 's',
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
