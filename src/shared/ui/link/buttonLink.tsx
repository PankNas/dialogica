import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { mergeClassNames } from '@/shared/lib';

type ButtonLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = (props: ButtonLinkProps) => {
  const { className, children, ...linkProps } = props;

  return (
    <Link
      {...linkProps}
      className={mergeClassNames(
        'block text-center cursor-pointer px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium transition-colors w-fit',
        'hover:bg-blue-800',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cian',
        'transition duration-300 ease-in-out transform hover:scale-105',
        className
      )}
    >
      {children}
    </Link>
  );
};
