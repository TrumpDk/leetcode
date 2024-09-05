/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }
  const queue = [root];
  let flag = true;
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; ++i) {
      const cur = queue.shift();
      if (flag) {
        level.push(cur.val);
      } else {
        level.unshift(cur.val);
      }
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    ans.push(level);
    flag = !flag;
  }
  return ans;
};
// @lc code=end
