/**
 * @name 无序数组最大相邻差
 * @description 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param {*} arr
 */

const maxDiff = (arr) => {
  let temp
  let result = 0

  // 先冒泡排序
  for(let i = 1; i < arr.length; i++) {
    for(let j= 0; j <= arr.length - i; j++) {
      if(arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  for(let i = 0; i<= arr.length; i++) {
    if(arr[i] < arr[i +1 ] && (arr[i + 1] - arr[i] > result)) {
      result = arr[i + 1] - arr[i]
    }
  }
  return result
}

console.log(maxDiff([2, 6, 3, 4, 5, 10, 9]))   // 3
