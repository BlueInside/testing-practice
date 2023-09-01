import reverseString from './reverseString';

test('Return reversed string', () => {
  expect(reverseString('karol')).toMatch('lorak');
});

test('Return undefined if string is empty', () => {
  expect(reverseString('')).toBeUndefined();
});
