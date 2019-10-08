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
// 暂时想到的思路 找到首尾都是 正整数的数组 比较最大的一组?
// var maxSubArray = function(nums) {
//   let a, b
//   const sum = (nums) => nums.reduce((num, v) => (num += v), 0)
//   const group = []
//   const reverseNums = [...nums].reverse()
//   for (let i = 0; i < nums.length; i++) {
//     const firstIndex = nums.findIndex((n) => n >= 0 && n !== a)
//     const lastIndex = reverseNums.findIndex((n) => n >= 0 && b !== n)
//     console.log('firstIndex: ', firstIndex, lastIndex)
//     const _lastIndex = nums.length - lastIndex
//     console.log(a, b)
//     if (firstIndex === -1 && lastIndex === -1) {
//       group.push([Math.max(...nums)])
//     } else {
//       a = nums[firstIndex]
//       b = nums[_lastIndex - 1]
//       group.push(nums.slice(firstIndex, _lastIndex))
//     }
//   }
//   console.log('group: ', group)
//   return Math.max(...group.map(sum))
// }

var maxSubArray = function(nums) {
  const sum = (nums) => nums.reduce((num, v) => (num += v), 0)
  const group = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      continue
    }
    for (let j = i; j < nums.length; j++) {
      if (nums[j] >= 0) {
        group.push(nums.slice(i, j + 1))
      }
    }
  }
  const result = Math.max(...group.map(sum))
  if (result === -Infinity) {
    return Math.max(...nums)
  }
  return result
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([-1, -2]))
console.log(maxSubArray([8, -19, 5, -4, 20]))
console.log(maxSubArray([1, 1, -2]))

// @lc code=end
