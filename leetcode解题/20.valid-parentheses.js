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
// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// const map = {
//   '(': ')',
//   ')': '(',
//   '{': '}',
//   '}': '{',
//   '[': ']',
//   ']': '['
// }
// var isValid = function(s) {
//   let result = false
//   if (!s) {
//     return true
//   }
//   if (s.length % 2 !== 0) {
//     return false
//   }
//   const strings = s.split('')
//   const group = strings.reduce((obj, v) => {
//     if (!obj[v]) {
//       obj[v] = 1
//     } else {
//       obj[v]++
//     }
//     return obj
//   }, {})

//   result = Object.keys(group).every((key) => {
//     const open = group[key]
//     const close = group[map[key]]
//     return open === close
//   })

//   if (result) {
//     for (let index = 0; index < strings.length / 2; index++) {
//       const element = strings[index]
//       if (
//         element === map[strings[strings.length - index - 1]] ||
//         (strings[index * 2] &&
//           strings[index * 2 + 1] &&
//           strings[index * 2] === map[strings[index * 2 + 1]])
//       ) {
//         result = true
//       } else {
//         console.log(1)
//         result = false
//       }
//     }
//   }

//   return result
// }

/**
 * @description FIXME: 这道题没做出来
 * 正确解法
 * 使用 栈  push 入栈 pop 出栈
 * 1. 遇到左括号 入栈 遇到 右括号出栈
 * 2. 最后 栈为空 则是一组无效的括号
 */
var isValid = function(s) {
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (Object.keys(map).includes(current)) {
      stack.push(current)
    } else {
      // 此时当前栈 里面都是 左括号 进 else 的都是 右括号
      // 用左括号 map 对应的 隐射 与 当前 括号比较 如果不相等 则无效
      const last = stack.pop()
      if (map[last] !== current) {
        return false
      }
    }
  }
  if (stack.length) {
    return false
  }
  return true
}
