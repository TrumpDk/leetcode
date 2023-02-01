/*
 * @lc app=leetcode.cn id=1155 lang=java
 *
 * [1155] 掷骰子的N种方法
 */

// @lc code=start
class Solution {
    int mod = (int)1e9+7;
    public int numRollsToTarget(int n, int m, int t) {
        int[][] f = new int[n + 1][t + 1];
        f[0][0] = 1;
        // 枚举物品组（每个骰子）
        for (int i = 1; i <= n; i++) {
            // 枚举背包容量（所掷得的总点数）
            for (int j = 0; j <= t; j++) {
                // 枚举决策（当前骰子所掷得的点数）
                for (int k = 1; k <= m; k++) {
                    if (j >= k) {
                        f[i][j] = (f[i][j] + f[i-1][j-k]) % mod;
                    }
                }
            }
        } 
        return f[n][t];
    }
}
// https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-rsy8/
// @lc code=end

