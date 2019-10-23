/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.49%)
 * Likes:    2439
 * Dislikes: 3788
 * Total Accepted:    802K
 * Total Submissions: 3.1M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x == 0) return 0
  const [prefix, n] = String(x)
    .replace(/(-?)(\d*)/, (_, b, c) => [b, c])
    .split(',')

  const num = n
    .split('')
    .reverse()
    .join('')

  const result = Number(prefix + num)
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0
  return result
}

console.log(reverse(1534236469))
console.log(reverse(120))
