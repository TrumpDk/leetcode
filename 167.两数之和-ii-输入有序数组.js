/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 这道题根据题意 由于是非递减 就是说有重复性的元素 存在单调递增特性
// 当目标值减去左值 剩余的数字大于右值 说明左值小了 无法缩小范围
// 此时需要增大左值 当剩余的数字小于右值 说明左边范围大了需要从右边缩小范围
// 为什么不会错过答案 因为每一次值挪动其中一边的指针 不会错过正确答案
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (numbers[start] + numbers[end] !== target) {
        if (target - numbers[start] > numbers[end]) {
            start++
        } else if (target - numbers[start] < numbers[end]) {
            end--
        }
    }
    return [start + 1, end + 1]
};
// @lc code=end

