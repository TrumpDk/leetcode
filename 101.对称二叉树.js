/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {

    const compare = (left, right) => {
        // 这里return的结果是每次递归当前所遍历到的节点的判断情况，并不是最终结果
        if (left === null && right !== null || left !== null && right === null) {
            return false;
        } else if (left === null && right === null) {
            return true;
        } else if (left.val !== right.val) {
            return false;
        }
        let outSide = compare(left.left, right.right);
        let inSide = compare(left.right, right.left);
        return outSide && inSide;
    }
    if (root === null) {
        return true;
    }
    return compare(root.left, root.right);
};
// @lc code=end

