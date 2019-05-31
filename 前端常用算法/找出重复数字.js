/**
 * @description 找出重复数字
 * @param  {...number} num
 */

// 双重循环 暴力版  时间复杂度 O(n^2)
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

console.log(repeat(3, 1, 2, 5, 4, 9, 7, 2))   // [2]
console.log(repeat(3, 1, 2, 5, 4, 9, 7, 2, 1)) // [2,1]
