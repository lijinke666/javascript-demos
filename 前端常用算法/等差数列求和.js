
/**
 * @name 等差数列求和 - 高斯算法
 * @description n - m 数字之和
 * @param {*} start
 * @param {*} end
 */
const test = (start, end) => {
  return (start + end ) * end / 2
}


console.log(test(1, 10000))  // 50005000
