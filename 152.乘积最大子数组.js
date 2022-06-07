/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0]
    let prevMax = nums[0]
    let prevMin = nums[0]
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++) {
        temp1 = prevMax * nums[i];
        temp2 = prevMin * nums[i];
        prevMax = Math.max(temp1, temp2, nums[i])
        prevMin = Math.min(temp1, temp2, nums[i])
        res = Math.max(prevMax, res)
    }
    return res;
};
// @lc code=end

