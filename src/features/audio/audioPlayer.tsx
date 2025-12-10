'use client';

import { useState, useRef, useEffect, ChangeEvent, Ref } from 'react';
import { mergeClassNames, mergeRefs } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface AudioPlayerProps {
  audioUrl: string;
  className?: string;
  ref?: Ref<HTMLAudioElement>;
  onLoading?: (flag: boolean) => void;
  onSetCurrentTime?: (currentTime: number) => void;
  onSetError?: (error: string | null) => void;
  currentTime?: number;
}

export const AudioPlayer = ({
  audioUrl,
  currentTime,
  className,
  ref,
  onLoading,
  onSetCurrentTime,
  onSetError,
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [innerCurrentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const typeAudio = audioUrl.split('.').at(-1);

  useEffect(() => {
    if (currentTime) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentTime(currentTime);
    }
  }, [currentTime]);

  // Форматирование времени
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Воспроизведение/пауза
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Ошибка воспроизведения:', error);
        setError('Ошибка воспроизведения аудио');
        setIsPlaying(false);
        onSetError?.('Ошибка воспроизведения аудио');
      });
      setIsPlaying(true);
    }
  };

  // Обновление времени при воспроизведении
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const time = audioRef.current.currentTime;

      setCurrentTime(time);
      onSetCurrentTime?.(time);
    }
  };

  // Загрузка метаданных
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
      setIsLoaded(true);
      onLoading?.(true);
      setError(null);
      onSetError?.(null);
    }
  };

  // Обработка ошибок загрузки
  const handleError = () => {
    if (audioRef.current) {
      console.error('Audio error:', audioRef.current.error);
      setError('Не удалось загрузить аудио');
      onSetError?.('Не удалось загрузить аудио');
      setIsLoaded(false);
      onLoading?.(false);
      setIsPlaying(false);
    }
  };

  // Перемотка
  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    onSetCurrentTime?.(time);

    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  // Обработка конца аудио
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    onSetCurrentTime?.(0);
  };

  // Инициализация при монтировании
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      // Добавляем обработчики
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', () => {
        setIsLoaded(true);
        onLoading?.(true);
      });

      // Принудительно загружаем аудио
      audio.load();

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', () => {
          setIsLoaded(true);
          onLoading?.(true);
        });
      };
    }
  }, [audioUrl]);

  return (
    <div className={mergeClassNames('w-full', className)}>
      {/* Скрытый аудио-элемент */}
      <audio
        ref={mergeRefs(audioRef, ref)}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        controls
        className="w-full"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={audioUrl} type={`audio/${typeAudio}`} />
        Ваш браузер не поддерживает аудио.
      </audio>

      {/*<div className="flex-1 min-w-0">*/}
      {/*  /!* Контролы плеера *!/*/}
      {/*  <div className="mt-3 flex items-center gap-3">*/}
      {/*    <Button*/}
      {/*      className={mergeClassNames(*/}
      {/*        'p-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',*/}
      {/*        { 'bg-red-500 hover:bg-red-600': isPlaying }*/}
      {/*      )}*/}
      {/*      onClick={togglePlay}*/}
      {/*      aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}*/}
      {/*      disabled={!isLoaded || !!error}*/}
      {/*    >*/}
      {/*      {isPlaying ? (*/}
      {/*        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">*/}
      {/*          <path*/}
      {/*            fillRule="evenodd"*/}
      {/*            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"*/}
      {/*            clipRule="evenodd"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      ) : (*/}
      {/*        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">*/}
      {/*          <path*/}
      {/*            fillRule="evenodd"*/}
      {/*            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"*/}
      {/*            clipRule="evenodd"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      )}*/}
      {/*    </Button>*/}

      {/*    /!* Прогресс-бар *!/*/}
      {/*    <div className="flex-1 relative">*/}
      {/*      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">*/}
      {/*        <div*/}
      {/*          className={mergeClassNames(*/}
      {/*            'h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-150',*/}
      {/*            { 'opacity-40': error }*/}
      {/*          )}*/}
      {/*          style={{*/}
      {/*            width: totalDuration > 0 ? `${(innerCurrentTime / totalDuration) * 100}%` : '0%',*/}
      {/*          }}*/}
      {/*        ></div>*/}
      {/*      </div>*/}
      {/*      <input*/}
      {/*        type="range"*/}
      {/*        min="0"*/}
      {/*        max={totalDuration || 100}*/}
      {/*        value={innerCurrentTime}*/}
      {/*        onChange={handleSeek}*/}
      {/*        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"*/}
      {/*        disabled={!isLoaded || totalDuration === 0 || !!error}*/}
      {/*        aria-label="Прогресс аудио"*/}
      {/*      />*/}
      {/*    </div>*/}

      {/*    /!* Тайминг *!/*/}
      {/*    <div className="text-xs text-gray-600 min-w-[70px] text-right">*/}
      {/*      {error ? (*/}
      {/*        <span className="text-red-500">Ошибка</span>*/}
      {/*      ) : !isLoaded ? (*/}
      {/*        <span className="text-gray-400">Загрузка...</span>*/}
      {/*      ) : (*/}
      {/*        <>*/}
      {/*          {formatTime(innerCurrentTime)} / {formatTime(totalDuration)}*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
