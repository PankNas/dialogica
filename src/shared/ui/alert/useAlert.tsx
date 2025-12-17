// hooks/use-alert.ts
import { useAlert as useAlertContext } from './alertContext';

export const useAlert = () => {
  const { addAlert, removeAlert, clearAlerts } = useAlertContext();

  const showAlert = (options: Parameters<typeof addAlert>[0]) => {
    return addAlert(options);
  };

  const success = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'success', message, title, duration });
  };

  const error = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'error', message, title, duration });
  };

  const warning = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'warning', message, title, duration });
  };

  const info = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'info', message, title, duration });
  };

  return {
    showAlert,
    success,
    error,
    warning,
    info,
    removeAlert,
    clearAlerts,
  };
};
