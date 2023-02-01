/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    let sum = 0;
    for (let item of stones) {
        sum += item;
    }
    let target = sum >> 1, m = stones.length, n = target;
    const dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        const x = stones[i - 1];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= x) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - x] + x);
            }
        }
    }

    return Math.abs(sum - 2 * dp[m][n])
};
// @lc code=end

