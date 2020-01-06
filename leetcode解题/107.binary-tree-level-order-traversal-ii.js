/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (48.22%)
 * Likes:    890
 * Dislikes: 169
 * Total Accepted:    257.4K
 * Total Submissions: 527.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 *
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 *
 * return its bottom-up level order traversal as:
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const result = []
  // 在递归的同时, 用一个指针 表示当前的位置
  const tree2Array = (node, index) => {
    if (node) {
      if (!result[index]) {
        result[index] = []
      }
      result[index].push(node.val)
      tree2Array(node.left, index + 1)
      tree2Array(node.right, index + 1)
    }
  }
  tree2Array(root, 0)
  return result.reverse()
}
// console.log([[15, 7], [9, 20], [3]].reverse())
// @lc code=end
