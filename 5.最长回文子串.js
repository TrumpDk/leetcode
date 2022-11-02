/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // if (s == null || s.length === 0) return '';
    let len = s.length
    if (len < 2) return s; 
    let maxLen = 1;
    let begin = 0;

    // 起初时每个长度为一的子串都是回文串 所以都填充1
    let dp = new Array(len)
    for (let index = 0; index < len; index++) {
        dp[index] = new Array(len).fill(true);
    }

    for (let L = 2; L <= len; L++) {
        for (let i = 0; i < len; i++) {
            const j = L + i - 1;
            if (j >= len) {
                break;
            }

            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }

    return s.substring(begin, begin + maxLen);
    // // 记录起始位置
    // let start = 0, end = 0;
    // for (let i = 0; i < s.length; i++) {
    //     // 分为奇数字串和偶数字串的情况
    //     // 分别向两边进行拓展
    //     let len1 = expandAroundCenter(s, i, i);
    //     let len2 = expandAroundCenter(s, i, i + 1);
    //     let len = Math.max(len1, len2);
    //     // 遇到更长的字串 刷新起始位置
    //     if (len > end - start) {
    //         start = i - Math.floor((len - 1) / 2);
    //         end = i + len / 2;
    //     }
    // }

    // return s.substring(start, end + 1);


};

// const expandAroundCenter = (s, left, right) => {
//     // 无论是奇数还是偶数字串， 只要两头相等就继续拓展
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         --left;
//         ++right;
//     }

//     return right - left - 1;
// } 
// @lc code=end

