/**
 * 找出连续子数字的最大和
 * @description 时间复杂度 O(n)
 * @param {*} arr
 * @example maxSum([1, -3, 9, 10, -2, 3, -6, 5]) => [9, 10, -2, 3] => 20
 */
function maxSum(arr) {
  let sum = arr[0]
  let maxSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    // 先比较第一个a和 第二个b 的和 , 如果a+b都小于 第二个的话  说明当中有负数
    sum = Math.max(sum + arr[i], arr[i])
    maxSum = Math.max(sum, maxSum)
  }

  return maxSum
}

console.log(maxSum([1, -3, 9, 10, -2, 3, -6, 5]))
