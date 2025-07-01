export function convertToILovePattern(text) {
  return text
    .split(/\s+/)
    .map(() => 'I love')
    .join(' ');
}
