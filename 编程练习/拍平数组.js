// 原生 拍平
// console.log([1, [2], [3, [4]]].flat()); // [1,2,3, [4]]
// // 指定拍平层级
// console.log([1,[2],[3, [4]]].flat(2));  // [1,2,3,4]

// 通过 reduce + 递归 实现
function flattenReduce(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flattenReduce(next) : next)
  }, [])
}

console.log(flattenReduce([1, [2], [3, [4]]]))

// 通过递归实现
function flatten(arr) {
  if (!arr.length) {
    return []
  }
  // 每次取第一个下标, 如果是数组, 继续递归, 否则直接 concat
  const head = arr[0]
  if (Array.isArray(head)) {
    arr[0] = flatten(head)
  } else {
    arr[0] = [arr[0]]
  }
  return arr[0].concat(flatten(arr.slice(1)))
}

console.log(flatten([1, [2]]))
console.log(flatten([1, [2], [3], [[4, 5]]]))

// 指定拍平层级, 只需要加一个 n 每次 -- 即可
function flattenDepth(arr, n) {
  if (!arr.length) {
    return []
  }
  if (n === 0) {
    return arr
  }
  // 每次取第一个下标, 如果是数组, 继续递归, 否则直接 concat
  const head = arr[0]
  if (Array.isArray(head)) {
    arr[0] = flattenDepth(head, n - 1)
  } else {
    arr[0] = [arr[0]]
  }
  return arr[0].concat(flattenDepth(arr.slice(1), n))
}

function flattenReduceDepth(arr, n) {
  return arr.reduce((prev, next) => {
    return prev.concat(
      Array.isArray(next) && n >= 1 ? flattenReduceDepth(next, n - 1) : next
    )
  }, [])
}

console.log(flattenReduceDepth([1, [2], [3], [[4, 5]]], 2))
console.log(flattenReduceDepth([1, [2], [3], [[4, [5, [3, 4]]]]], 2))
console.log(flattenReduceDepth([1, [2], [3], [[4, [5, [3, 4]]]]], 3))
console.log(flattenDepth([1, [2], [3], [[4, 5]]], 2))
console.log(flattenDepth([1, [2], [3], [[4, [5, [3, 4]]]]], 2))
console.log(flattenDepth([1, [2], [3], [[4, [5, [3, 4]]]]], 3))
