import calculator from './calculator';

test('add 2 integers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('works with negative values', () => {
  expect(calculator.add(-2, -10)).toBe(-12);
});
test('Throws error if argument is not a number', () => {
  expect(() => calculator.add('s', 2)).toThrow();
});
test('subtract 2 integers', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('divide 2 integers', () => {
  expect(calculator.divide(2, 1)).toBe(2);
});
test('Error when divide by zero', () => {
  expect(() => calculator.divide(0, 1)).toThrow();
});

test('multiply 2 integers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
