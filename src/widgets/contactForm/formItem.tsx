import { ReactNode } from 'react';
import { Label } from './label';
import { mergeClassNames } from '@/shared/lib';

type FormItemProps = {
  name: string;
  children: ReactNode;
  label?: ReactNode;
  className?: string;
  required?: boolean;
};

export const FormItem = (props: FormItemProps) => {
  return (
    <div className={mergeClassNames('w-full flex flex-col gap-2', props.className)}>
      {props.label && (
        <Label htmlFor={props.name} required={props.required}>
          {props.label}
        </Label>
      )}
      {props.children}
    </div>
  );
};
