import { ReactNode } from 'react';

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export const GradientText = (props: GradientTextProps) => {
  return (
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {props.children}
    </span>
  );
};
