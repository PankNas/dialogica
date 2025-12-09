import { Title } from '@/shared/ui';
import { ReactNode } from 'react';

type TitleSectionProps = {
  title: ReactNode;
  description?: string;
  label: string;
};

export const TitleSection = (props: TitleSectionProps) => {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-blue-700">{props.label}</span>
      </div>

      <Title variant="h2" className="mb-4">
        {props.title}
      </Title>

      {props.description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{props.description}</p>
      )}
    </div>
  );
};
