import React from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'md',
  block = false,
  disabled = false,
  loading = false,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={classnames(
        'bg-blue-900 text-white rounded',
        {
          'px-4 py-1': size === 'sm',
          'px-6 py-2': size === 'md',
          'px-10 py-4': size === 'lg',
          'w-full': block,
          'bg-opacity-25 hover:cursor-not-allowed': disabled || loading,
          'hover:bg-blue-600 transition': !disabled && !loading,
        },
        className,
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
