import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './hint';

const meta = {
  title: 'Component/Form/Hint',
  component: Hint,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=457-3326&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
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
