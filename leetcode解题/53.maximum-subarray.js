/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (44.55%)
 * Likes:    5176
 * Dislikes: 201
 * Total Accepted:    641.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 卡在 第 200 关 内存不够
var maxSubArray = function(nums) {
  const sum = (nums) => nums.reduce((num, v) => (num += v), 0)
  const group = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] >= 0) {
          group.push(sum(nums.slice(i, j + 1)))
        }
      }
    }
  }
  if (!group.length) {
    return Math.max(...nums)
  }
  return Math.max(...group)
}

// @lc code=end
