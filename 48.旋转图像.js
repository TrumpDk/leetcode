/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let temp = undefined;
    let nums = matrix[0].length - 1;
    for (let i = 0; i <= nums; i++) {
        for (let j = 0; j <= nums - i; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[nums - j][nums - i];
            matrix[nums - j][nums - i] = temp
        }
    }

    for (let i = 0; i <= (nums / 2); i++) {
        for (let j = 0; j <= nums; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[nums - i][j];
            matrix[nums - i][j] = temp;
        }
    }

    return matrix
};
// @lc code=end

