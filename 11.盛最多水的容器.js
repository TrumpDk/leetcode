/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 这道题需要推导一下求面积的过程
// 首先用两个for肯定能够完成目标
// 这道题适合采用双指针完成 
// 需要注意的是要确定移动那个指针
// 经过公式推导每次移动高度小的指针是最为合理的
var maxArea = function(height) {
    const len = height.length;

    let temp = 0;
    let i = 0, j = len - 1;

    while (i != j) {
        const resut = Math.min(height[i], height[j]) * (j - i);
        if (temp < resut) {
            temp = resut;
        }
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return temp;
};
// @lc code=end

