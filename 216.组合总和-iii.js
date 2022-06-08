/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let result = [];

    const genCombination = (m, total, remain) => {
        if (remain.length === k) {
            if (total === n) {
                result.push(remain);
            }
            return
        }
        for (let j = m + 1; j <= 9; j++) {
            const temp = remain.concat([])
            if (total + j <= n) {
                temp.push(j)
                genCombination(j, total + j, temp)
            }
        }
    }

    genCombination(0, 0, []);
    return result;
};
// @lc code=end

