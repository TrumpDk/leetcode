/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯算法?
// 递归？
var letterCombinations = function(digits) {
    const container = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r', 's'],
        '8':['t','u','v'],
        '9':['w','x','y', 'z'],
    }
    let result = [];
    const generateStr = (arr = [], str) => {
        if (str != '') {
            const temp = [];
            const next = container[str[0]];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < next.length; j++) {
                    const item = `${arr[i]}${next[j]}`;
                    temp.push(item);
                }
            }
            generateStr(temp, str.substring(1))
        } else {
            result = [...arr];
        }
    }
    generateStr(container[digits[0]], digits.substring(1))
    return result;
};
// @lc code=end

