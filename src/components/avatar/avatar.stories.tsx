import type { Meta, StoryObj } from '@storybook/react';
import NextImage from 'next/image';
import { Avatar } from './avatar';

const meta = {
  title: 'Component/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=418-56&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onEdit: { action: 'clicked' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const src = 'https://nextui.org/images/fruit-1.jpeg';
const alt = 'image';

export const S: Story = {
  args: {
    image: { src, alt },
    size: 's',
  },
};

export const M: Story = {
  args: {
    image: { src, alt },
    size: 'm',
  },
};

export const L: Story = {
  args: {
    image: { src, alt },
    size: 'l',
  },
};

export const XL: Story = {
  args: {
    image: { src, alt },
    size: 'xl',
  },
};

export const WithNextImage: Story = {
  name: 'With next/image',
  args: {
    image: { src, alt, as: NextImage, width: 100, height: 100 },
    size: 'xl',
  },
};
