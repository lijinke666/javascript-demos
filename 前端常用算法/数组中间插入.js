const insert = (arr, value, index) => {
  if (index < 0 || index > arr.length) {
    throw new Error('invalid range!')
  }

  // 从右往左循环, 逐个向右挪一位

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + i] = arr[i]
  }

  arr[index] = value
  return arr
}

console.log(insert([1, 2, 3], "ljk", 1)); // [1,'ljk', 2, 3]
