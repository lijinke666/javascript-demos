/**
 * @description 一个无序数组里有 99 个不重复的正整数, 范围 1 - 100  找到缺少的整数
 * @description 时间复杂度 O(1) 空间复杂度 O(n)
 * @param {*} arr
 */

const findNumberOfArray = (arr) => {
  const hash = new Map()
  Array.from({ length: 100 }).forEach((_, i) => {
    const key = i + 1
    hash.set(key, key)
  })

  arr.forEach(item => {
    hash.delete(Number(item))
  })

  return hash.keys()
}

const arr = Object.keys(Array.from({ length: 100 }))
arr.splice(0, 1)
console.log(findNumberOfArray(arr))     // 100


/**
 *  @description 第二种解法 先算出 1+2+3...+100 累加和, 依次减去数组里的元素,得到的差值就是缺失的整数
 *  @description 时间复杂度 O(n) 空间复杂度 O(1)
 */
const findNumberOfArray2 = (arr) => {
  const max = Object.keys(Array.from({ length: 100 })).reduce((n, value)=>{
    n += Number(value)
    return n
  },0)


  const min = arr.reduce((n, value)=>{
    n += Number(value)
    return n
  },0)

  return max - min
}

console.log(findNumberOfArray2(arr))
