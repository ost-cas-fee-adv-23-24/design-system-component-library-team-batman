import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta = {
  title: 'Component/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'OnClick' },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const LinkWithIcon: Story = {
  args: {
    text: 'link',
  },
};
