import analyzeArray from './analyzeArray';

test('Function takes in Array of numbers and return average val', () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(testArray);
  expect(result.average).toBe(4);
});

test('Function takes in Array of numbers and return min val', () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(testArray);
  expect(result.min).toBe(1);
});

test('Function takes in Array of numbers and return max val', () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(testArray);
  expect(result.max).toBe(8);
});

test('Function takes in Array of numbers and return its length val', () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(testArray);
  expect(result.length).toBe(6);
});

test('Function works with one element array', () => {
  const testArray = [1];
  const result = analyzeArray(testArray);
  expect(result.min).toBe(1);
  expect(result.max).toBe(1);
  expect(result.average).toBe(1);
  expect(result.length).toBe(1);
});
