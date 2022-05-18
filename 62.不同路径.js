/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let temp = new Array(m);
    for (let i = 0; i < m; i++) {
        temp[i] = new Array(n).fill(0)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                temp[i][j] = 1;
            }else {
                temp[i][j] = temp[i- 1][j] + temp[i][j - 1];
            }
        }
    }

    return temp[m - 1][n - 1]
};
// @lc code=end

