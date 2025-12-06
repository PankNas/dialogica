import clsx from 'clsx';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: IButtonProps) => {
  const { className, children, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={twMerge(
        clsx(
          'cursor-pointer px-6 py-2.5 bg-cian text-white rounded-lg font-medium hover:bg-[#0D23CD] transition-colors w-fit',
          className
        )
      )}
    >
      {children}
    </button>
  );
};
