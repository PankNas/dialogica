'use client';

import { VideoIcon } from '@/features/video';
import { mergeClassNames } from '@/shared/lib';
import { Title } from '@/shared/ui';

type VideoPlayerProps = {
  title: string;
  description?: string;
  sources: string[];
  poster?: string;
  className?: string;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  return (
    <div
      className={mergeClassNames(
        'group h-full flex flex-col gap-8 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-gray-50 to-white',
        props.className
      )}
    >
      <div className="p-4 pb-0 flex gap-3 flex-1">
        <VideoIcon />
        <div>
          <Title variant="h3" className="text-lg lg:text-xl mb-1">
            {props.title}
          </Title>
          {props.description && (
            <p className="text-gray-600 text-sm lg:text-base">{props.description}</p>
          )}
        </div>
      </div>

      <div className="size-full cursor-pointer shadow-2xl">
        <video
          className="size-full object-cover"
          poster={props.poster}
          preload="auto"
          playsInline
          controls
        >
          {props.sources.map((source) => {
            const type = source.split('.').at(-1);
            return <source key={source} src={source} type={`video/${type}`} />;
          })}
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  );
};
