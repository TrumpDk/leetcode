/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let _ = new ListNode();
    let temp = _;
    let middle = false;
    while (l1 || l2) {
        let val = 0;
        if (l1) {
            val += l1.val
        }
        if (l2) {
            val += l2.val
        }
        const re = val + (middle ? 1 : 0);
        let a = 0;
        middle = false;
        if (re >= 10) {
            a = re - 10
            middle = true;
        } else {
            a = re;
        }
        if (l1) {
           l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        temp = temp.next = new ListNode(a);
    }
    if (middle) {
        temp.next = new ListNode(1);
    }
    return _.next;
};
// @lc code=end

