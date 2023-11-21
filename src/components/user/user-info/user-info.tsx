import { ElementType } from 'react';
import { Avatar, IAvatarProps, Icon, Link } from '../../..';
import { cn } from '../../../utils/tailwind';

export interface IUserInfo {
  size?: 's' | 'm' | 'l' | 'xl';
  centered?: boolean;
  /**
   * image configuration
   */
  image?: IAvatarProps['image'];
  /**
   * user data
   */
  user: {
    displayName: string;
    username: string;
    timestamp?: string;
    location?: string;
    joined?: string;
  };
  /**
   * link configuration
   */
  link: {
    href: string;
    target?: string;
    /**
     * With this prop you can use `next/link` instead of `<a>`
     */
    as?: ElementType;
  };
  /**
   * if a click function is set, the settings icon is shown
   */
  onSettingsClick?: () => void;
}

export const UserInfo = ({ image, user, link, size = 's', centered, onSettingsClick }: IUserInfo) => {
  const LinkComponent = link?.as || 'a';

  return (
    <div className={cn('flex place-items-center gap-xs')}>
      {size === 's' && image && <Avatar image={image} size="s" />}

      <div className={cn('flex flex-col', centered && 'place-items-center')}>
        <div className="flex place-items-center gap-xs">
          <LinkComponent
            href={link.href}
            target={link?.target}
            className={cn(
              { s: 'mumble-font-label-m', m: 'mumble-font-label-l', l: 'mumble-font-label-xl', xl: 'mumble-font-h3' }[
                size
              ],
            )}
          >
            {user.displayName}
          </LinkComponent>
          {Boolean(onSettingsClick) && size === 'xl' && (
            <button type="button">
              <Icon variant="settings" className="fill-primary-600" />
            </button>
          )}
        </div>
        <div className="flex gap-xs">
          <LinkComponent href={link.href} target={link?.target}>
            <Link variant="profile" text={user.username} />
          </LinkComponent>
          {user.timestamp && <Link variant="time" text={user.timestamp} />}
          {user.location && <Link variant="time" text={user.location} />}
          {user.joined && <Link variant="time" text={user.joined} />}
        </div>
      </div>
    </div>
  );
};
