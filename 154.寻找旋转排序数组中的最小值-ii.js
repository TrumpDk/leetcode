/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let pivot = Math.floor((start + end) / 2);

    // 和峰值不一样 这里是和首尾相比较
    while (start < end) {
        if (nums[pivot] > nums[end]) {
            start = pivot + 1;
        } else if (nums[pivot] < nums[end]) {
            end = pivot
        } else {
            end -= 1;
        }
        pivot = Math.floor((start + end) / 2);
    }

    return nums[start]
};
// @lc code=end

