/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    nums = nums.sort((a, b) => a - b)
    let result = [];

    const backtrack = (arr, last) => {
        // 结束条件
        // 当arr长度为零，说明后面候选项已经没有了，说明这个分支已经走到了尽头
        if (arr.length === 0) {
            return 
        }
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i - 1] === arr[i]) {
                continue
            }
            // 保存当前结果
            let temp = [...last, arr[i]];
            result.push(temp);
            // 每循环一次就从当前候选项剔除已选择项，剩下的数组组为下次排列组合的候选项
            // 进行下一轮组合操作
            backtrack(arr.slice(i + 1), temp);
        }
    }
    backtrack(nums, []);
    // 额外加上没选择的情况
    result.push([]);

    return result
};
// @lc code=end

