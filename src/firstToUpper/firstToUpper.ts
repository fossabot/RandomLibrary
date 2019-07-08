const SEPARATORS = ['\n', ' '];

export function firstToUpper(text: string): string {
  if (!text) { return ''; }
  if (typeof text !== 'string') { return ''; }

  let first = true;
  let result = '';
  for (const char of text) {
    result += first ? char.toLocaleUpperCase() : char;
    first = SEPARATORS.indexOf(char) !== -1;
  }

  return result;
}
