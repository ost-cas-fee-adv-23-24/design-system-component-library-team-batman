'use client';
import { forwardRef, useState } from 'react';
import { IInputProps, Input } from '../input';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPasswordInputProps extends Omit<IInputProps, 'icon' | 'type' | 'onIconClick'> {}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(({ ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      ref={ref}
      icon="eye"
      onIconClick={() => setShowPassword(!showPassword)}
      type={showPassword ? 'text' : 'password'}
      {...rest}
    />
  );
});
