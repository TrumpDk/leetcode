/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;
    const head = postorder[inorder.length - 1];
    const index = inorder.indexOf(head);
    let node = new TreeNode(head);
    node.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    node.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1))
    return node;
};
// @lc code=end

