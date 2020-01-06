/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (53.27%)
 * Likes:    1449
 * Dislikes: 2874
 * Total Accepted:    489K
 * Total Submissions: 917.5K
 * Testcase Example:  '"III"'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 *
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 *
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 *
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 *
 * Example 1:
 *
 *
 * Input: "III"
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: "IV"
 * Output: 4
 *
 * Example 3:
 *
 *
 * Input: "IX"
 * Output: 9
 *
 * Example 4:
 *
 *
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 *
 *
 * Example 5:
 *
 *
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 */

const getMap = () => {
  const map = new Map()
  const dependencies = new Map()

  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)

  dependencies.set('I', ['V', 'X'])
  dependencies.set('X', ['L', 'C'])
  dependencies.set('C', ['D', 'M'])

  return [map, dependencies]
}

function removeCharacter(str, charPos) {
  part1 = str.substring(0, charPos)
  part2 = str.substring(charPos + 1, str.length)
  return part1 + part2
}

/**
 * @param {string} s
 * @return {number}
 * 竟然做出来了哈哈 ORZ
 */
const [map, dependencies] = getMap()
const getHasDependencies = (s) => {
  return true
}

var romanToInt = function(s, n = 0) {
  const hasDependencies = getHasDependencies()
  if (s.length === (hasDependencies ? 0 : 1)) {
    return n
  }
  const currentStr = s.substr(0, 1)
  const nextStrIndex = s.indexOf(currentStr) + 1
  const nextStr = s.substr(nextStrIndex, 1)
  const currentDependencies = dependencies.get(currentStr)
  if (nextStr && currentDependencies && currentDependencies.includes(nextStr)) {
    n += map.get(nextStr) - map.get(currentStr)
    return romanToInt(s.substr(nextStrIndex + 1, s.length), n)
  } else {
    n += map.get(currentStr)
    return romanToInt(removeCharacter(s, 0), n)
  }
}
