import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { cn } from '../../utils/tailwind';
import { Icon } from '../icon';

export interface IHeadingProps {
  /**
   * Modal content
   */
  children: ReactNode;
  /**
   *  Modal title
   */
  title: string;
  /**
   *  Wetaher the modal is open or not
   */
  isOpen: boolean;
  /**
   *  Width of the modal
   */
  width: 's' | 'm';
  /**
   *  Handler for closing the modal
   */
  onClose: () => void;
  /**
   * Handler for submitting the modal
   */
  onSubmit: () => void;
}

export const Modal = ({ title, children, isOpen, width = 's', onClose, onSubmit }: IHeadingProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* backdrop */}
          <div className="inset-0 fixed bg-primary-600/20" aria-hidden="true" />
        </Transition.Child>
        {/* modal wrapper */}
        <div className="inset-0 fixed grid min-h-full place-items-end md:place-items-center">
          <div
            className={cn(
              'w-full',
              {
                s: 'md:max-w-[465px]',
                m: 'md:max-w-[494px]',
              }[width],
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* modal content */}
              <Dialog.Panel className="rounded-t-m bg-white md:rounded-m">
                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-between rounded-t-m bg-primary-600 px-l py-m text-white mumble-font-h3"
                >
                  {title}
                  <button
                    type="button"
                    onClick={onClose}
                    className="outline-2 outline-offset-4 focus:outline-primary-100"
                  >
                    <Icon variant="cancel" size="s" className="fill-white" />
                  </button>
                </Dialog.Title>
                <div className="p-l">
                  {/* content area */}
                  {children}
                  {/* button area */}
                  <div className="mt-xxl grid grid-cols-1 gap-s md:grid-cols-2">
                    {/* // TODO: wait for  button component */}
                    <button
                      type="button"
                      className="flex place-items-center justify-center gap-s rounded-s bg-base-500 p-xs text-white"
                      onClick={onClose}
                    >
                      Abbrechen
                      <Icon variant="cancel" size="s" className="fill-white" />
                    </button>
                    <button
                      type="button"
                      className="flex place-items-center justify-center gap-s rounded-s bg-primary-500 p-xs text-white"
                      onClick={onSubmit}
                    >
                      Speichern
                      <Icon variant="checkmark" size="s" className="fill-white" />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
