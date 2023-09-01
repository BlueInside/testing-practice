import capitalize from './capitalize';

test('capitalize string longer than 0 chars', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('Return empty string if no argument provided', () => {
  expect(capitalize()).toMatch('');
});

test('Returns undefined if argument is not a string', () => {
  expect(capitalize(12304)).toBeUndefined();
});

test('Return empty string for an empty input string', () => {
  expect(capitalize('')).toMatch('');
});

test('Does not change all-uppercase string', () => {
  expect(capitalize('HELLO')).toMatch('HELLO');
});

test('handles no letters characters without change', () => {
  expect(capitalize('123ABC')).toMatch('123ABC');
});

test('Handles leading whitespace', () => {
  expect(capitalize('   hello')).toMatch('   H');
});
test('Handles non-ASCII characters', () => {
  expect(capitalize('über')).toMatch('Ü');
});
