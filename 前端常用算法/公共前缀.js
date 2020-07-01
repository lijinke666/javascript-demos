function longestCommonPrefix(arr) {
  let result = ""
  for (let i = 0; i < arr.length; i++) {
    const current = arr.map((v) => v.substr(i, 1))
    const unique = [...new Set(current)]
    if (unique.length !== 1) {
      break
    }
    result += current[0]
  }

  return result
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['my', 'my', 'my']))
console.log(longestCommonPrefix(['my', 'test', '111']))
