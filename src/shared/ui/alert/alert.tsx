// components/AlertProvider.tsx
'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface Alert {
  id: number;
  message: string;
}

interface AlertContextType {
  addAlert: (message: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error('useAlert must be used within an AlertProvider');
  return context;
};

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = useCallback((message: string) => {
    const id = Date.now();

    setAlerts((prev) => {
      const newAlerts = [...prev, { id, message }];
      // Ограничиваем максимум 5 алертов
      if (newAlerts.length > 5) newAlerts.shift();
      return newAlerts;
    });

    // Автоматически удаляем через 5 секунд
    setTimeout(() => {
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    }, 5000);
  }, []);

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out"
          >
            {alert.message}
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
};
