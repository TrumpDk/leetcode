/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0
    }

    let q = [];
    q.push(root)
    let depth = 0;

    while (q.length !== 0) {
        const length = q.length;

        depth ++
        for (let i = 0; i < length; i++) {
            const item = q.shift()
            if(!item.left && !item.right) {
                return depth;
            }
            if (item.left) q.push(item.left)
            if (item.right) q.push(item.right)
        }
    }
    return depth
};
// @lc code=end

