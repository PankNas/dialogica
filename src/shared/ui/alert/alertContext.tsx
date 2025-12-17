// components/ui/alert/alert-context.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { AlertType, CreateAlertOptions } from './types';

interface AlertContextType {
  alerts: AlertType[];
  addAlert: (options: CreateAlertOptions) => string;
  removeAlert: (id: string) => void;
  clearAlerts: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within AlertProvider');
  }
  return context;
};

interface AlertProviderProps {
  children: ReactNode;
  maxAlerts?: number;
  defaultDuration?: number;
}

export const AlertProvider = ({
  children,
  maxAlerts = 3,
  defaultDuration = 5000,
}: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }, []);

  const addAlert = useCallback(
    (options: CreateAlertOptions) => {
      const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);

      const newAlert: AlertType = {
        id,
        type: options.type || 'info',
        message: options.message,
        title: options.title,
        duration: options.duration === undefined ? defaultDuration : options.duration,
        onClose: options.onClose,
      };

      setAlerts((prev) => {
        const updated = [newAlert, ...prev];
        // Ограничиваем количество уведомлений
        if (updated.length > maxAlerts) {
          return updated.slice(0, maxAlerts);
        }
        return updated;
      });

      return id;
    },
    [defaultDuration, maxAlerts]
  );

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert, clearAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};
