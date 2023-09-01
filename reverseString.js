function reverseString(string) {
  console.log(string);
  if (typeof string !== 'string') throw Error('Please provide a string');
  if (string.length === 0) throw Error('String is empty');
  // remove non alphanumeric characters
  const result = [...string];
  return result.reverse().join('');
}

const expectedReversedString = 'gnirtS\nlertW\tolleH';

console.log(
  expectedReversedString
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join('')
);

export default reverseString;
