/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    nums = nums.sort((a, b) => a - b)

    let result = [];

    const combine = (arr, last) => {
        if (arr.length === 0) {
            result.push(last)
            return
        }

        for (let i = 0; i < arr.length; i++) {

            // 参考三数之和
            // 原地去掉重复项等题目
            // 两个紧邻相同元素能用此方式去掉
            if (i > 0 && arr[i - 1] === arr[i]) {
                continue
            }
            let temp = [...last, arr[i]];
            let tempArr = [...arr];
            tempArr.splice(i, 1);
            combine(tempArr, temp)
        }
    }

    combine(nums, [])

    return result;
};
// @lc code=end

