import clsx from 'clsx';
interface IconButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  children: JSX.Element;
  /**
   * Optional send custom classes
   */
  classNames?: string,
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ children, classNames, onClick, }: IconButtonProps) => {
  return (
    <div className={clsx(classNames, "cursor-pointer")} onClick={onClick}>
      {children}
    </div>
  );
};
