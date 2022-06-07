/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const m = k % nums.length
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, m - 1);
    reverse(nums, m, nums.length - 1);
};

const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++
        end--
    }
}
// @lc code=end

