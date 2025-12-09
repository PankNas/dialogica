import { mergeClassNames } from '@/shared/lib';

type AudioIconProps = {
  className?: string;
  loading?: boolean;
  play?: boolean;
};

export const AudioIcon = (props: AudioIconProps) => {
  return (
    <div
      className={mergeClassNames(
        'flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center transition-colors duration-200',
        { 'bg-gradient-to-br from-red-500/10 to-red-600/20 text-red-600': props.play },
        props.className
      )}
    >
      {props.loading ? (
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <svg
          className={mergeClassNames(
            'w-6 h-6, text-blue-500',
            { 'text-red-500': props.play },
            props.className
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      )}
    </div>
  );
};
