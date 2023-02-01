/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // the key to resolve this problem is to judge the validation of each word index
    // const dp = new Array(s.length + 1).fill(false);
    // // includes is not 
    const wordSet = new Set(wordDict);
    const wordHistory = new Array(s.length);

    // dp[0] = true;

    // for (let i = 0; i <= s.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         let str = s.slice(j, i);
    //         if (wordSet.has(str) && dp[j]) {
    //             dp[i] = true;
    //             break;
    //         }
    //     }
    // }

    // return dp[s.length];

    const canBreak = (start) => {
        // when we loop all of the words, it means all of the substring had been validated
        // so we should return true by default.
        if (start == s.length) return true;
        if (wordHistory[start] !== undefined) return wordHistory[start];
    
        for (let i = start + 1; i <= s.length; i++) {
          const prefix = s.slice(start, i);
          if (wordSet.has(prefix) && canBreak(i)) {
            // memorize the result, and put it into cache array
            wordHistory[start] = true;
            return true;
          }
        }
        wordHistory[start] = false;
        return false;
      };
      return canBreak(0);

};
// @lc code=end

