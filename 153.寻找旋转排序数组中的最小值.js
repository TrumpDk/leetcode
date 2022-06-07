/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const pivot = start + Math.floor((end - start) / 2);
        if (nums[pivot] < nums[end]) {
            end = pivot
        } else {
            start = pivot + 1
        }
    }
    return nums[start];
};
// @lc code=end

