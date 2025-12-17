// components/AlertProvider.tsx
'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
// import { CheckCircleIcon, XCircleIcon, ExclamationIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface Alert {
  id: number;
  message: string;
  type: AlertType;
  visible: boolean;
}

interface AlertContextType {
  addAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error('useAlert must be used within an AlertProvider');
  return context;
};

// ----------------- Цвет и иконка -----------------
const typeStyles: Record<AlertType, { bg: string; icon: React.ReactNode }> = {
  success: { bg: 'bg-green-500', icon: <div className="w-5 h-5 mr-2">i</div> },
  error: { bg: 'bg-red-500', icon: <div className="w-5 h-5 mr-2">i</div> },
  warning: { bg: 'bg-yellow-500', icon: <div className="w-5 h-5 mr-2">i</div> },
  info: { bg: 'bg-blue-500', icon: <div className="w-5 h-5 mr-2">i</div> },
};

// ----------------- Provider -----------------
export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const removeAlert = useCallback((id: number) => {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, visible: false } : a)));
    setTimeout(() => {
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    }, 500); // совпадает с transition duration
  }, []);

  const addAlert = useCallback(
    (message: string, type: AlertType = 'info') => {
      const id = Date.now();
      const newAlert: Alert = { id, message, type, visible: true };

      setAlerts((prev) => {
        const newAlerts = [...prev, newAlert];
        if (newAlerts.length > 5) newAlerts.shift();
        return newAlerts;
      });

      // Автоматическое скрытие через 4.5 сек
      setTimeout(() => removeAlert(id), 4500);
    },
    [removeAlert]
  );

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}

      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {alerts.map((alert) => {
          const style = typeStyles[alert.type];
          return (
            <div
              key={alert.id}
              className={`
                ${style.bg} text-white px-4 py-2 rounded shadow-lg flex items-center justify-between
                transform transition-all duration-500 ease-in-out
                ${alert.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
              `}
            >
              <div className="flex items-center">
                {style.icon}
                <span>{alert.message}</span>
              </div>
              <button onClick={() => removeAlert(alert.id)} className="ml-4">
                <div className="w-5 h-5 text-white">x</div>
              </button>
            </div>
          );
        })}
      </div>
    </AlertContext.Provider>
  );
};
