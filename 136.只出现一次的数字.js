/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// bitwise-not
// fot example 0^0 = 0; 1^2^1^2 = 0  1^2=3
// so the remaining one is the single item of the array
var singleNumber = function(nums) {
    let result = 0;
    for (let item of nums) {
        result ^= item;
    }

    return result;
};
// @lc code=end

