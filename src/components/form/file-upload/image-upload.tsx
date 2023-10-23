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
    const [state, setState] = useState({
      dragActive: false,
      fileName: '',
      fileSize: '',
      localError: '',
      filePreview: '',
    });

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
      setState({ ...state, fileName: '', fileSize: '', localError: '', filePreview: '' });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
      resetInput();
      handleDrag(e, false);
      const file = 'dataTransfer' in e ? e.dataTransfer.files?.[0] : e.target.files?.[0];
      if (file) {
        if (file.size > 52428800) {
          setState({ ...state, localError: 'Die Dateigrösse darf nicht größer als 50 MB sein' });
          return;
        }
        setState({
          ...state,
          fileName: file.name,
          fileSize: formatFileSize(file.size),
          filePreview: URL.createObjectURL(file),
        });
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
      setState({
        ...state,
        dragActive,
      });
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
              state.dragActive && 'bg-primary-100',
            )}
            onKeyDown={handleKeyDown}
            onDrop={handleFileChange}
            onDragOver={(e) => handleDrag(e, true)}
            onDragEnter={(e) => handleDrag(e, true)}
            onDragLeave={(e) => handleDrag(e, false)}
            role="button"
            aria-haspopup="true"
            aria-expanded={state.fileName ? 'true' : 'false'}
            aria-describedby={`${id}-description`}
          >
            {state.fileName ? (
              <>
                <span className="text-base-500 mumble-font-label-xl">{state.fileName}</span>
                <Paragraph size="m" className="text-base-400">
                  {state.fileSize.toString()} MB
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

            {state.filePreview && (
              <img src={state.filePreview} alt={state.fileName} className="h-xxl w-auto rounded-s object-cover" />
            )}

            <Hint error={error || state.localError} />
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
            {state.fileName ? `${state.fileName}, ${state.fileSize} MB` : 'Keine Datei ausgewählt'}
          </div>
        </label>
      </div>
    );
  },
);
