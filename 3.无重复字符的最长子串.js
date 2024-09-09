/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let length = s.length;
    let maximum = 0;

    const maxSubstring = new Set();
    for(let right = 0; right < length; right++) {
        while(maxSubstring.has(s[right])) {
            // 缩小窗口，一直到没有重复元素为止
            // 通过对于set的灵活运用 代替数组 提升了方便
            maxSubstring.delete(s[left])
            left++;
        }
        maxSubstring.add(s[right]);
        maximum = Math.max(maximum, maxSubstring.size);
    }

    return maximum
};
// @lc code=end

