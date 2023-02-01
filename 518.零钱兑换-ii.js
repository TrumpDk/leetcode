/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const m = coins.length;
    const n = amount;

    let dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0))
    dp[0][0] = 1;

    for (let i = 1; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            dp[i][j] = dp[i - 1][j];
            for (let k = 1; k * coins[i - 1] <= j; k++) {
                    dp[i][j] += dp[i - 1][j - k * coins[i - 1]];
            }
        }
    }

    return dp[m][n]
};
// @lc code=end

