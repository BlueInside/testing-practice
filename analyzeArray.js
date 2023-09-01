function analyzeArray(numArray) {
  const average = calcAverageValue(numArray);
  const min = calcMinValue(numArray);
  const max = calcMaxValue(numArray);
  const length = numArray.length;
  function calcAverageValue(array) {
    const sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    sum;
    return parseFloat((sum / array.length).toFixed(1));
  }

  function calcMinValue(array) {
    const min = array.reduce((accu, value) => {
      if (value < accu) return value;
      else return accu;
    });
    return min;
  }

  function calcMaxValue(array) {
    const max = array.reduce((accu, value) => {
      if (value > accu) return value;
      else return accu;
    });
    return max;
  }

  return { average, min, max, length };
}

console.log(analyzeArray([1]));
export default analyzeArray;
