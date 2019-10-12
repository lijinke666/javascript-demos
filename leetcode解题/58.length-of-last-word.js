/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.29%)
 * Likes:    452
 * Dislikes: 1867
 * Total Accepted:    303.2K
 * Total Submissions: 938K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 *
 * Example:
 *
 *
 * Input: "Hello World"
 * Output: 5
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s.trim()) {
    return 0
  }
  const word = s.split(' ')
  const reverseWord = [...word].reverse()

  const lastIndex =
    word.length - reverseWord.findIndex((str) => !!str.trim()) - 1
  return word[lastIndex].length
}
// @lc code=end
