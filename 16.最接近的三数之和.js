/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    const sortedTarget = nums.sort((a, b) => a - b);

    let temp = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < sortedTarget.length - 1; i++) {
        if (i > 0 && sortedTarget[i - 1] === sortedTarget[i]) {
            continue;
        }

        
    }

    console.log(sortedTarget);
};
// @lc code=end

