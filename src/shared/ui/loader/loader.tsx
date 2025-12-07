import { mergeClassNames } from '@/shared/lib';

type LoaderProps = {
  className?: string;
};

export const Loader = (props: LoaderProps) => {
  return (
    <div
      className={mergeClassNames(
        'size-6 border-2 border-white border-b-transparent rounded-full inline-block animate-spin',
        props.className
      )}
    />
  );
};
