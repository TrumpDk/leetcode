/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let temp = new Array(m);

    for (let i = 0; i < m; i++) {
        temp[i] = new Array(n).fill(0);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                temp[i][j] = 0
            } else {
                if (i === 0 && j === 0) {
                    temp[i][j] = 1
                } else if (i === 0 && j !== 0) {
                    temp[i][j] = temp[i][j - 1]
                } else if (i !== 0 && j === 0) {
                    temp[i][j] = temp[i - 1][j]
                } else {
                    temp[i][j] = temp[i - 1][j] + temp[i][j - 1];
                }
            }
        }
    }

    return temp[m - 1][n - 1];
};
// @lc code=end

