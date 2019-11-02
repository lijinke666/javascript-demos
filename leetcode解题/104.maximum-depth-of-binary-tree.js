/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (62.05%)
 * Likes:    1655
 * Dislikes: 61
 * Total Accepted:    615K
 * Total Submissions: 981.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * return its depth = 3.
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
 * @return {number}
 * @description 二叉树的最大深度 递归遍历 左右两个节点
 * 发现有节点 就 + 1
 * 最后比较左右两个节点数即可
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
}
// @lc code=end
