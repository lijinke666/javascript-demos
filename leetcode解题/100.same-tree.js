/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (50.73%)
 * Likes:    1373
 * Dislikes: 45
 * Total Accepted:    433.6K
 * Total Submissions: 849.7K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given two binary trees, write a function to check if they are the same or
 * not.
 *
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 *
 * Example 1:
 *
 *
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 *
 * ⁠       [1,2,3],   [1,2,3]
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input:     1         1
 * ⁠         /           \
 * ⁠        2             2
 *
 * ⁠       [1,2],     [1,null,2]
 *
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 *
 * ⁠       [1,2,1],   [1,1,2]
 *
 * Output: false
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * @description 自己的解法 先将 二叉树 递归转换成 数组 然后比较两个数组即可
 */
var isSameTree = function(p, q) {
  const tree2Array = (tree) => {
    // 如果没有 left 和 right 说明他是一个叶子节点
    if (!tree || tree.val === null) {
      return []
    }
    if (!tree.left && !tree.right) {
      return tree.val
    }
    return [tree.val].concat(tree2Array(tree.left), tree2Array(tree.right))
  }
  const left = tree2Array(p)
  const right = tree2Array(q)

  if (left.length !== right.length) {
    return false
  }

  return left.every((v, i) => {
    console.log(v, right[i], typeof v, typeof right[i])
    return v === right[i]
  })
}
// @lc code=end
