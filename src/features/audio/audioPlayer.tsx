'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  description: string;
  duration?: string;
  className?: string;
}

const AudioPlayer = ({
  audioUrl,
  title,
  description,
  duration = '1:30',
  className,
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Ошибка воспроизведения:', error);
      });
    }
    setIsPlaying(!isPlaying);
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
    }
  };

  // Перемотка
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  // Обработка конца аудио
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Сброс при смене аудио
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setIsLoaded(false);
  }, [audioUrl]);

  return (
    <div
      className={`group bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 p-4 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Скрытый аудио-элемент */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex items-start gap-3">
        {/* Кнопка воспроизведения */}
        <button
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center hover:scale-105 transition-transform group/play"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
          disabled={!isLoaded}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${isPlaying ? 'bg-red-500' : 'bg-blue-500'}`}
          >
            {isPlaying ? (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </button>

        {/* Информация об аудио */}
        <div className="flex-1 min-w-0">
          <h5 className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-blue-600 transition-colors">
            {title}
          </h5>
          <p className="text-gray-600 text-xs lg:text-sm mt-1">{description}</p>

          {/* Контролы плеера */}
          <div className="mt-3 flex items-center gap-3">
            <button
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
              disabled={!isLoaded}
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
            </button>

            {/* Прогресс-бар */}
            <div className="flex-1 relative">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-150"
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
                disabled={!isLoaded || totalDuration === 0}
                aria-label="Прогресс аудио"
              />
            </div>

            {/* Тайминг */}
            <div className="text-xs text-gray-600 min-w-[70px] text-right">
              {isLoaded ? (
                <>
                  {formatTime(currentTime)} / {formatTime(totalDuration)}
                </>
              ) : (
                <span className="text-gray-400">Загрузка...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные действия */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <button
          className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          onClick={() => {
            // Открыть в модалке или новом окне
            window.open(audioUrl, '_blank');
          }}
        >
          Открыть отдельно
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <button
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
            onClick={() => {
              // Скачать аудио
              const link = document.createElement('a');
              link.href = audioUrl;
              link.download = title.replace(/\s+/g, '-').toLowerCase() + '.mp3';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Скачать
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </button>

          <div className="w-px h-3 bg-gray-300"></div>

          <button
            className="text-xs text-gray-500 hover:text-gray-700"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                setCurrentTime(0);
              }
            }}
          >
            С начала
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
