'use client';

import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { mergeClassNames } from '@/shared/lib';
import { AudioIcon } from '@/features/audio';
import { Button } from '@/shared/ui';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  description: string;
  className?: string;
}

export const AudioPlayer = ({ audioUrl, title, description, className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const typeAudio = audioUrl.split('.').at(-1);

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
      });
      setIsPlaying(true);
    }
  };

  // Обновление времени при воспроизведении
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Загрузка метаданных
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
      setIsLoaded(true);
      setError(null);
    }
  };

  // Обработка ошибок загрузки
  const handleError = () => {
    if (audioRef.current) {
      console.error('Audio error:', audioRef.current.error);
      setError('Не удалось загрузить аудио');
      setIsLoaded(false);
      setIsPlaying(false);
    }
  };

  // Перемотка
  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleDownloadVideo = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = title.replace(/\s+/g, '_').toLowerCase() + `.${typeAudio}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Обработка конца аудио
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Инициализация при монтировании
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      // Добавляем обработчики
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', () => setIsLoaded(true));

      // Принудительно загружаем аудио
      audio.load();

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', () => setIsLoaded(true));
      };
    }
  }, [audioUrl]);

  return (
    <div
      className={mergeClassNames(
        `group flex flex-col gap-3 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 p-4 hover:shadow-lg transition-all duration-300`,
        className
      )}
    >
      {/* Скрытый аудио-элемент */}
      <audio
        ref={audioRef}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={audioUrl} type={`audio/${typeAudio}`} />
        Ваш браузер не поддерживает аудио.
      </audio>

      <div className="flex items-start gap-3 flex-1">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
          disabled={!isLoaded || !!error}
        >
          <AudioIcon loading={!isLoaded} />
        </button>

        {/* Информация об аудио */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-blue-600 transition-colors">
            {title}
          </p>
          <p className="text-gray-600 text-xs lg:text-sm mt-1">{description}</p>

          {/* Контролы плеера */}
          <div className="mt-3 flex items-center gap-3">
            <Button
              className={mergeClassNames(
                'p-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
                { 'bg-red-500 hover:bg-red-600': isPlaying }
              )}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
              disabled={!isLoaded || !!error}
            >
              {isPlaying ? (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Button>

            {/* Прогресс-бар */}
            <div className="flex-1 relative">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={mergeClassNames(
                    'h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-150',
                    { 'opacity-40': error }
                  )}
                  style={{
                    width: totalDuration > 0 ? `${(currentTime / totalDuration) * 100}%` : '0%',
                  }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max={totalDuration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                disabled={!isLoaded || totalDuration === 0 || !!error}
                aria-label="Прогресс аудио"
              />
            </div>

            {/* Тайминг */}
            <div className="text-xs text-gray-600 min-w-[70px] text-right">
              {error ? (
                <span className="text-red-500">Ошибка</span>
              ) : !isLoaded ? (
                <span className="text-gray-400">Загрузка...</span>
              ) : (
                <>
                  {formatTime(currentTime)} / {formatTime(totalDuration)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные действия */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <button
          className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => window.open(audioUrl, '_blank')}
          disabled={!!error}
        >
          Открыть отдельно
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <button
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleDownloadVideo}
            disabled={!!error}
          >
            Скачать
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>

          <div className="w-px h-3 bg-gray-300" />

          <button
            className="text-xs text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                setCurrentTime(0);
              }
            }}
            disabled={!!error}
          >
            С начала
          </button>
        </div>
      </div>
    </div>
  );
};
