import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from './copy-button';

const meta = {
  title: 'Component/Buttons/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textToCopy: 'Mumble is the best!',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2433&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};
export const CustomText: Story = {
  args: {
    textToCopy: 'Mumble is the best!',
    text: ['Copy Text', 'Copied!'],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2451&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};
export const Disabled: Story = {
  args: {
    textToCopy: 'Mumble is the best!',
    disabled: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2433&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};
