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
