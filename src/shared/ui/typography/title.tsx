import { CSSProperties, ReactNode } from 'react';
import { mergeClassNames } from '@/shared/lib';

type TitleProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Title = (props: TitleProps) => {
  if (props.variant === 'h1') {
    return (
      <h1
        style={props.style}
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
        style={props.style}
        className={mergeClassNames('text-3xl sm:text-4xl lg:text-5xl font-bold', props.className)}
      >
        {props.children}
      </h2>
    );
  }

  if (props.variant === 'h3') {
    return (
      <h3
        style={props.style}
        className={mergeClassNames(
          'font-semibold text-sm lg:text-base group-hover:text-blue-600 transition-colors',
          props.className
        )}
      >
        {props.children}
      </h3>
    );
  }
};
