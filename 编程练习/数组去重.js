// 第一种 利用 Set 数据结构
function uniqueArray(arr) {
  return [...new Set(arr)]
}

console.log(uniqueArray([1, 1, 1, 2, 3]))

// 第二种 利用字典
function uniqueArray2(arr) {
  const map = new Map()
  const list = []
  arr.forEach((v) => {
    if (!map.has(v)) {
      map.set(v, true)
      list.push(v)
    }
  })
  return list
}

console.log(uniqueArray2([1, 1, 1, 2, 3]))

// 第三种 利用 快慢指针
// 时间复杂度 O(nlogn) 空间复杂度O(1)
function uniqueArray3(arr) {
  // 首先进行升序排序
  arr.sort()

  let slowP = 0
  for (let fastP = 0; fastP < arr.length; fastP++) {
    // 如果前后不相等 让 慢指针 + 1 并讲当前快指针下标值 赋给慢指针
    // 这样循环到最后 慢指针 之前的下标就是不重复的值
    if (arr[fastP] !== arr[slowP]) {
      slowP++
      arr[slowP] = arr[fastP]
    }
  }

  return arr.slice(0, slowP + 1)
}

console.log(uniqueArray3([1, 2, 3, 22, 3, 3, 1]))
