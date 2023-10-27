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

export const LinkLocation: Story = {
  args: {
    text: 'link',
    variant: 'location',
  },
};

export const LinkCalendarDisabled: Story = {
  args: {
    text: 'calendar',
    variant: 'calendar',
    disabled: true,
  },
};

export const LinkWithoutIcon: Story = {
  args: {
    text: 'link',
    variant: 'empty',
  },
};
