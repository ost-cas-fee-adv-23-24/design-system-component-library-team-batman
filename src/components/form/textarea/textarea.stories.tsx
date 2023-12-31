import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

const meta = {
  title: 'Component/Form/Textarea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'ℹ️ the props are extended from the native textarea element',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=427-334&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'textarea',
    label: 'Textarea',
    placeholder: 'Placeholder',
  },
};
export const WithDefaulValue: Story = {
  args: {
    name: 'textarea',
    label: 'Textarea',
    placeholder: 'Placeholder',
    defaultValue: 'Default Value',
  },
};
export const Disabled: Story = {
  args: {
    name: 'textarea',
    label: 'Textarea',
    placeholder: 'Placeholder',
    disabled: true,
  },
};
export const WithError: Story = {
  args: {
    name: 'textarea',
    label: 'Textarea',
    placeholder: 'Placeholder',
    error: 'This is a error',
  },
};
export const WithHintAndError: Story = {
  args: {
    name: 'textarea',
    label: 'Textarea',
    placeholder: 'Placeholder',
    hint: 'Hint',
    error: 'This is a error',
  },
};
