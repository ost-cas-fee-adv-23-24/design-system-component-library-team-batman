'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IImageProps, Image } from '.';
import { Icon } from '../icon';

/**
 * ℹ️ this component is can not be found in figma, it is a custom component to improve the image component
 */

export interface IImagePreviewProps extends Pick<IImageProps, 'as' | 'width' | 'height' | 'src' | 'alt'> {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImagePreview({ src, isOpen, alt, width, height, as, onClose }: IImagePreviewProps) {
  const closeModal = () => {
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <div className="relative grid max-h-[100dvh] place-items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 opacity-100 backdrop-blur-lg" />
          </Transition.Child>

          <button
            className="fixed right-0 top-0 z-10 p-s outline-none"
            type="button"
            onClick={closeModal}
            title="Vorschau schliessen"
          >
            <Icon variant="cancel" size="m" className="fill-white" />
          </button>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-auto grid h-[100dvh] place-content-center p-s">
              <Image src={src} alt={alt} width={width} height={height} rounded="s" as={as} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
