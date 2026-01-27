'use client';

import { useEffect, useRef } from 'react';

export const Widget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_WIDGET_SCRIPT || '';
    script.async = true;

    script.onload = async () => {
      const client = await window.appChatClient?.(
        { chatId: process.env.NEXT_PUBLIC_CHAT_ID || '' },
        {
          host: widgetRef.current,
          injectStyles: `
            [data-id=chat-host] {
              bottom: 22px;
              right: 22px;
              align-items: end;
            }
          `,
        }
      );

      timerRef.current = setTimeout(() => {
        client?.api.open?.();
      }, 2000);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return <div ref={widgetRef} id="chat-client" className="z-10" />;
};
