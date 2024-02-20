'use client';
/* eslint-disable react/forbid-component-props */
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '../../utils/tailwind';

export interface ITabGroupProps {
  /**
   * Collection of tabs to display, onClick handler
   * and optional controlled selected state
   */
  tabs?: {
    text: string;
    onClick: () => void;
    selected?: boolean;
  }[];
}

export const TabGroup = ({ tabs = [] }: ITabGroupProps) => {
  const [mouseHover, setMouseHover] = useState<number | undefined>(undefined);
  const findSelectedTab = tabs.findIndex((tab) => tab.selected) !== -1 ? tabs.findIndex((tab) => tab.selected) : 0;
  const [currentSelected, setCurrentSelected] = useState<number>(findSelectedTab);
  const uuid = useRef(uuidv4());

  useEffect(() => {
    setCurrentSelected(findSelectedTab);
  }, [tabs]);

  return (
    <Tab.Group
      as="div"
      className="group relative"
      onChange={(index) => {
        tabs[index].onClick();
        setCurrentSelected(index);
      }}
      selectedIndex={currentSelected}
    >
      {/* pseudo element for animation */}
      <div className="flex select-none rounded-s bg-base-200 p-xxs" aria-hidden="true">
        {tabs.map((tab, index) => (
          <div
            key={`${tab.text}-${index}}`}
            className={cn(`relative`, `z-10 w-full px-[10px] py-[10px] outline-none mumble-font-label-l`)}
          >
            {currentSelected === index && (
              <motion.span
                layoutId={`bubble-${uuid.current}`}
                className={cn(
                  'absolute inset-0 -z-10 w-full rounded-[6px] bg-white transition-[width] duration-300',
                  // mouse is right
                  index < Number(mouseHover) && `group-hover:w-[calc(100%+10px)]`,
                  // mouse is left
                  index > Number(mouseHover) &&
                    `transition-all group-hover:left-[-10px] group-hover:w-[calc(100%+10px)]`,
                  // mouse isn't on any element
                  mouseHover === undefined && 'transition-none',
                )}
                transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
              />
            )}
            {/* empty span to make styling work */}
            <span>&nbsp;</span>
          </div>
        ))}
      </div>
      {/* interactive tab elements with accesibility */}
      <Tab.List className="absolute inset-0 flex">
        {tabs.map((tab, index) => (
          <Tab
            key={`${tab.text}-${index}}`}
            className={({ selected }) =>
              cn(
                selected ? 'text-primary-600' : ' text-base-600 hover:text-base-800 ',
                `z-10 w-full px-[10px] py-[10px] outline-none mumble-font-label-l`,
              )
            }
            onMouseEnter={() => setMouseHover(index)}
            onMouseLeave={() => setMouseHover(undefined)}
          >
            {tab.text}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};
