import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Component/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    icon: 'mumble',
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Button',
    variant: 'primary',
    icon: 'mumble',
    fullWidth: true,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    fullWidth: true,
    size: 'l',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: true,
  },
};
