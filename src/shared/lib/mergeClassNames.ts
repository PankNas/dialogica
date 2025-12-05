import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

/**
 * Объединяет классы стилей, переданные в качестве аргументов, в одну строку.
 * Использует `clsx` для формирования строки классов и `twMerge`
 * для объединения Tailwind CSS классов.
 *
 * @param values - Аргументы, представляющие
 * классы, которые необходимо объединить. Это могут быть строки классов,
 * массивы строк классов и другие допустимые форматы для `classNames`.
 *
 * @returns Возвращает объединенную строку классов.
 */
export const mergeClassNames = (...values: ClassValue[]) =>
  twMerge(clsx(values));
