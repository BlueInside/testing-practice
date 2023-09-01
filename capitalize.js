function capitalize(phrase = '') {
  if (typeof phrase !== 'string') return undefined;
  if (phrase.length === 0) return '';
  console.log(phrase);

  let trimmedPhrase = phrase.trim();
  const firstNonWhitespaceIndex = phrase.indexOf(trimmedPhrase);
  const capitalizedPart =
    trimmedPhrase.charAt(0).toUpperCase() + trimmedPhrase.slice(1);
  return phrase.slice(0, firstNonWhitespaceIndex) + capitalizedPart;
}

export default capitalize;
