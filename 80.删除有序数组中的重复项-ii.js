/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[left] === nums[i]) {
            if (i - left > 1) {
                left = i;
                for (let j = i + 1; j < nums.length; j++) {
                    if (nums[j] !== nums[i]) {
                        nums[i] = nums[j]
                        i += 1
                    }
                }
            }
        } else {
            left = i
        }
    }
    return left + 1;
};
// @lc code=end

