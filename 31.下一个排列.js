/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let temp = undefined;
    const len = nums.length - 1;
    let j = len;
    while (j > 0) {
        if (nums[j] > nums[j - 1]) {
            temp = nums[j - 1];
            nums[j - 1] = nums[j];
            nums[j] = temp;
            return nums
        } else {
            j--
        }
    }

    return nums.reverse();
};
// @lc code=end

