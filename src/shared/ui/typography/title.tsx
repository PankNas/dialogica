import { ReactNode } from 'react';
import { mergeClassNames } from '@/shared/lib';

type TitleProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
};

export const Title = (props: TitleProps) => {
  if (props.variant === 'h1') {
    return (
      <h1
        className={mergeClassNames(
          'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight',
          props.className
        )}
      >
        {props.children}
      </h1>
    );
  }

  if (props.variant === 'h2') {
    return (
      <h2
        className={mergeClassNames(
          'text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900',
          props.className
        )}
      >
        {props.children}
      </h2>
    );
  }

  if (props.variant === 'h3') {
    return (
      <h3
        className={mergeClassNames(
          'font-semibold text-gray-900 text-sm lg:text-base group-hover:text-blue-600 transition-colors',
          props.className
        )}
      >
        {props.children}
      </h3>
    );
  }
};
