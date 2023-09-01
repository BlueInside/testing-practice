function reverseString(string) {
  if (typeof string !== 'string') throw Error('Please provide a string');
  if (string.length === 0) throw Error('String is empty');
  const result = [...string];
  return result.reverse().join('');
}

console.log(reverseString('karol'));
export default reverseString;
