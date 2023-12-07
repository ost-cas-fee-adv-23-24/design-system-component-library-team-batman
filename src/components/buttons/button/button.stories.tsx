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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=426-254&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=424-223&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=426-275&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    icon: 'mumble',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=426-254&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=426-254&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=437-1171&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=426-254&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
};
