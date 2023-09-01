import capitalize from './capitalize';

test('capitalize string longer than 0 chars', () => {
  expect(capitalize('hello')).toMatch('H');
});

test('Return empty string if no argument provided', () => {
  expect(capitalize()).toMatch('');
});

test('returns undefined if argument is not a string', () => {
  expect(capitalize(12304)).toBeUndefined();
});
