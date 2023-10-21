import { ComponentPropsWithRef, forwardRef, useRef, useState } from 'react';
import { Hint, Paragraph } from '../../..';
import { cn } from '../../../utils/tailwind';
import { Icon } from '../../icon';

export interface IImageUpload
  extends Omit<ComponentPropsWithRef<'input'>, 'type' | 'className' | 'accept' | 'aria-hidden' | 'label'> {
  id: string;
  name: string;
  error?: string;
  disabled?: boolean;
}

export const ImageUpload = forwardRef<HTMLInputElement, IImageUpload>(
  ({ name, error, disabled, id, onChange, ...rest }, ref) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>('');
    const [fileSize, setFileSize] = useState<string>('');
    const [localError, setLocalError] = useState<string>('');
    const [filePreview, setFilePreview] = useState<string>('');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.code === 'Space' || event.key === 'Enter') {
        event.preventDefault();
        labelRef.current?.click();
      }
    };

    const formatFileSize = (sizeInBytes: number) => {
      const sizeInMB = sizeInBytes / 1000000;
      return sizeInMB.toFixed(2);
    };

    const resetInput = () => {
      setFileName('');
      setFileSize('');
      setLocalError('');
      setFilePreview('');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
      resetInput();
      handleDrag(e, false);
      const file = 'dataTransfer' in e ? e.dataTransfer.files?.[0] : e.target.files?.[0];
      if (file) {
        if (file.size > 52428800) {
          setLocalError('Die Dateigrösse darf nicht größer als 50 MB sein');
          return;
        }
        setFileName(file.name);
        setFileSize(formatFileSize(file.size)); // convert bytes to megabytes
        setFilePreview(URL.createObjectURL(file));
      } else {
        resetInput();
      }
      onChange?.(e as React.ChangeEvent<HTMLInputElement>);
    };

    const handleDrag = (
      e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
      dragActive: boolean,
    ) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(dragActive);
    };

    return (
      <div className="grid gap-xxs">
        <label
          ref={labelRef}
          htmlFor={id}
          className={cn('grid w-full gap-s', disabled && 'cursor-not-allowed')}
          aria-disabled={disabled}
          aria-errormessage={error}
        >
          {/* input element but its hidden to add a custom styling */}
          <input
            id={id}
            ref={ref}
            className="hidden"
            type={'file'}
            name={name}
            disabled={disabled}
            onChange={handleFileChange}
            aria-hidden={true}
            accept="image/jpeg, image/png"
            {...rest}
          />
          {/* dropzone for files */}
          <div
            tabIndex={0}
            className={cn(
              // base
              'grid h-[194px] w-full cursor-pointer place-content-center place-items-center gap-xs rounded-[12px] border-2 border-dashed border-base-200',
              'bg-base-100 text-base-900 placeholder-base-500 outline-none mumble-font-placeholder',
              // animation
              'transition-all duration-150 ease-in-out',
              // hover
              'hover:border-base-300',
              // focus
              'focus:border-primary-600',
              // disabled
              disabled && 'pointer-events-none opacity-50',
              // error
              error && 'border-error hover:border-error focus:border-error',
              // dragging a file
              dragActive && 'bg-primary-100',
            )}
            onKeyDown={handleKeyDown}
            onDrop={handleFileChange}
            onDragOver={(e) => handleDrag(e, true)}
            onDragEnter={(e) => handleDrag(e, true)}
            onDragLeave={(e) => handleDrag(e, false)}
            role="button"
            aria-haspopup="true"
            aria-expanded={fileName ? 'true' : 'false'}
            aria-describedby={`${id}-description`}
          >
            {fileName ? (
              <>
                <span className="text-base-500 mumble-font-label-xl">{fileName}</span>
                <Paragraph size="m" className="text-base-400">
                  {fileSize.toString()} MB
                </Paragraph>
              </>
            ) : (
              <>
                <Icon variant="upload" size="l" className="fill-base-500 " />
                <span className="text-base-500 mumble-font-label-xl">Datei hierhin ziehen ...</span>
                <Paragraph size="m" className="text-base-400">
                  JPEG oder PNG, maximal 50 MB
                </Paragraph>
              </>
            )}

            {filePreview && <img src={filePreview} alt={fileName} className="h-xxl w-auto rounded-s object-cover" />}

            <Hint error={error || localError} />
          </div>
          {/* button to manually select images*/}
          <div
            tabIndex={0}
            className={cn(
              'flex h-[40px] cursor-pointer place-content-center place-items-center gap-xs rounded-s bg-base-300 text-base-500 outline-none mumble-font-label-m',
              // animation
              'transition-all duration-150 ease-in-out',
              // hover
              'hover:ring-2 hover:ring-base-200',
              // focus
              'focus:ring-2 focus:ring-primary-600',
              // disabled
              disabled && 'pointer-events-none opacity-50',
            )}
            onKeyDown={handleKeyDown}
            role="button"
          >
            ... oder Datei auswählen
            <Icon variant="upload" size="s" className="fill-base-500" />
          </div>
          <div id={`${id}-description`} className="sr-only">
            {fileName ? `${fileName}, ${fileSize} MB` : 'Keine Datei ausgewählt'}
          </div>
        </label>
      </div>
    );
  },
);
