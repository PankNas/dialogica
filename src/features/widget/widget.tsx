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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function shouldOpenWidget(widget: any) {
        const ARIA_LABELS = {
          CLOSE: 'Закрыть чат',
          OPEN: 'Открыть чат',
        };

        if (!widget?.host?.shadowRoot) {
          return true;
        }

        const button = widget.host.shadowRoot.querySelector(
          `button[aria-label="${ARIA_LABELS.CLOSE}"], button[aria-label="${ARIA_LABELS.OPEN}"]`
        );

        return button?.getAttribute('aria-label') !== ARIA_LABELS.CLOSE;
      }

      const widget = await window.appChatClient?.(
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

      if (widget && shouldOpenWidget(widget)) {
        timerRef.current = setTimeout(() => {
          widget?.api.open?.();
        }, 1000 * 20);
      }
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
