/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (45.06%)
 * Likes:    2781
 * Dislikes: 98
 * Total Accepted:    493.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 *
 *
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * @description 斐波那契数列
 * n = 0 1种可能 (1 步)
 * n = 1 1种可能 [1] (1 步)
 * n = 2 两种可能 [1,2]
 * n = 3 三种可能 [1,1,1] [1,2] [2,1]
 * n = n - 1 + n - 2
 */
var climbStairs = function(n) {
  // 由于 前两步(0,1)都只需要一步 所以直接从 第三步 也就是 (2) 开始
  const step = [1, 1]
  for (let i = 2; i <= n; i++) {
    step[i] = step[i - 1] + step[i - 2]
  }
  console.log(step)
  return step[n]
}

// @lc code=end
