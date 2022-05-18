/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let result = [];

    const combine = (arr, last) => {
        if (arr.length === 0) {
            result.push(last);
            return
        }

        for (let i = 0; i < arr.length; i++) {
            let temp = [...last, arr[i]];
            let tempArr = [...arr]
            tempArr.splice(i, 1);
            combine(tempArr, temp);
        }
    }

    combine(nums, []);

    return result
};
// @lc code=end

