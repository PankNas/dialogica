import { Ref, TextareaHTMLAttributes } from 'react';
import { mergeClassNames } from '@/shared/lib';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ref?: Ref<HTMLTextAreaElement>;
};

export const Textarea = (props: TextareaProps) => {
  const { className, ...textareaProps } = props;

  return (
    <textarea
      {...textareaProps}
      className={mergeClassNames(
        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all',
        className
      )}
    />
  );
};
