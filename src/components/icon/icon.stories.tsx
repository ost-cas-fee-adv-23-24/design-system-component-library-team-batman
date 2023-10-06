import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

('text-primary-500');

export const ChangeColorByClass: Story = {
  name: 'ℹ️ set color by class',
  args: {
    variant: 'mumble',
    size: 'l',
    className: 'fill-accent-600',
  },
  argTypes: {
    className: {
      name: 'First dash style',
      options: ['fill-accent-600', 'fill-accent-300', 'fill-primary-600', 'fill-primary-300'],
      control: 'select',
    },
  },
};
export const Mumble: Story = {
  args: {
    variant: 'mumble',
    size: 'l',
    className: 'fill-primary-800',
  },
};

export const Repost: Story = {
  args: {
    variant: 'repost',
    size: 'l',
  },
};

export const Share: Story = {
  args: {
    variant: 'share',
    size: 'l',
  },
};

export const Time: Story = {
  args: {
    variant: 'time',
    size: 'l',
  },
};

export const Profile: Story = {
  args: {
    variant: 'profile',
    size: 'l',
  },
};

export const Eye: Story = {
  args: {
    variant: 'eye',
    size: 'l',
  },
};

export const Fullscreen: Story = {
  args: {
    variant: 'fullscreen',
    size: 'l',
  },
};

export const Settings: Story = {
  args: {
    variant: 'settings',
    size: 'l',
  },
};

export const Send: Story = {
  args: {
    variant: 'send',
    size: 'l',
  },
};

export const Logout: Story = {
  args: {
    variant: 'logout',
    size: 'l',
  },
};

export const Upload: Story = {
  args: {
    variant: 'upload',
    size: 'l',
  },
};

export const Edit: Story = {
  args: {
    variant: 'edit',
    size: 'l',
  },
};

export const Location: Story = {
  args: {
    variant: 'location',
    size: 'l',
  },
};

export const Calendar: Story = {
  args: {
    variant: 'calendar',
    size: 'l',
  },
};

export const Checkmark: Story = {
  args: {
    variant: 'checkmark',
    size: 'l',
  },
};

export const Cancel: Story = {
  args: {
    variant: 'cancel',
    size: 'l',
  },
};

export const Heart: Story = {
  args: {
    variant: 'heart',
    size: 'l',
  },
};

export const HeartFilled: Story = {
  args: {
    variant: 'heart-filled',
    size: 'l',
  },
};

export const Reply: Story = {
  args: {
    variant: 'reply',
    size: 'l',
  },
};

export const ReplyFilled: Story = {
  args: {
    variant: 'reply-filled',
    size: 'l',
  },
};

export const ArrowUp: Story = {
  args: {
    variant: 'arrow-up',
    size: 'l',
  },
};

export const ArrowDown: Story = {
  args: {
    variant: 'arrow-down',
    size: 'l',
  },
};

export const ArrowLeft: Story = {
  args: {
    variant: 'arrow-left',
    size: 'l',
  },
};

export const ArrowRight: Story = {
  args: {
    variant: 'arrow-right',
    size: 'l',
  },
};
