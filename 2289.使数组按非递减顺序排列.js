/*
 * @lc app=leetcode.cn id=2289 lang=javascript
 *
 * [2289] 使数组按非递减顺序排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
    const stack = [];
    let ans = 0;

    for (let item of nums) {
        // 每次切换一个元素 重置一下步数
        let step = 0;
        // 不断沟通过下个最大元素最为栈底统计数据
        // 前面的相对最大元素会被后面更大元素取代
        // 例子最后的非单增栈会成为([11, 3])
        while (stack.length && stack[stack.length - 1][0] <= item) {
            // 当前一个元素大于后面元素时 不断统计前面所需要的步数
            step = Math.max(step, stack.pop()[1])
        }
        // 如果是 [5,3,4,4]会出现没排空的情况此时还要继续加1
        if (stack.length) {
            step++
        }
        ans = Math.max(ans, step)
        stack.push([item, step])
    }
    return ans
};
// @lc code=end

