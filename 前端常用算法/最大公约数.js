
/**
 * @name 最大公约数
 * @description 10 的 约数 1,2,5,10 , 8 的 约数 1, 2 ,4 ; 2就是 2和8最大公约数
 * @param {*} a
 * @param {*} b
 */

// 暴力枚举法
const getMaxCommonDivisor = (a, b) => {
  const [min, max] = [Math.min(a, b), Math.max(a, b)]
  if (max % min === 0) {
    return min
  }

  for (let i = min / 2; i > 1; i--) {
    if (min % i === 0 && max % i === 0) {
      return i
    }
    continue
  }
}

console.log(getMaxCommonDivisor(100, 50))    // 50
console.log(getMaxCommonDivisor(100, 80))   // 20
console.log(getMaxCommonDivisor(27, 14))    // undefined

/**
 * @name 辗转相除法
 * @description 两个正整数 a,b (a>b) 它们的最大公约数 =  a / b 的余数 c 和 b 之间的最大公约数
 * @param {*} a
 * @param {*} b
 */
const getMaxCommonDivisor2 = (a, b) => {
  const [min, max] = [Math.min(a, b), Math.max(a, b)]
  if (max % min === 0) {
    return min
  }
  return getMaxCommonDivisor2(max % min, min)
}

console.log(getMaxCommonDivisor2(25, 5))    // 5
console.log(getMaxCommonDivisor2(100, 8))    // 4
console.log(getMaxCommonDivisor2(27, 14))    // 1

/**
 * @name 更相减损术
 * @description 两个正整数 a,b (a>b) 它们的最大公约数 =  a - b 的差值 c 和 b 之间的最大公约数
 * @param {*} a
 * @param {*} b
 */
const getMaxCommonDivisor3 = (a, b) => {
  const [min, max] = [Math.min(a, b), Math.max(a, b)]
  if (max % min === 0) {
    return min
  }
  return getMaxCommonDivisor3(max - min, min)
}

console.log(getMaxCommonDivisor3(25, 5))    // 5
console.log(getMaxCommonDivisor3(100, 8))    // 4
console.log(getMaxCommonDivisor3(27, 14))    // 1

