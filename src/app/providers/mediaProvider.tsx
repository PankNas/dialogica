'use client';

import { PropsWithChildren, useRef } from 'react';
import { MediaContext } from '@/shared/hooks';

export const MediaProvider = (props: PropsWithChildren) => {
  const currentMedia = useRef<HTMLMediaElement | null>(null);

  const stopMedia = () => {
    if (currentMedia.current) {
      currentMedia.current.pause();
    }
  };

  const registerStartMedia = (newMedia: HTMLMediaElement | null) => {
    if (newMedia === currentMedia.current) {
      return;
    }

    if (newMedia) {
      stopMedia();

      currentMedia.current = newMedia;
    }
  };

  return (
    <MediaContext.Provider value={{ registerStartMedia: registerStartMedia, stopMedia: stopMedia }}>
      {props.children}
    </MediaContext.Provider>
  );
};
