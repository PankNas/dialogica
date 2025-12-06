import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import { mergeClassNames } from '@/shared/lib';

type LabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  required?: boolean;
};

export const Label = (props: LabelProps) => {
  const { children, className, required, ...labelProps } = props;

  return (
    <label
      {...labelProps}
      className={mergeClassNames('flex gap-1 text-sm font-medium text-gray-700 ', className)}
    >
      {children}
      {required && <span className="text-red-600">*</span>}
    </label>
  );
};
