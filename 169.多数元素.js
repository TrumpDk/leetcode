/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    // 有意思
    const sorted = nums.sort((a, b) => a -b);

    return sorted[Math.floor(sorted.length / 2)]

    
};
// @lc code=end

