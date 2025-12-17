// components/ui/alert/types.ts
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
  id: string;
  type: AlertType;
  message: string;
  title?: string;
  duration?: number; // в миллисекундах, Infinity для постоянного отображения
  onClose?: () => void;
}

export interface CreateAlertOptions {
  type?: AlertType;
  message: string;
  title?: string;
  duration?: number;
  onClose?: () => void;
}
