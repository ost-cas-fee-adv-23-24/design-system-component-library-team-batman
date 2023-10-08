import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta = {
  title: 'Component/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Heading h1',
    level: 1,
  },
};

export const H2: Story = {
  args: {
    children: 'Heading h2',
    level: 2,
  },
};

export const H3: Story = {
  args: {
    children: 'Heading h3',
    level: 3,
  },
};

export const H4: Story = {
  args: {
    children: 'Heading h4',
    level: 4,
  },
};
