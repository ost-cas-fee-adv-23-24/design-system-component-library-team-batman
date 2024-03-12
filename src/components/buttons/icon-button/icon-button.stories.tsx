import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button';

const meta = {
  title: 'Component/Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mumble: Story = {
  args: {
    variant: 'mumble',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=478-1381&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};
