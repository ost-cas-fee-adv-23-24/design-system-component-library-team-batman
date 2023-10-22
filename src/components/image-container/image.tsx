/* eslint-disable react/forbid-component-props */
import { ComponentPropsWithRef, ElementType, forwardRef, useState } from 'react';
import { cn } from '../../utils/tailwind';
import ImagePreview from './image-preview';

export interface IImageProps extends ComponentPropsWithRef<'img'> {
  src: string;
  alt: string;
  rounded?: 's' | 'm' | 'full' | 'none';
  zoom?: 'in' | 'out';
  clickToFullScreen?: boolean;
  as?: ElementType;
}

export const Image = forwardRef<HTMLImageElement, IImageProps>(
  (
    { as: Component = 'img', rounded = 's', width, height, src, zoom, clickToFullScreen, className, alt, ...rest },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const roundedStyle = cn(
      rounded === 's' && 'rounded-s',
      rounded === 'm' && 'rounded-m',
      rounded === 'full' && 'rounded-full',
    );

    const handleLoad = () => {
      setIsLoaded(true);
    };

    return (
      <div className={cn('group relative h-full w-fit overflow-hidden', roundedStyle)}>
        <Component
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          height={height}
          width={width}
          className={cn(
            'object-contain',
            'duration-600 transform transition-all ease-in-out',
            zoom === 'in' && 'group-hover:scale-105',
            zoom === 'out' && 'scale-105 group-hover:scale-100',
            !isLoaded && 'blur-sm filter',
            roundedStyle,
            className,
          )}
          onLoad={handleLoad}
          {...rest}
        />
        {isLoaded && clickToFullScreen && (
          <>
            <button
              className="absolute inset-0 grid cursor-pointer place-items-center outline-none transition-all duration-300 ease-in-out group-hover:bg-primary-600/40"
              onClick={() => setIsFullScreen(true)}
              type="button"
              title="Bild vergrössern"
            >
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="z-10"
              >
                <path
                  className="-translate-x-xs translate-y-xs opacity-0 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  d="M34.0002 0H24.0002C23.4697 0 22.961 0.210714 22.586 0.585786C22.2109 0.960859 22.0002 1.46957 22.0002 2C22.0002 2.53043 22.2109 3.03914 22.586 3.41421C22.961 3.78929 23.4697 4 24.0002 4H29.1722L22.5862 10.586C22.3951 10.7705 22.2428 10.9912 22.138 11.2352C22.0331 11.4792 21.978 11.7416 21.9757 12.0072C21.9734 12.2728 22.024 12.5361 22.1245 12.7819C22.2251 13.0277 22.3736 13.251 22.5614 13.4388C22.7492 13.6266 22.9725 13.7751 23.2183 13.8756C23.464 13.9762 23.7274 14.0268 23.993 14.0245C24.2585 14.0222 24.521 13.967 24.765 13.8622C25.009 13.7574 25.2297 13.605 25.4142 13.414L32.0002 6.828V12C32.0002 12.5304 32.2109 13.0391 32.5859 13.4142C32.961 13.7893 33.4697 14 34.0002 14C34.5306 14 35.0393 13.7893 35.4144 13.4142C35.7894 13.0391 36.0002 12.5304 36.0002 12V2C36.0002 1.46957 35.7894 0.960859 35.4144 0.585786C35.0393 0.210714 34.5306 0 34.0002 0V0Z"
                  fill="white"
                />
                <path
                  className="-translate-y-xs translate-x-xs opacity-0 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  d="M13.414 22.586C13.0389 22.2111 12.5303 22.0004 12 22.0004C11.4697 22.0004 10.9611 22.2111 10.586 22.586L4 29.172V24C4 23.4696 3.78929 22.9609 3.41421 22.5858C3.03914 22.2107 2.53043 22 2 22C1.46957 22 0.960859 22.2107 0.585786 22.5858C0.210714 22.9609 0 23.4696 0 24L0 34C0 34.5304 0.210714 35.0391 0.585786 35.4142C0.960859 35.7893 1.46957 36 2 36H12C12.5304 36 13.0391 35.7893 13.4142 35.4142C13.7893 35.0391 14 34.5304 14 34C14 33.4696 13.7893 32.9609 13.4142 32.5858C13.0391 32.2107 12.5304 32 12 32H6.828L13.414 25.414C13.7889 25.0389 13.9996 24.5303 13.9996 24C13.9996 23.4697 13.7889 22.9611 13.414 22.586Z"
                  fill="white"
                />
              </svg>
            </button>
          </>
        )}
        <ImagePreview
          alt={alt}
          src={src}
          width={width}
          height={height}
          isOpen={isFullScreen}
          onClose={() => setIsFullScreen(false)}
        />
      </div>
    );
  },
);
