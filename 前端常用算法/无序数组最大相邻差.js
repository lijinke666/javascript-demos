/**
 * @name 无序数组最大相邻差
 * @description  通过冒泡排序 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param {*} arr
 */

const maxDiff = (arr) => {
  let temp
  let result = 0

  // 先冒泡排序
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < arr[i + 1] && (arr[i + 1] - arr[i] > result)) {
      result = arr[i + 1] - arr[i]
    }
  }
  return result
}

// console.log(maxDiff([2, 6, 3, 4, 5, 10, 9]))   // 3

/**
 * @name 无序数组最大相邻差
 * @description  通过计数排序 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param {*} arr
 */

const maxDiff2 = (arr) => {

  // 1. 找到最大值 max 和 最小值 min 的区间长度 k (k = max - min + 1)
  const [min, max] = [Math.min(...arr), Math.max(...arr)]
  const diff = max - min + 1
  let result = 0

  // 2. 创建一个 对应长度的空数组
  const diffArray = new Array(diff).fill(0)

  // 3. 遍历原数组, 计数
  for (let i = 0; i < arr.length; i++) {
    diffArray[arr[i] - min]++
  }

  // 4. 统计 最大连续出现 0 值的次数 +1  即为最大差值

  for (let i = 0; i < diffArray.length; i++) {
    if (diffArray[i] === 0 || diffArray[i + 1] === 0) {
      result += 1
    }
  }
  return result
}

console.log(maxDiff2([2, 6, 3, 4, 5, 10, 9]));  // 3
