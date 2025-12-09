import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { mergeClassNames } from '@/shared/lib';

type ButtonLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    gradient?: boolean;
  };

export const ButtonLink = (props: ButtonLinkProps) => {
  const { className, children, gradient, ...linkProps } = props;

  return (
    <Link
      {...linkProps}
      className={mergeClassNames(
        'block text-center cursor-pointer px-6 py-2.5 bg-blue-600 font-semibold text-white rounded-xl w-fit shadow-lg shadow-blue-500/20 whitespace-nowrap',
        'hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cian',
        'transition duration-300 ease-in-out transform hover:scale-105',
        {
          'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700':
            gradient,
        },
        className
      )}
    >
      {children}
    </Link>
  );
};
