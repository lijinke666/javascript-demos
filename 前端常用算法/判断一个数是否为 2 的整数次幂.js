/**
 * 2 * 2 * 2 = 8
 * 8 就是 2 的 整数次幂
 * @param {*} num
 */

const isPowerOf2 = (num) => {
  let temp = 1
  while (temp <= num) {
    if (temp === num) {
      return true
    }
    temp = temp * 2
  }
  return false
}

console.log(isPowerOf2(10))   // false
console.log(isPowerOf2(8))    // true
console.log(isPowerOf2(4))    // true


// 位运算
const isPowerOf2Version2 = (num) => {
  return (num & num - 1) === 0
}

console.log(isPowerOf2Version2(10))   // false
console.log(isPowerOf2Version2(8))    // true
console.log(isPowerOf2Version2(4))    // true

