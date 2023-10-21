import type { Meta, StoryObj } from '@storybook/react';

import { TabGroup } from './tab-group';

const meta = {
  title: 'Component/TabGroup',
  component: TabGroup,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneItem: Story = {
  args: {
    tabs: [{ text: 'Tab 1', onClick: () => console.log('Tab 1 clicked') }],
  },
};
export const TwoItem: Story = {
  args: {
    tabs: [
      { text: 'Tab 1', onClick: () => console.log('Tab 1 clicked') },
      { text: 'Tab 2', onClick: () => console.log('Tab 2 clicked') },
    ],
  },
};
export const ThreeItem: Story = {
  args: {
    tabs: [
      { text: 'Tab 1', onClick: () => console.log('Tab 1 clicked') },
      { text: 'Tab 2', onClick: () => console.log('Tab 2 clicked') },
      { text: 'Tab 3', onClick: () => console.log('Tab 3 clicked') },
    ],
  },
};
export const FourItem: Story = {
  args: {
    tabs: [
      { text: 'Tab 1', onClick: () => console.log('Tab 1 clicked') },
      { text: 'Tab 2', onClick: () => console.log('Tab 2 clicked') },
      { text: 'Tab 3', onClick: () => console.log('Tab 3 clicked') },
      { text: 'Tab 4', onClick: () => console.log('Tab 4 clicked') },
    ],
  },
};
export const Controlled: Story = {
  args: {
    tabs: [
      { text: 'Tab 1', onClick: () => console.log('Tab 1 clicked'), selected: false },
      { text: 'Tab 2', onClick: () => console.log('Tab 2 clicked'), selected: true },
      { text: 'Tab 3', onClick: () => console.log('Tab 3 clicked'), selected: false },
    ],
  },
};
