import { ButtonHTMLAttributes } from 'react';
import { mergeClassNames } from '@/shared/lib';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: IButtonProps) => {
  const { className, children, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={mergeClassNames(
        'cursor-pointer px-6 py-2.5 bg-cian text-white rounded-lg font-medium transition-colors w-fit',
        'hover:bg-[#0D23CD]',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cian',
        className
      )}
    >
      {children}
    </button>
  );
};
