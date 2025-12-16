import { Ref } from 'react';
import { mergeClassNames } from '@/shared/lib';

interface AudioPlayerProps {
  audioUrl: string;
  className?: string;
  ref?: Ref<HTMLAudioElement>;
}

export const AudioPlayer = ({ audioUrl, className, ref }: AudioPlayerProps) => {
  const typeAudio = audioUrl.split('.').at(-1);

  return (
    <div className={mergeClassNames('w-full', className)}>
      <audio ref={ref} preload="auto" controls className="w-full">
        <source src={audioUrl} type={`audio/${typeAudio}`} />
        Ваш браузер не поддерживает аудио.
      </audio>
    </div>
  );
};
