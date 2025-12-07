export function formatRussianPhone(value: string, mask: string): string {
  let result = '';

  for (let i = 0, j = 0; i < value.length && j < mask.length; j++) {
    if (j === 0 && value[0] === '8') {
      i++;
      result += value[0];

      continue;
    }

    if (mask[j] === '_') {
      result += value[i];
      i++;
    } else {
      result += mask[j];
    }
  }

  return result;
}
