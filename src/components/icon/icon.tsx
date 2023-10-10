import { ComponentProps } from 'react';
import { cn } from '../../utils/tailwind';

export interface IIconProps extends ComponentProps<'svg'> {
  /**
   * variant of the icon
   */
  variant:
    | 'mumble'
    | 'repost'
    | 'share'
    | 'time'
    | 'profile'
    | 'eye'
    | 'fullscreen'
    | 'settings'
    | 'send'
    | 'logout'
    | 'upload'
    | 'edit'
    | 'location'
    | 'calendar'
    | 'checkmark'
    | 'cancel'
    | 'heart'
    | 'heart-filled'
    | 'reply'
    | 'reply-filled'
    | 'arrow-up'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right';
  /**
   * Size of the icon
   */
  size?: 's' | 'm' | 'l';
}

export const Icon = ({ size = 's', variant, className, ...rest }: IIconProps) => {
  const style = cn(
    'fill-base-600',
    size === 's' && 'h-s w-s',
    size === 'm' && 'h-m w-m',
    size === 'l' && 'h-l w-l',
    className,
  );

  const SvgContent = (): React.JSX.Element => {
    switch (variant) {
      case 'mumble':
        return (
          <>
            <g clipPath="url(#clip0_420_58)">
              <path d="M9.793 10H6.207a.5.5 0 00-.353.854l1.792 1.792a.5.5 0 00.708 0l1.792-1.793A.5.5 0 009.793 10z" />
              <path d="M14.807 5.371A2.962 2.962 0 0016 3a3 3 0 00-3-3 2.96 2.96 0 00-2.029.806 5.866 5.866 0 00-5.942 0A2.96 2.96 0 003 0a3 3 0 00-3 3c0 .974.472 1.827 1.193 2.371C.015 7.867-.64 11.017.935 13.298 2.173 15.09 4.55 16 8 16s5.827-.91 7.065-2.702c1.575-2.28.92-5.43-.258-7.927zm-1.387 6.79C12.577 13.381 10.754 14 8 14s-4.577-.62-5.42-1.839c-1.05-1.522-.417-3.836.055-5.079C3.085 5.89 4.808 2 8 2s4.914 3.89 5.365 5.082c.472 1.243 1.106 3.557.055 5.08z" />
              <path d="M6.67 6.617c-.114-.442-.38-1.05-1.164-1.05-1.081 0-1.987 1.596-1.997 2.306-.01.71.473 1.483 1.07 1.483.598 0 1.123-.535 1.658-1.297.535-.762.546-.999.432-1.442zM10.494 5.567c-.784 0-1.05.608-1.163 1.05-.114.443-.103.68.432 1.442.535.762 1.06 1.297 1.658 1.297.597 0 1.08-.772 1.07-1.483-.01-.71-.916-2.306-1.997-2.306z" />
            </g>
            <defs>
              <clipPath id="clip0_420_58">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'repost':
        return (
          <>
            <g clipPath="url(#clip0_413_274)">
              <path d="M14.413.389a.5.5 0 00-.849-.235l-1.488 1.559a7.494 7.494 0 103.062 8.595 1 1 0 00-1.9-.616 5.513 5.513 0 11-2.573-6.5l-1.6 1.68a.5.5 0 00.27.837L15.157 6.8a.478.478 0 00.31-.04.5.5 0 00.27-.563L14.412.389z" />
            </g>
            <defs>
              <clipPath id="clip0_413_274">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'share':
        return (
          <>
            <path d="M12 6c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .224.029.44.075.65L5.856 5.661A2.972 2.972 0 004 5C2.346 5 1 6.346 1 8s1.346 3 3 3c.704 0 1.344-.254 1.856-.661l3.219 2.012A3.009 3.009 0 009 13c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.704 0-1.343.254-1.856.661L6.925 8.649C6.971 8.44 7 8.223 7 8c0-.224-.029-.44-.075-.649l3.22-2.012A2.97 2.97 0 0012 6zm0-4a1.001 1.001 0 010 2 1.001 1.001 0 010-2zM4 9a1.001 1.001 0 010-2 1.001 1.001 0 010 2zm8 3a1.001 1.001 0 010 2 1.001 1.001 0 010-2z" />
          </>
        );
      case 'time':
        return (
          <>
            <g clipPath="url(#clip0_418_80)">
              <path d="M8 0a8 8 0 108 8 8.024 8.024 0 00-8-8zm0 14a6 6 0 116-6 6.018 6.018 0 01-6 6z" />
              <path d="M11.5 7H9V4.5a1 1 0 10-2 0V8a1 1 0 001 1h3.5a1 1 0 100-2z" />
            </g>
            <defs>
              <clipPath id="clip0_418_80">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'profile':
        return (
          <>
            <path d="M8 7a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM8 8.5a7.008 7.008 0 00-7 7 .5.5 0 00.5.5h13a.5.5 0 00.5-.5 7.008 7.008 0 00-7-7z" />
          </>
        );
      case 'eye':
        return (
          <>
            <g clipPath="url(#clip0_427_455)">
              <path d="M8 14c4.707 0 7.744-5.284 7.871-5.508a1 1 0 00.001-.98C15.746 7.287 12.732 2 8 2 3.245 2 .251 7.289.126 7.514a.998.998 0 00.002.975C.254 8.713 3.27 14 8 14zM8 4c2.84 0 5.036 2.835 5.818 4-.784 1.166-2.98 4-5.818 4-2.84 0-5.038-2.838-5.819-4.001C2.958 6.835 5.146 4 8.001 4z" />
              <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
            </g>
            <defs>
              <clipPath id="clip0_427_455">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'fullscreen':
        return (
          <>
            <g clipPath="url(#clip0_447_528)">
              <path d="M15 0h-5a1 1 0 100 2h2.587L9.294 5.293a1 1 0 101.414 1.414L14 3.414V6a1 1 0 102 0V1a1 1 0 00-1-1zM6.707 9.293a1 1 0 00-1.414 0L2 12.586V10a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2H3.414l3.293-3.293a1 1 0 000-1.414z" />
            </g>
            <defs>
              <clipPath id="clip0_447_528">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'settings':
        return (
          <>
            <g clipPath="url(#clip0_447_761)">
              <path d="M15.135 6.784a2 2 0 01-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094A2 2 0 019.216.865C9.065.258 8.669 0 8.219 0h-.438c-.45 0-.845.258-.997.865a2 2 0 01-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 01-1.23 2.969C.26 6.935 0 7.33 0 7.781v.438c0 .45.258.845.865.997a2 2 0 011.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 012.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 012.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.78.094-1.316a2 2 0 011.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM8 11a3 3 0 110-6 3 3 0 010 6z" />
            </g>
            <defs>
              <clipPath id="clip0_447_761">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'send':
        return (
          <>
            <g clipPath="url(#clip0_457_3521)">
              <path d="M15.707.293a1 1 0 00-1.043-.234l-14 5a.999.999 0 00-.111 1.835l4.586 2.292L10.999 5l-4.186 5.862 2.292 4.586a1.004 1.004 0 001.838-.112l5-14c.129-.363.037-.77-.236-1.043z" />
            </g>
            <defs>
              <clipPath id="clip0_457_3521">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'logout':
        return (
          <>
            <g clipPath="url(#clip0_447_767)">
              <path d="M6.293 11.955a.5.5 0 00.536-.079l4-3.5a.5.5 0 000-.752l-4-3.5A.5.5 0 006 4.5V7H1a1 1 0 000 2h5v2.5a.5.5 0 00.293.455z" />
              <path d="M14 0H2a2 2 0 00-2 2v2a1 1 0 002 0V2h12v12H2v-2a1 1 0 10-2 0v2a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z" />
            </g>
            <defs>
              <clipPath id="clip0_447_767">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'upload':
        return (
          <>
            <path d="M14 10a1 1 0 00-1 1v2H3v-2a1 1 0 00-2 0v2a2 2 0 002 2h10a2 2 0 002-2v-2a1 1 0 00-1-1z" />
            <path d="M4.707 6.707L7 4.414V10a1 1 0 102 0V4.414l2.293 2.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414z" />
          </>
        );
      case 'edit':
        return (
          <>
            <g clipPath="url(#clip0_478_1401)">
              <path d="M8.1 3.5L.3 11.3c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8-4.4-4.4zM15.7 3.3l-3-3c-.4-.4-1-.4-1.4 0L9.5 2.1l4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4z" />
            </g>
            <defs>
              <clipPath id="clip0_478_1401">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'location':
        return (
          <>
            <g clipPath="url(#clip0_478_1451)">
              <path d="M8 0C4.1 0 1 3.1 1 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </g>
            <defs>
              <clipPath id="clip0_478_1451">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'calendar':
        return (
          <>
            <g clipPath="url(#clip0_478_1455)">
              <path d="M14 3h-1V1a1 1 0 00-2 0v2H5V1a1 1 0 00-2 0v2H2a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2zM2 14V7h12v7H2z" />
            </g>
            <defs>
              <clipPath id="clip0_478_1455">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'checkmark':
        return (
          <>
            <path d="M5.6 9.6L2.753 6.754a.5.5 0 00-.707 0L.353 8.446a.5.5 0 000 .708l4.893 4.893a.5.5 0 00.707 0l9.693-9.693a.5.5 0 000-.708l-1.693-1.692a.5.5 0 00-.707 0L5.6 9.6z" />
          </>
        );
      case 'cancel':
        return (
          <>
            <path d="M12.558 1.258a.5.5 0 00-.711.004L8 5.2 4.154 1.262a.5.5 0 00-.712-.004L1.258 3.442a.5.5 0 00.004.712L5.2 8l-3.938 3.847a.5.5 0 00-.004.71l2.184 2.185a.5.5 0 00.712-.004L8 10.8l3.847 3.938a.5.5 0 00.71.004l2.185-2.184a.5.5 0 00-.004-.711L10.8 8l3.938-3.846a.5.5 0 00.004-.712l-2.184-2.184z" />
          </>
        );
      case 'heart':
        return (
          <>
            <g clipPath="url(#clip0_413_276)">
              <path d="M7.4 15.5C6.6 14.8 0 9.3 0 5.1 0 2.4 2.2.3 4.8.3 6 .3 7.1.8 8 1.5 8.9.7 10 .3 11.2.3 13.9.3 16 2.5 16 5.1c0 4.2-6.6 9.7-7.4 10.3-.3.4-.9.4-1.2.1zM4.8 2.3C3.3 2.3 2 3.6 2 5.1c0 2.2 3.5 6 6 8.2 2.1-1.9 6-5.8 6-8.2 0-1.6-1.3-2.8-2.8-2.8-.9 0-1.8.5-2.3 1.3-.4.6-1.3.6-1.7 0-.6-.8-1.4-1.3-2.4-1.3z" />
            </g>
            <defs>
              <clipPath id="clip0_413_276">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'heart-filled':
        return (
          <>
            <g clipPath="url(#clip0_413_275)">
              <path d="M11.6 0C10.1 0 8.8.8 8 2 7.2.8 5.9 0 4.4 0 2 0 0 2 0 4.4c0 4.4 8 10.9 8 10.9s8-6.5 8-10.9C16 2 14 0 11.6 0z" />
            </g>
            <defs>
              <clipPath id="clip0_413_275">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'reply':
        return (
          <>
            <g clipPath="url(#clip0_413_278)">
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </g>
            <defs>
              <clipPath id="clip0_413_278">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'reply-filled':
        return (
          <>
            <g clipPath="url(#clip0_413_277)">
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7c.4 0 .8 0 1.1-.1L14 16v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7z" />
            </g>
            <defs>
              <clipPath id="clip0_413_277">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'arrow-up':
        return (
          <>
            <g clipPath="url(#clip0_426_315)">
              <path d="M8.781.375a1.036 1.036 0 00-1.562 0l-4 5A1 1 0 004 7h3v8a1 1 0 002 0V7h3a1 1 0 00.781-1.625l-4-5z" />
            </g>
            <defs>
              <clipPath id="clip0_426_315">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'arrow-down':
        return (
          <>
            <g clipPath="url(#clip0_426_313)">
              <path d="M12 9H9V1a1 1 0 00-2 0v8H4a1 1 0 00-.78 1.625l4 5a1 1 0 001.561 0l4-5A1 1 0 0012.001 9z" />
            </g>
            <defs>
              <clipPath id="clip0_426_313">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'arrow-left':
        return (
          <>
            <g clipPath="url(#clip0_426_314)">
              <path d="M15 7H7V4a1 1 0 00-1.625-.781l-5 4a1 1 0 000 1.562l5 4A1 1 0 007 12V9h8a1 1 0 000-2z" />
            </g>
            <defs>
              <clipPath id="clip0_426_314">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      case 'arrow-right':
        return (
          <>
            <g clipPath="url(#clip0_426_303)">
              <path d="M10.625 3.219A1 1 0 009 4v3H1a1 1 0 000 2h8v3a1 1 0 001.625.781l5-4a1 1 0 000-1.562l-5-4z" />
            </g>
            <defs>
              <clipPath id="clip0_426_303">
                <path fill="#fff" d="M0 0H16V16H0z" />
              </clipPath>
            </defs>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width={'auto'}
      height={'auto'}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={style}
      {...rest}
    >
      <title>{variant}</title>
      <SvgContent />
    </svg>
  );
};
