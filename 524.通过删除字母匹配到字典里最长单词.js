/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    dictionary.sort((word1, word2) => {
        if (word1.length !== word2.length) {
            return word2.length - word1.length;
        } else {
            return word1.localeCompare(word2);
        }
    });

    for (let t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            return t;
        } 
    }

    return ''
};
// @lc code=end

