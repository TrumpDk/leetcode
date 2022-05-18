/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let temp = [];
    let tempArray = [];
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        tempArray.push(nums[i])
        if (n < k) {
            n++;
        }
        if (n >= k) {
            temp.push(Math.max(...tempArray));
            tempArray.shift()
        }
    }
    return temp;
};
// @lc code=end

