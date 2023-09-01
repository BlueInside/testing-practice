import reverseString from './reverseString';

test('Return reversed string', () => {
  expect(reverseString('karol')).toMatch('lorak');
});

test('Throws error if string is empty', () => {
  expect(() => reverseString('')).toThrow();
});

test('Works with numbers as string', () => {
  expect(reverseString('12345')).toMatch('54321');
});

test('Does not work with not string', () => {
  expect(() => {
    reverseString(1234);
  }).toThrow();
});

test('Work with one char', () => {
  expect(reverseString('s')).toMatch('s');
});

test('Work with two char', () => {
  expect(reverseString('sa')).toMatch('as');
});

test('Case sensitivity', () => {
  expect(reverseString('KaRoL')).toMatch('LoRaK');
});
