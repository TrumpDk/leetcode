/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

// 中序遍历加判断是否是递增数组
// DFS如何验证 我要去复习下绿皮书 
var isValidBST = function(root) {

    if (!root) return true;

    const tempArray = [];
    let tempNumber = -Infinity;

    const middleLoop = (node) => {
        if (node.left) middleLoop(node.left);
        tempArray.push(node.val);
        if (node.right) middleLoop(node.right);
    }

    middleLoop(root);

    for (let item of tempArray) {
        if (item <= tempNumber) return false;
        tempNumber = item;
    }

    return true;
};
// @lc code=end