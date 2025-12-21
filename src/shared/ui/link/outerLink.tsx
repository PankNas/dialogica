import { AnchorHTMLAttributes, ReactNode } from 'react';
import { mergeClassNames } from '@/shared/lib';

type OuterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
};

export const OuterLink = (props: OuterLinkProps) => {
  const { className, children, ...linkProps } = props;

  return (
    <a
      target="_blank"
      className={mergeClassNames('text-blue-500 hover:text-blue-800 transition-colors', className)}
      {...linkProps}
    >
      {children}
    </a>
  );
};
