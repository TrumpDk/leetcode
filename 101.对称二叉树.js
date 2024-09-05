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

    // const compare = (left, right) => {
    //     // 这里return的结果是每次递归当前所遍历到的节点的判断情况，并不是最终结果
    //     if (left === null && right !== null || left !== null && right === null) {
    //         return false;
    //     } else if (left === null && right === null) {
    //         return true;
    //     } else if (left.val !== right.val) {
    //         return false;
    //     }
    //     let outSide = compare(left.left, right.right);
    //     let inSide = compare(left.right, right.left);
    //     return outSide && inSide;
    // }
    // if (root === null) {
    //     return true;
    // }
    // return compare(root.left, root.right);

    if (root === null) {
        return true
    }

    let queue = [];

    queue.push(root.left);
    queue.push(root.right);
    console.log(root.right, root.left)


    while (queue.length > 0) {
        // to loop each tree node at the same level
        // let those items line up in the queue
        // record nodes length of each tree node level
        // use stack to push and pop out items to see if there is any items left, if yes it is not symmetrical

        const stack = [];

        const length = queue.length;
        const middle = length >> 1;

        for (let index = 0; index < length; index++) {
            const item = queue.shift()
            if (index < middle) {
                stack.push(item === null ? null : item.val)
            } else {   
                const _length = stack.length;
                if (stack[_length - 1] === (item === null ? null : item.val)) {
                    stack.pop();
                }
            }
            if (item) queue.push(item.left)
            if (item) queue.push(item.right)
        }

        if (stack.length !== 0) return false; 

    }

    return true

};
// @lc code=end

