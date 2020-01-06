/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (41.18%)
 * Likes:    1550
 * Dislikes: 204
 * Total Accepted:    459.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 *
 * You may assume no duplicates in the array.
 *
 * Example 1:
 *
 *
 * Input: [1,3,5,6], 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [1,3,5,6], 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: [1,3,5,6], 7
 * Output: 4
 *
 *
 * Example 4:
 *
 *
 * Input: [1,3,5,6], 0
 * Output: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target > nums[nums.length]) {
    return nums.length
  }
  if (target < nums[0]) {
    return 0
  }
  let matchedIndex = -1
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    if (element === target) {
      matchedIndex = index
      break
    }
  }
  if (matchedIndex === -1) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < target) {
        matchedIndex = i + 1
        break
      }
      matchedIndex = 0
    }
  }
  return matchedIndex
}
