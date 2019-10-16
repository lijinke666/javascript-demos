/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (41.65%)
 * Likes:    1017
 * Dislikes: 1790
 * Total Accepted:    454.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 进位 最后一位 +1 如果 = 10 往前进一位
 * @description 5 => 6   19 => 20 1999 => 2000
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 9 + 1 = 10
    digits[i]++

    // 10 % 10 = 0 求余 看尾数 +1 是否等于 10
    digits[i] %= 10

    // 如果一直加 1 后 不等于 0 所以就是正常情况
    // 比如[4, 9, 9]  加到 4 发现不需要补位了 直接返回 数组就可以
    if (digits[i] !== 0) {
      return digits
    }
  }

  // 上面都不满足 说明是 全为 9 的情况 [9,9,9] 需要进一位 前面补1 即可
  return [1, ...digits]
}
// @lc code=end
