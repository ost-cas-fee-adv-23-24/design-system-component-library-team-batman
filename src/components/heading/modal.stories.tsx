import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Modal } from './modal';

const meta = {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>open modal</button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(!args.isOpen)}
        onSubmit={() => setIsOpen(!args.isOpen)}
      />
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    isOpen: true,
    width: 's',
    title: 'Modal Title',
    children: <div>Modal Content</div>,
  },
};
