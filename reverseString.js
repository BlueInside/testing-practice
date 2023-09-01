function reverseString(string = '') {
  const result = [...string];
  return result.reverse().join('');
}

const string = 'karol';
console.log(reverseString('karol'));
export default reverseString;
