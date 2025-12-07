import { Input, InputProps } from '@/shared/ui';
import { mergeClassNames } from '@/shared/lib';
import CheckIcon from '@/shared/images/check.svg';
import Image from 'next/image';

type CheckboxProps = Omit<InputProps, 'type'>;

export const Checkbox = (props: CheckboxProps) => {
  const { className, ...checkboxProps } = props;

  return (
    <label className="group">
      <input type="checkbox" className="sr-only peer" {...checkboxProps} />
      <div
        className={mergeClassNames(
          'size-4 border border-gray-300 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all',
          'peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:border-blue-500',
          className
        )}
      >
        <Image src={CheckIcon} alt="check" className="hidden group-has-[:checked]:block" />
      </div>
    </label>
  );
};
