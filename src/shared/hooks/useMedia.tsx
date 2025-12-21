import { createContext, useContext } from 'react';

interface MediaContextType {
  registerStartMedia: (newMedia: HTMLMediaElement | null) => void;
  stopMedia: () => void;
}

export const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within MediaProvider');
  }
  return context;
};
