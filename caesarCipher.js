function caesarCipher(string, shift = 0) {
  if (shift < -25 || shift > 25) {
    throw new Error('shift must be between -25 and 25');
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const stringAsArray = string.toLowerCase().split('');

  let result = encrypt(stringAsArray, shift, alphabet);
  return result.join('');
}

function encrypt(stringAsArray, shift, alphabet) {
  let result = [];
  stringAsArray.forEach((character) => {
    if (character < 'a' || character > 'z') {
      result.push(character);
      return;
    }
    const characterIndex = alphabet.indexOf(character);
    let cipherLetter = characterIndex + shift;
    cipherLetter;
    if (cipherLetter < 0) cipherLetter += 26;
    if (cipherLetter > 25) cipherLetter %= 26;

    result.push(alphabet[cipherLetter]);
  });
  return result;
}

export default caesarCipher;
