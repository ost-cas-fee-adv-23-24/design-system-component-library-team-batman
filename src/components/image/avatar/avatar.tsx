import { IImageProps, Image } from '..';
import { cn } from '../../../utils/tailwind';
import { IIconButtonProps, IconButton } from '../../icon-button';

export interface IAvatarProps {
  image: Omit<IImageProps, 'imagePlacing' | 'rounded' | 'zoom'>;
  size?: 's' | 'm' | 'l' | 'xl';
  onEdit?: IIconButtonProps['onClick'];
}

export const Avatar = ({ image, size = 'm', onEdit }: IAvatarProps) => {
  return (
    <div
      className={cn(
        'relative grid aspect-square rounded-full border-[6px] border-base-100 bg-primary-200',
        size === 's' && 'h-[40px] border-none',
        size === 'm' && 'h-[64px]',
        size === 'l' && 'h-[96px]',
        size === 'xl' && 'h-[160px]',
      )}
    >
      <Image {...image} imagePlacing="cover" rounded="full" zoom={size === 'xl' ? undefined : 'in'} />
      {size === 'xl' && <IconButton variant="edit" className="absolute bottom-0 right-0" onClick={onEdit} />}
    </div>
  );
};
