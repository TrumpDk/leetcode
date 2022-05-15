/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    // 不重复 一般都要排序
    const temp = candidates.sort((a, b) => a - b);

    let result = [];

    const gen = (arr, start, sum) => {
        if (sum >= target) {
            if (sum === target) {
                console.log(arr)
                result.push(arr.slice())
            }
            return;
        }
        
        for (let i = start; i < temp.length; i++) {
            // 和三数 四数之和类似判断逻辑 过滤后面同样的位置出现相同的数的情况
            // 比如 [1,2,2,2,2,2,5] => [1,2,5]这种情况 第二位可能出现很多个2
            if (i - 1 >= start && candidates[i - 1] == candidates[i]) {
                continue;
            }
            // push当前的
            arr.push(temp[i])
            // 传入的是下一个
            gen(arr, i + 1, temp[i] + sum)
            arr.pop();
        }
    }

    gen([], 0,0);
    return result 
};
// @lc code=end

