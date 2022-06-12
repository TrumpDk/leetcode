/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function (grid) {

//     const m = grid.length;
//     const n = grid[0].length;

//     let q = []
//     let count = 0;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] == 1) {
//                 ++count;
//                 q.push([i, j])
//                 grid[i][j] = 0;
//                 // 有中间行的项 往上延伸的可能 所以还是要检测四面八方
//                 while (q.length !== 0) {
//                     const [row, col] = q.shift();
//                     if (row + 1 < m && grid[row + 1][col] == 1) {
//                         q.push([row + 1, col])
//                         grid[row + 1][col] = 0
//                     }
//                     if (col + 1 < n && grid[row][col + 1] == 1) {
//                         q.push([row, col + 1])
//                         grid[row][col + 1] = 0
//                     }
//                     if (col - 1 >= 0 && grid[row][col - 1] == 1) {
//                         q.push([row, col - 1])
//                         grid[row][col - 1] = 0
//                     }
//                     if (row - 1 >= 0 && grid[row - 1][col] == 1) {
//                         q.push([row - 1, col])
//                         grid[row - 1][col] = 0
//                     }
//                 }
//             }
//         }
//     }

//     return count
// }


var numIslands = function (grid) {

    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    const dfs = (row, col) => {
        if (row >= m || col >= n || row < 0 || col < 0 || grid[row][col] == 0) {
            return
        }
        grid[row][col] = 0
        dfs(row + 1, col)
        dfs(row, col + 1)
        dfs(row , col - 1)
        dfs(row - 1, col)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                ++count;
                dfs(i, j);
            }
        }
    }

    return count
}
// @lc code=end

