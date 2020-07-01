/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (44.37%)
 * Likes:    2788
 * Dislikes: 61
 * Total Accepted:    485.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 *
 *
 * But the following [1,2,2,null,3,null,3] is not:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 *
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 * @description 检测二叉树是否是对称的
 */
var isSymmetric = function(root) {
  const isSame = (left, right) => {
    // 如果根节点 都是空的 那么他们相等
    if (left === null && right === null) {
      return true
    }
    // 如果一个根节点为空 另外一个不是 那么他们就相等
    if (left === null || right === null) {
      return false
    }
    // 先比较根节点 是否相同
    // 再比较叶子节点 是否对称
    return (
      left.val === right.val &&
      isSame(left.left, right.right) &&
      isSame(left.right, right.left)
    )
  }
  return isSame(root, root)
}
// @lc code=end
