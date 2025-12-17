'use client';

import { useEffect } from 'react';

export const Metrics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
       (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${process.env.NEXT_PUBLIC_YANDEX_PROJECT_ID}', 'ym');

      ym(${process.env.NEXT_PUBLIC_YANDEX_PROJECT_ID}, "init", {
        defer: true,
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
      });
    `;

    // Создаем noscript для пользователей с отключенным JavaScript
    const noscript = document.createElement('noscript');
    const noscriptDiv = document.createElement('div');
    const noscriptImg = document.createElement('img');
    noscriptImg.src = `https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_PROJECT_ID}`;
    noscriptImg.style.position = 'absolute';
    noscriptImg.style.left = '-9999px';
    noscriptImg.alt = '';
    noscriptDiv.appendChild(noscriptImg);
    noscript.appendChild(noscriptDiv);

    // Добавляем оба элемента в body
    document.body.appendChild(script);
    document.body.appendChild(noscript);

    // Очистка при размонтировании компонента
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }

      if (noscript.parentNode) {
        document.body.removeChild(noscript);
      }
    };
  }, []);

  return null;
};
