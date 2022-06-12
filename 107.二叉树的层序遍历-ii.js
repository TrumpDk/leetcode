/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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

// BFS方式我认为并不是真正的反向便利方式
// 这道题应该参考二叉树的后序遍历 采用 DFS来做更为合适
var levelOrderBottom = function(root) {
        const ret = [];
    
        if (!root) {
            return []
        }
    
        let q = [];
    
        q.push(root)
    
        while (q.length !== 0) {
            const currentLevelSize = q.length;
            let temp = [];
            // 一边shift 一边push 应该有个记录长度的变量 储存应该shift次数
            for (let i = 0; i < currentLevelSize; i++) {
                const item = q.shift()
                temp.push(item.val)
                if (item.left) q.push(item.left)
                if (item.right) q.push(item.right)
            }
            ret.unshift(temp)
        }
        return ret
};
// @lc code=end

