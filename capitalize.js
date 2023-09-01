function capitalize(phrase = '') {
  if (typeof phrase == 'string') {
    return phrase.slice(0, 1).toUpperCase();
  }
  return undefined;
}

export default capitalize;
