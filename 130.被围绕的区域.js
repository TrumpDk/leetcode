/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const oZoneMap = {};
    const m = board.length
    const n = board[0].length;

    const verify = () => {
        // depth first search to find a invalid item nearby
        if () {

        }

        if () {

        }

        if () {

        }

        if () {

        }
    }

    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                oZoneMap[`${i}${j}`] = 'O';
                board[i][j] = 'X';
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (oZoneMap[`${i}${j}`]) {
                verify()
            }
        }
    }

    return board;
};
// @lc code=end