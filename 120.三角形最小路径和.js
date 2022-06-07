/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let m = triangle.length;
    let temp = new Array(m);

    for (let i = 0; i < m; i++) {
        temp[i] = new Array(triangle[i].length);
    }

    for (let i = m -1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i === m - 1) {
                temp[i][j] = triangle[i][j]
            } else {
                temp[i][j] = Math.min(temp[i + 1][j], temp[i + 1][j + 1]) + triangle[i][j]
            }
        }
    }

    return temp[0][0]
};
// @lc code=end

