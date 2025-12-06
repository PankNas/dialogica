import { InputHTMLAttributes, Ref } from 'react';
import { mergeClassNames } from '@/shared/lib';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

export const Input = (props: InputProps) => {
  const { className, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      className={mergeClassNames(
        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all',
        className
      )}
    />
  );
};
