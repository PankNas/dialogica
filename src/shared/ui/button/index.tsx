import { ButtonHTMLAttributes } from 'react';
import { mergeClassNames } from '@/shared/lib';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = (props: IButtonProps) => {
  const { className, children, variant = 'primary', ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={mergeClassNames(
        'cursor-pointer px-6 py-2.5 bg-blue-500 text-white rounded-lg font-medium transition-colors w-fit',
        'hover:bg-blue-600',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cian',
        {
          'bg-transparent border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 hover:bg-transparent':
            variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </button>
  );
};
