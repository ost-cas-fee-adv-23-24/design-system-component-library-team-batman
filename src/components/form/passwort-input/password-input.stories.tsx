import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './password-input';

const meta = {
  title: 'Component/Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component: 'ℹ️ the props are extended from the native input element',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PasswordInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Placeholder',
  },
};
