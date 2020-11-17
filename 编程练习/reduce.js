Array.prototype.myReduce = function (cb, initialValue) {
  const arr = this;
  // let currentValue
  let accumulator = initialValue || arr[0];
  let i = initialValue ? 0 : 1;

  for (; i < arr.length; i++) {
    const value = arr[i];
    accumulator = cb(accumulator, value, i, arr);
  }

  return accumulator;
};

console.log([1, 2, 3].myReduce((a, b) => a + b));
console.log([1, 2, 3].reduce((a, b) => a + b));
