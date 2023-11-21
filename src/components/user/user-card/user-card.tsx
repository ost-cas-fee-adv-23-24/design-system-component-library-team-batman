import { Avatar, Button, IAvatarProps, IButtonProps } from '../../..';
import { cn } from '../../../utils/tailwind';
import { IUserInfo, UserInfo } from '../user-info';

export interface IUserCardProps {
  /**
   * image configuration
   */
  image: IAvatarProps['image'];
  /**
   * user data
   */
  info: {
    user: IUserInfo['user'];
    link: IUserInfo['link'];
  };
  onClick: IButtonProps['onClick'];
}

export const UserCard = ({ image, info, onClick }: IUserCardProps) => {
  return (
    <div className={cn('grid place-items-center gap-s rounded-m bg-white p-s')}>
      <Avatar image={image} size="l" />
      <UserInfo {...info} size="m" centered />
      <Button variant="primary" size="m" icon="mumble" onClick={onClick} fullWidth>
        Follow
      </Button>
    </div>
  );
};
