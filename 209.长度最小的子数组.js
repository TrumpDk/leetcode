/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 const minSubArrayLen = (s, nums) => {
    let minLen = Infinity;
    let i = 0;
    let j = 0;
    let sum = 0;
    while (j < nums.length) {
      sum += nums[j];
      // 存在右边值相当大的可能 左边得滑动不止一个目标
      while (sum >= s) {
        minLen = Math.min(minLen, j - i + 1);
        sum -= nums[i];
        i++;
      }
      j++;
    }
    return minLen === Infinity ? 0 : minLen;
  };
// @lc code=end

