import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Component/Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'ℹ️ the props are extended from the native input element',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=437-1227&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onIconClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};
export const WithDefaultValue: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    defaultValue: 'Default value',
  },
};
export const WithIcon: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    icon: 'mumble',
  },
};
export const Disabled: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
};
export const WithHint: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
  },
};
export const WithError: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    error: 'This is a error',
  },
};
export const WithHintAndError: Story = {
  args: {
    name: 'name',
    label: 'Label',
    placeholder: 'Placeholder',
    error: 'This is a error',
    hint: 'Hint',
  },
};
