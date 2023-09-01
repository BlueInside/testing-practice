function analyzeArray(numArray) {
  const average = calcAverageValue(numArray);
  const min = calcMinValue(numArray);

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
  return { average, min };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
export default analyzeArray;
