/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.13%)
 * Likes:    1614
 * Dislikes: 1470
 * Total Accepted:    544.1K
 * Total Submissions: 1.6M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   const indexMap = strs.reduce((obj, v, i) => {
//     obj[v.length] = i
//     return obj
//   }, {})

//   const minLengthIndex = indexMap[Math.min(...Object.keys(indexMap))]
//   console.log(strs.every((s) => s.length === strs[0].length))
//   const minLengthStr =
//     (strs.every((s) => s.length === strs[0].length)
//       ? strs[0]
//       : strs.find((s, i) => i === minLengthIndex)) || ''

//   return minLengthStr
//     .split('')
//     .reduce((arr, s, i) => {
//       if (
//         strs.every((str, j) => {
//           return str.substr(i, i) === s
//         })
//       ) {
//         arr.push(s)
//       }
//       return arr
//     }, [])
//     .join('')
// }
var longestCommonPrefix = function(strs, result = '') {
  const firstArrays = strs.map((str) => str.slice(0, 1))
  const equalArray = [...new Set(firstArrays)].filter(Boolean)
  const isEqual =
    equalArray.length === 1 &&
    firstArrays.every((s) => s.length === firstArrays[0].length)
  if (!isEqual) {
    return result
  }
  const newStrsArray = strs.map((str) => str.slice(1, str.length))
  return result + longestCommonPrefix(newStrsArray, equalArray[0])
}

// console.log(longestCommonPrefix(['']))
// console.log(longestCommonPrefix(['', 'b']))
// console.log(longestCommonPrefix(['aca', 'cba']))
console.time('start')
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.timeEnd('start')
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
