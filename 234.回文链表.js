/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let temp = [];
    let _temp = [];
    while (head) {
        temp.push(head.val);
        _temp.push(head.val);
        head = head.next
    }
    return temp.reverse().join('') === _temp.join('');
};
// @lc code=end

