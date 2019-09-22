/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.22%)
 * Likes:    3363
 * Dislikes: 156
 * Total Accepted:    698.4K
 * Total Submissions: 1.9M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */

const map = {
  '(': ')', '{', '}', '['
 }
var isValid = function(s) {
  const group = s.split('').reduce((obj, v) => {
    if (!obj[v]) {
      obj[v] = 1
    } else {
      obj[v]++
    }
    return obj
  }, {})

  if(Object.keys(group).every((key)=> group[key]))
  console.log(group)
}

console.log(isValid('()'))
