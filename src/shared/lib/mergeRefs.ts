import { ForwardedRef, Ref, RefCallback } from 'react';

/**
 * Объединяет несколько React ref'ов (как объектных, так и колбэк-функций) в один ref.
 *
 * @template T Тип DOM-элемента или значения, на которое ссылается ref.
 * @param {ForwardedRef<T>[]} inputRefs Массив ref'ов, которые нужно объединить.
 * @returns {RefCallback<T>} Функция, которую можно передать как ref,
 * и которая будет обновлять все переданные ref'ы синхронно.
 *
 * @example
 * const ref1 = useRef(null);
 * const ref2 = useRef(null);
 *
 * <div ref={mergeRefs(ref1, ref2)} />
 */
export const mergeRefs = <T = HTMLElement>(
  ...inputRefs: (ForwardedRef<T> | Ref<T> | null | undefined)[]
): RefCallback<T> => {
  return (node: T) => {
    for (const ref of inputRefs) {
      if (!ref) {
        continue;
      }

      if (typeof ref === 'function') {
        ref(node);
        continue;
      }

      if ('current' in ref) {
        (ref as { current: T | null }).current = node;
      }
    }
  };
};
