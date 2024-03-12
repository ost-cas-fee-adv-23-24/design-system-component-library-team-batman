/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';
import NextImage from 'next/image';
import { Image } from './image';

const meta = {
  title: 'Component/Image',
  component: Image,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onEdit: undefined,
  },
} satisfies Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof meta>;

const src = 'https://nextui.org/images/fruit-1.jpeg';

const alt = 'image';

export const Default: Story = {
  args: {
    alt,
    src,
  },
};
export const WithBorder: Story = {
  args: {
    alt,
    src,
    border: true,
  },
};
export const ZoomIn: Story = {
  args: {
    alt,
    src,
    zoom: 'in',
  },
};
export const ZoomOut: Story = {
  args: {
    alt,
    src,
    zoom: 'out',
  },
};
export const WithEdit: Story = {
  render: (args) => {
    return (
      <div className="grid max-h-[300px] place-items-center">
        <Image {...args} />
      </div>
    );
  },
  args: {
    src,
    alt,
    width: 100,
    height: 200,
    zoom: 'out',
    as: NextImage,
    onEdit: () => {
      console.log('edit clicked');
    },
  },
};
export const WithPreview: Story = {
  render: (args) => {
    return (
      <div className="grid max-h-[300px] place-items-center">
        <Image {...args} />
      </div>
    );
  },
  args: {
    src,
    alt,
    width: 100,
    height: 200,
    zoom: 'out',
    as: NextImage,
    clickToPreview: true,
  },
};
const TemplateRounded: Story['render'] = (args) => {
  return (
    <div className="grid aspect-square max-h-[300px]">
      <Image {...args} />
    </div>
  );
};
export const RoundedS: Story = {
  render: TemplateRounded,
  args: {
    src,
    alt,
    width: 100,
    height: 200,
    rounded: 's',
    imagePlacing: 'cover',
    as: NextImage,
  },
};
export const RoundedM: Story = {
  render: TemplateRounded,
  args: {
    src,
    alt,
    width: 100,
    height: 200,
    rounded: 'm',
    imagePlacing: 'cover',
    as: NextImage,
  },
};
export const RoundedFull: Story = {
  render: TemplateRounded,
  args: {
    src,
    alt,
    width: 100,
    height: 200,
    rounded: 'full',
    imagePlacing: 'cover',
    as: NextImage,
  },
};
export const ContainVsCover: Story = {
  name: 'ℹ️ Contain vs Cover',
  render: (args) => {
    return (
      <div className="grid gap-s">
        contain
        <div className="h-[300px] w-[300px] bg-primary-100">
          <Image {...args} imagePlacing="contain" />
        </div>
        cover
        <div className="h-[300px] w-[300px] bg-primary-100">
          <Image {...args} imagePlacing="cover" />
        </div>
      </div>
    );
  },
  args: {
    src,
    alt,
    width: 100,
    height: 200,
    rounded: 's',
    imagePlacing: 'contain',
    as: NextImage,
  },
};
