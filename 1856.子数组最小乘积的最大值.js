/*
 * @lc app=leetcode.cn id=1856 lang=javascript
 *
 * [1856] 子数组最小乘积的最大值
 */

const { stack } = require("d3");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 *  本体思路：主要是找一个区间用来得到结果，最小乘积是由一个子数组和乘以其中的最小值所得
 *  问题转换：首先找到这个最小值， 然后通过这个最小值寻找这个区间 从而找到一个最大值组成的子数组
 *  解题思路：枚举每个数组成员，将每个成员当作是某个子数组的最小值来处理，那么此时我们就要找到相
 *  对于这个成员的一个左边界和有边界。 那么如何高效率找到这个边界呢，用两个指针肯定不行的，这个
 *  时候就联想到单调栈从而将时间复杂度降低，这个时候就维护两个单调栈，里面存放的就是下一个大于自己
 *  本身每个项目，整个问题就转化成为求“下一个更大的数”这个问题。求出枚举每个最小项的子数组还不够,
 *  还要求每个子数组的和，这个时候就要借用到前缀和来搞定了。
 */
 var maxSumMinProduct = function(nums) {
    // 前缀和
    const sum = [0];
    for(let i = 1; i <= nums.length; i++) {
      sum[i] = sum[i - 1] + nums[i - 1];
    }
    // 使用单调栈求解出左侧第个严格小于该数的元素位置，和右侧第一个严格小于该数的元素的位置
    let stack = [];
    const len = nums.length;
    const right = new Array(len).fill(len);
    for(let i = 0; i < len; i++) {
      while(stack.length && nums[stack[stack.length - 1]] > nums[i]) {
        right[stack[stack.length - 1]] = i;
        stack.pop();
      }
      stack.push(i)
    }
    stack = [];
    const left = new Array(len).fill(-1);
    for(let j = len - 1; j >= 0; j--) {
      while(stack.length && nums[stack[stack.length - 1]] > nums[j]) {
        left[stack[stack.length - 1]] = j;
        stack.pop();
      }
      stack.push(j);
    }
    // 根据前缀和和left， right数组进行枚举求解
    let max = BigInt(0);
    for(let k = 0; k < len; k++) {
      const total = BigInt(sum[right[k]] - sum[left[k] + 1]) * BigInt(nums[k]);
      if (max < total) {
        max = total;
      }
    }
    return max % BigInt(1000000007);
  };
// @lc code=end

