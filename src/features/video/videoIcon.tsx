import { mergeClassNames } from '@/shared/lib';

type VideoIconProps = {
  className?: string;
};

export const VideoIcon = (props: VideoIconProps) => {
  return (
    <div
      className={mergeClassNames(
        'flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/20 text-red-600 flex items-center justify-center transition-colors duration-200',
        props.className
      )}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        ></path>
      </svg>
    </div>
  );
};
