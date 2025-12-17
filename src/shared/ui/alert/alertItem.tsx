// components/ui/alert/alert-item.tsx
'use client';

import { useEffect, useState } from 'react';
import { AlertType } from './types';
import { mergeClassNames } from '@/shared/lib';

interface AlertItemProps {
  alert: AlertType;
  onClose: () => void;
}

export const AlertItem = ({ alert, onClose }: AlertItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  // Анимация появления
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Автоматическое закрытие
  useEffect(() => {
    if (!alert?.duration || alert?.duration === Infinity) return;

    const duration = alert.duration;
    const intervalTime = 50; // обновляем прогресс каждые 50мс
    const steps = duration / intervalTime;
    const decrement = 100 / steps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - decrement;
        if (newProgress <= 0) {
          clearInterval(progressInterval);
          return 0;
        }
        return newProgress;
      });
    }, intervalTime);

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // ждем завершения анимации
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(closeTimer);
    };
  }, [alert.duration, onClose]);

  // Определяем стили в зависимости от типа
  const getAlertStyles = () => {
    const baseStyles =
      'rounded-xl shadow-2xl border p-4 pl-5 transform transition-all duration-300 backdrop-blur-sm';

    switch (alert.type) {
      case 'success':
        return mergeClassNames(
          baseStyles,
          'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200',
          'text-green-800'
        );
      case 'error':
        return mergeClassNames(
          baseStyles,
          'bg-gradient-to-r from-red-50 to-rose-50 border-red-200',
          'text-red-800'
        );
      case 'warning':
        return mergeClassNames(
          baseStyles,
          'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200',
          'text-amber-800'
        );
      case 'info':
        return mergeClassNames(
          baseStyles,
          'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200',
          'text-blue-800'
        );
      default:
        return mergeClassNames(
          baseStyles,
          'bg-gradient-to-r from-gray-50 to-white border-gray-200',
          'text-gray-800'
        );
    }
  };

  // Иконки для разных типов
  const getIcon = () => {
    const iconClass = 'w-5 h-5';

    switch (alert.type) {
      case 'success':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        );
      case 'warning':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        );
      case 'info':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={mergeClassNames(
        getAlertStyles(),
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
        'relative overflow-hidden'
      )}
      role="alert"
      aria-live={alert.type === 'error' ? 'assertive' : 'polite'}
    >
      {/* Прогресс-бар (если есть duration) */}
      {alert.duration && alert.duration !== Infinity && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-current/20">
          <div
            className="h-full bg-current/40 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex items-start gap-3">
        {/* Иконка */}
        <div className="flex-shrink-0 mt-0.5">
          <div
            className={mergeClassNames(
              'w-8 h-8 rounded-full flex items-center justify-center',
              alert.type === 'success'
                ? 'bg-green-100 text-green-600'
                : alert.type === 'error'
                  ? 'bg-red-100 text-red-600'
                  : alert.type === 'warning'
                    ? 'bg-amber-100 text-amber-600'
                    : alert.type === 'info'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
            )}
          >
            {getIcon()}
          </div>
        </div>

        {/* Контент */}
        <div className="flex-1 min-w-0">
          {alert.title && <h4 className="font-semibold text-sm mb-1">{alert.title}</h4>}
          <p className="text-sm">{alert.message}</p>
        </div>

        {/* Кнопка закрытия */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="flex-shrink-0 w-8 h-8 rounded-full hover:bg-current/10 flex items-center justify-center transition-colors ml-2"
          aria-label="Закрыть уведомление"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
