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
