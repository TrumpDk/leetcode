/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let result = [];

    const gen = (temp, start, sum) => {
        // 满足结束条件就应该在此结束
        if (sum >= target) {
            if (sum === target) {
                result.push(temp.slice())
            }
            // 剩余的数字大于当前选中数字 不能相减 需要排除
            return
        }
        for (let i = start; i < candidates.length; i++) {
            temp.push(candidates[i]);
            gen(temp, i, sum + candidates[i]);
            // 上一次选择的数字大于了剩下的数字 二者相减是负数需要剔除掉
            // 有好几次遇到了这种写法
            temp.pop()
        }
    }

    gen([], 0, 0)

    return result;
};
// @lc code=end

