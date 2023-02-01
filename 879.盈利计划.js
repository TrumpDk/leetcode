/*
 * @lc app=leetcode.cn id=879 lang=javascript
 *
 * [879] 盈利计划
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    // m个任务需要n个人产生至少minProfit利润的方案总数
    const m = group.length;
    let mod = 1e9+7;

    const dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0).map(item => new Array(minProfit + 1).fill(0)));

    for (let index = 0; index <= n; index++) {
        dp[0][index][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        let g = group[i-1], p = profit[i-1];
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= minProfit; k++) {
                dp[i][j][k] = dp[i-1][j][k];
                if (j >= g) {
                    dp[i][j][k] += dp[i-1][j-g][Math.max(0, k-p)];
                    dp[i][j][k] %= mod;
                }
            }
        }
    }

    return dp[m][n][minProfit]

};
 // @lc code=end

