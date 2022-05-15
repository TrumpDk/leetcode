/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let right = height.length - 1;
    let left = 0;
    let sum = 0;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        leftMax = height[left] > leftMax ? height[left] : leftMax;
        rightMax = height[right] > rightMax ? height[right] : rightMax;
        if (height[left] < height[right]) {
            sum += leftMax - height[left]
            ++left;
        } else {
            sum += rightMax - height[right]
            --right
        }
    }

    return sum;
};
// @lc code=end

