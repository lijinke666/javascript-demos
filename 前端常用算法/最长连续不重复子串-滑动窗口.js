function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLen = 0;
  const map = new Map();

  for (let end = 0; end < s.length; end++) {
    const v = s[end];

    if (map.has(v) && map.get(v) >= start) {
      start = map.get(v) + 1;
    }

    map.set(v, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}
// 示例测试：
console.log(lengthOfLongestSubstring('abcabcbb')); // 输出: 3 ("abc")
console.log(lengthOfLongestSubstring('bbbbb')); // 输出: 1 ("b")
console.log(lengthOfLongestSubstring('pwwkew')); // 输出: 3 ("wke")
console.log(lengthOfLongestSubstring('')); // 输出: 0 ("")
console.log(lengthOfLongestSubstring('au')); // 输出: 2 ("au")
