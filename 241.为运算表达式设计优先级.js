/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    let res = []

    for (let i = 0; i < expression.length; i++) {
        let c = expression.charAt(i);
        if (c === '-' || c === '+' || c === '*') {
            let left = diffWaysToCompute(expression.substring(0, i));
            let right = diffWaysToCompute(expression.substring(i + 1));
            for (let a of left) {
                for (let b of right) {
                    switch (c) {
                        case "*":
                            res.push(a * b);
                            break;
                        case "+":
                            res.push(a + b);
                            break;
                        case "-":
                            res.push(a - b);
                            break;
                    }
                }
            }
        }
    }
    if (!res.length) {
        res.push(parseInt(expression));
    }
    return res;

};
// @lc code=end

