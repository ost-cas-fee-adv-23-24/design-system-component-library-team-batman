import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Button } from '../buttons/button';
import { Modal } from './modal';

const meta = {
  title: 'Component/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=521-3177&mode=design&t=GDqZCay2N1L6qF3l-4',
    },
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
      <Button onClick={() => setIsOpen(!isOpen)}>open modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    isOpen: false,
    width: 's',
    title: 'Modal Title',
    children: <div>Modal Content</div>,
  },
};
