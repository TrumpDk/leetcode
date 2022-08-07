/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 这道题核心思想就是 挨个把后面的项目捡起来
// 对自己没好处的就任掉 对自己有好处的就保留
// 让后这个过程中不断统计最大和 并在最后返回即可
var maxSubArray = function(nums) {

    // let dp = new Array(nums.length);

    // dp[0] = nums[0]

    // let max = nums[0]

    // for (let item of nums) {
    //     // 前i - 1项加起来还没有第i项大 说明前面全是加了debuff
    //     dp[i] = Math.max(dp[i- 1] + nums[i], nums[i])
    //     if (max < dp[i]) {
    //         max = dp[i]
    //     }
    // }

    // return max


    // 优化写法
    // 找个变量存放临时数据 从而减小空间复杂度
    let ans = nums[0];
    let sum = 0;
    for (const num of nums) {
        if (sum > 0) {
            sum += num
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum)
    }
    return ans;
};
// @lc code=end

