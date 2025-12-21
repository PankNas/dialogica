import { Ref } from 'react';
import { mergeClassNames } from '@/shared/lib';

interface AudioPlayerProps {
  audioUrl: string;
  className?: string;
  ref?: Ref<HTMLAudioElement>;
  onPlay?: () => void;
}

export const AudioPlayer = ({ audioUrl, className, ref, onPlay }: AudioPlayerProps) => {
  const typeAudio = audioUrl.split('.').at(-1);

  return (
    <div className={mergeClassNames('w-full', className)}>
      <audio ref={ref} preload="auto" controls className="w-full" onPlay={onPlay}>
        <source src={audioUrl} type={`audio/${typeAudio}`} />
        Ваш браузер не поддерживает аудио.
      </audio>
    </div>
  );
};
