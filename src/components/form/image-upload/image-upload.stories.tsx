import type { Meta, StoryObj } from '@storybook/react';
import { ImageUpload } from './image-upload';

const meta = {
  title: 'Component/Form/ImageUpload',
  component: ImageUpload,
  parameters: {
    docs: {
      description: {
        component:
          'ℹ️ the props are extended from the native input element  \nℹ️ only accepts image files (png & jpg) and max size 50 MB',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=521-4209&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageUpload>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'fileupload',
    id: 'fileupload',
  },
};
export const Disabled: Story = {
  args: {
    name: 'fileupload',
    id: 'fileupload',
    disabled: true,
  },
};
export const WithError: Story = {
  args: {
    name: 'fileupload',
    id: 'fileupload',
    error: 'This is a error message',
  },
};
