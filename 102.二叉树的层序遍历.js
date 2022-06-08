/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    const ret = [];

    if (!root) {
        return []
    }

    let q = [];

    q.push(root)

    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([])
        // 一边shift 一边push 应该有个记录长度的变量 储存应该shift次数
        for (let i = 0; i < currentLevelSize; i++) {
            const item = q.shift()
            ret[ret.length - 1].push(item.val)
            if (item.left) q.push(item.left)
            if (item.right) q.push(item.right) 
        }
    }
    return ret
};
// @lc code=end

