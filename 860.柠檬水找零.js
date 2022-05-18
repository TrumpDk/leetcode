/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (let i = 0; i < bills.length; i++) {
        console.log(ten, five)
        if (bills[i] === 5) {
            five +=1;
        } else if (bills[i] === 10) {
            if (five != 0) {
                five-=1;
                ten+=1;
            } else {
                return false
            }
        } else {
            if (ten != 0 && five != 0) {
                ten-=1;
                five-=1;
            } else if (ten == 0 && five != 0) {
                if (five >= 3) {
                    five -= 3
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true
};
// @lc code=end

