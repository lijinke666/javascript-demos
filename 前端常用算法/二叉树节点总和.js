const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}


function countTree(root, sum = 0) {
  if (!root) {
    return 0
  }
  sum+=root.val
  if (!root.left && !root.right) {
    return sum
  }
  return root.val + countTree(root.left, sum) + countTree(root.right, sum)
}

console.log(countTree(tree));
