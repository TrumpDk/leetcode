/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 统计各位数字都不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let rest = 10;
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return 10
    }
    let start = 9;
    for(let i = 0; i < n - 1; i++) {
        start *= 9 - i;
        rest += start
    }
    return rest;
};
// @lc code=end

