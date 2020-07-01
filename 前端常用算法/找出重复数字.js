/**
 * @description 找出重复数字
 * @param  {...number} num
 */

// 双重循环 暴力版  时间复杂度 O(n^2)  耗时: 0.1s
const repeat = (...num) => {
  const validatedNum = []
  const repeatNum = []
  for (let i = 0; i <= num.length; i++) {
    if(!validatedNum.includes(num[i])) {
      validatedNum.push(num[i])
    } else {
      repeatNum.push(num[i])
    }
  }
  return repeatNum
}

// console.log(repeat(3, 1, 2, 5, 4, 9, 7, 2))   // [2]
// console.log(repeat(3, 1, 2, 5, 4, 9, 7, 2, 1)) // [2,1]


// 通过字典来 优化 时间复杂度 O(n)   耗时: 0.096s
const repeatByDict = (...num) => {
  // 这里用字典来存储 => O(1)
  const validatedNum = new Map()

  const repeatNum = []
  for (let i = 0; i <= num.length; i++) {
    if(!validatedNum.has(num[i])) {
      validatedNum.set(num[i], true)
    } else {
      repeatNum.push(num[i])
    }
  }
  return repeatNum
}

console.log(repeatByDict(3, 1, 2, 5, 4, 9, 7, 2))   // [2]
console.log(repeatByDict(3, 1, 2, 5, 4, 9, 7, 2, 1)) // [2,1]
