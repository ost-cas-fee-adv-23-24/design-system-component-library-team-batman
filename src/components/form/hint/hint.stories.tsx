import type { Meta, StoryObj } from '@storybook/react';

import { Hint } from './hint';

const meta = {
  title: 'Component/Form/Hint',
  component: Hint,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Hint>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithHint: Story = {
  args: {
    hint: 'Hint',
  },
};

export const WithError: Story = {
  args: {
    error: 'This is a error',
  },
};

export const WithHintAndError: Story = {
  args: {
    error: 'This is a error',
    hint: 'Hint',
  },
};
