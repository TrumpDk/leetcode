/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const c = Math.floor((n + t - 1) / t) * (r - 1);
    const mat = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let i = 0, x = 0, y = 0; i < n; ++i) {
        mat[x][y] = s[i];
        // 移动坐标需要考虑清楚而已
        if (i % t < r - 1) {
            ++x; // 向下移动
        } else {
            --x;
            ++y; // 向右上移动
        }
    }
    const ans = [];
    for (const row of mat) {
        for (const ch of row) {
            if (ch !== 0) {
                ans.push(ch);
            }
        }
    }
    return ans.join('');
};
// @lc code=end

