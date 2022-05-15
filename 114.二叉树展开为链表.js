/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 
var flatten = function (root) {
    let prev = null;
    const postOrderTraverse = (root) => {
        if (root) {
            postOrderTraverse(root.right);
            postOrderTraverse(root.left);
            buildList(root);
        }
    }

    const buildList = (root) => {
        root.right = prev;
        root.left = null;
        prev = root;
    }

    postOrderTraverse(root)

    return root;
};
// @lc code=end

