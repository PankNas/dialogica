'use client';

import { useState, useRef } from 'react';
import { mergeClassNames } from '@/shared/lib';
import { AudioIcon, AudioPlayer } from '@/features/audio';
import { Title } from '@/shared/ui';

interface AudioCardProps {
  audioUrl: string;
  title: string;
  description: string;
  className?: string;
}

export const AudioCard = ({ audioUrl, title, description, className }: AudioCardProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const typeAudio = audioUrl.split('.').at(-1);

  // Скачивание
  const handleDownloadVideo = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = title.replace(/\s+/g, '_').toLowerCase() + `.${typeAudio}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={mergeClassNames(
        `group flex flex-col gap-3 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 p-4 hover:shadow-lg transition-all duration-300`,
        className
      )}
    >
      <div className="flex items-start gap-3 flex-1">
        <AudioIcon />

        {/* Информация об аудио */}
        <div className="flex-1 min-w-0">
          <Title variant="h3">{title}</Title>
          <p className="text-gray-600 text-xs lg:text-sm mt-1">{description}</p>

          {/* Контролы плеера */}
          <div className="mt-3 flex items-center gap-3">
            <AudioPlayer
              ref={audioRef}
              audioUrl={audioUrl}
              currentTime={currentTime}
              onSetCurrentTime={setCurrentTime}
              onSetError={setError}
            />
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
