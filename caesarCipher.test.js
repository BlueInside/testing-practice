import caesarCipher from './caesarCipher';

test('works with one word', () => {
  expect(caesarCipher('karol', 2)).toMatch('mctqn');
});

test('wraps from z to a', () => {
  expect(caesarCipher('szef', 2)).toMatch('ubgh');
});

test('wraps from a to z', () => {
  expect(caesarCipher('szef', -2)).toMatch('qxcd');
});

test(`don't let shift be lesser than -25 or bigger than 25`, () => {
  expect(() => caesarCipher('karol', 200)).toThrow();
  expect(() => caesarCipher('karol', -200)).toThrow();
});

test('Works with upper-case letters', () => {
  expect(caesarCipher('KAROL', 2)).toMatch('mctqn');
});

test('ignores punctuation', () => {
  expect(caesarCipher('Hej!', 2)).toMatch('jgl!');
});

test('Works to decrypt', () => {
  expect(caesarCipher('jgl!', -2)).toMatch('hej!');
});
