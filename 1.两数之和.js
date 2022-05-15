/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tempMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!tempMap.has(nums[i])) {
            tempMap.set(target - nums[i], i);
        } else {
            return [tempMap.get(nums[i]), i]
        }
    }
    return null;
};
// @lc code=end

