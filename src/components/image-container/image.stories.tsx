import type { Meta, StoryObj } from '@storybook/react';
import NextImage from 'next/image';

import { Image } from './image';

const meta = {
  title: 'Component/Image',
  component: Image,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: NextImage,
    alt: 'some image',
    src: 'https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg',
    width: 300,
    height: 400,
  },
};

const Template: Story['render'] = (args) => {
  return (
    <div className="grid place-content-center ">
      <Image {...args} />
    </div>
  );
};
export const WithFullScreenClick: Story = {
  render: Template,
  args: {
    as: NextImage,
    alt: 'some image',
    src: 'https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg',
    width: 600,
    height: 600,
    sizes: '100vw',
    clickToFullScreen: true,
  },
};
