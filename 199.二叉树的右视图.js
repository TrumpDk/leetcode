/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {

    let result = []
    if (!root) {
        return result
    }

    let q = []

    q.push(root)

    while (q.length !== 0 ) {
        const length = q.length
        for (let i = 1; i <= length; i++) {
            const item = q.shift()
            if (i === length ) {
                result.push(item.val)
            }
            if (item.left) q.push(item.left)
            if (item.right) q.push(item.right)
        }
    }

    return result
};
// @lc code=end

