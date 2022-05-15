/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const temp = nums.sort((a, b) => a - b);
    let reuslt = [];
    // 第一次循环确定首个元素
    for (let i = 0; i < temp.length; i++) {
        // 为了循环不出现重复元素 必须保证相同位置不出现同样的树
        if (i > 0 && temp[i] === temp[i - 1]) {
            continue;
        }
        // 暂时没搞懂为什么要加在这个地方
        let lastTime = temp.length - 1;
        let target = 0 - temp[i]
        // 第二次循环的元素
        for (let j = i + 1; j < temp.length; j++) {
            // 为了循环不出现重复元素 必须保证相同位置不出现同样的树
            if (j > i + 1 && temp[j] === temp[j - 1]) {
                continue;
            }
            // 由于数组已经排序 前两个数之和会越来越大 最后一个属只能越来越小
            while (lastTime > j && temp[lastTime] + temp[j] > target) {
                --lastTime;
            }
            // 当二者相等时已经遍历完成所有结果
            if (j >= lastTime) {
                break;
            }

            // 当三者相加为零则加入数组
            if (temp[lastTime] + temp[j]  === target) {
                const item = [temp[i], temp[j], temp[lastTime]];
                reuslt.push(item)
            }
        }
    }
    return reuslt;
};
// @lc code=end

