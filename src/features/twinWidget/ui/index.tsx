'use client';

import { useEffect, useRef } from 'react';

export const TwinWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_WIDGET_SCRIPT || '';
    script.async = true;

    script.onload = () => {
      window.appChatClient?.(
        { chatId: process.env.NEXT_PUBLIC_CHAT_ID || '' },
        {
          host: widgetRef.current,
          injectStyles: `
            [data-id=chat-host] {
              bottom: 24px;
              right: 24px;
              align-items: end;
            }
          `,
        }
      );
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={widgetRef} id="chat-client" className="z-10" />;
};
