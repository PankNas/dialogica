'use client';

import React, { useEffect, useState } from 'react';
import { mergeClassNames } from '@/shared/lib';

type ToastType = 'success' | 'error' | null;

type AlertProps = {
  alert: ToastType;
};

export const Alert = ({ alert }: AlertProps) => {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <>
      {toast && (
        <div className="mb-4 p-4 rounded-lg animate-fade-in fixed bottom-16 right-0">
          <div
            className={mergeClassNames('flex items-center gap-2 px-4 py-3 rounded-lg', {
              'bg-red-100 text-red-700 border border-red-200': toast.type === 'error',
              'bg-green-100 text-green-700 border border-green-200': toast.type === 'success',
            })}
          >
            {toast.type === 'success' ? (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="font-medium text-sm">{toast.message}</span>
            <button
              onClick={handleCloseToast}
              className="ml-auto text-gray-500 hover:text-gray-700"
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
      )}
    </>
  );
};
