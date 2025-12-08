import { ReactNode } from 'react';
import { clsx } from 'clsx';

type IContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = (props: IContainerProps) => {
  return <div className={clsx('md:container mx-auto px-6', props.className)}>{props.children}</div>;
};
