import capitalize from './capitalize';

test('capitalize string longer than 0 chars', () => {
  expect(capitalize('h')).toMatch('H');
});
