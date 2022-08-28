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
  //     let minLen = Infinity;
  //     let i = 0;
  //     let j = 0;
  //     let sum = 0;
  //     while (j < nums.length) {
  //       sum += nums[j];
  //       // 存在右边值相当大的可能 左边得滑动不止一个目标
  //       while (sum >= s) {
  //         minLen = Math.min(minLen, j - i + 1);
  //         sum -= nums[i];
  //         i++;
  //       }
  //       j++;
  //     }
  //     return minLen === Infinity ? 0 : minLen;

  const length = nums.length;
  const sums = [0]
  let ans = Number.MAX_VALUE;
  for (let index = 1; index <= length; index++) {
      sums[index] = sums[index - 1] + nums[index - 1]
  }

  for (let index = 1; index <= length; index++) {
      // 通过保存前一项的和确定范围
      const temp = sums[index - 1] + target;

      const bound = binarySearch(sums, index, length, temp)
      if (bound !== -1) {
          ans = Math.min(ans, bound - (index - 1))
      }
  }

  return ans === Number.MAX_VALUE ? 0 : ans;

};

const binarySearch = (a, l, r, target) => {
  while (l < r) {
      const mid = (l + r) >> 1;
      if (a[mid] < target) {
          l = mid + 1
      } else {
          r = mid
      }
  }

  return a[l] >= target ? l : -1
}
// @lc code=end

