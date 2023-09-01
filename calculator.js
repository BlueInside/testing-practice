const calculator = {
  add(a, b) {
    if (!Number(a) || !Number(b)) {
      throw new Error('Please provide a number as arguments');
    }
    return a + b;
  },
  subtract(a, b) {
    if (!Number(a) || !Number(b)) {
      throw new Error('Please provide a number as arguments');
    }
    return a - b;
  },
  multiply(a, b) {
    if (!Number(a) || !Number(b)) {
      throw new Error('Please provide a number as arguments');
    }
    return a * b;
  },
  divide(a, b) {
    if (a === 0 || b === 0) throw new Error('No division by 0');
    if (!Number(a) || !Number(b))
      throw new Error('Please provide a number as arguments');
    return a / b;
  },
};

export default calculator;
