export function capitalizeFirstWord(sentence: string): string {
  if (!sentence || typeof sentence !== 'string') {
    return '';
  }
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}