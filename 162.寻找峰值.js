/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        // 中间值是首尾相加除以2得到 一般取左边为准 所以需要向下取整
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return r
};
// @lc code=end

