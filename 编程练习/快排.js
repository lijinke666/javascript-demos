function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const middleIndex = Math.floor(arr.length / 2)
  const middle = arr.splice(middleIndex, 1)

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= middle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(middle, quickSort(right))
}

console.log(quickSort([3, 4, 111, 10, 23]))
