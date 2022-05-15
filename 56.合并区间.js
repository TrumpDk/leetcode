/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1) {
        return intervals
    }
    let left = 0, right;
    let _left, _right;
    let result = []
    for (; left < intervals.length - 1; left++) {
        right = left + 1;
        if (intervals[left][1] >= intervals[right][0]) {
            if (!_left) {
                _left = intervals[left][0];
            }
            _right = intervals[right][1]
            if (right === intervals.length - 1) {
                result.push([_left, _right])
            }
        } else {
            if (!_left && !_right) {
                result.push(intervals[left])
                if (right === intervals.length - 1) {
                    result.push(intervals[right])
                }
            } else {
                result.push([_left, _right])
                _left = null;
                _right = null;
            }
        }
    }
    return result
};
// @lc code=end

