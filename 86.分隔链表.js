/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let right = new ListNode(0);
    let _right = right;
    let left = new ListNode(0);
    let _left = left;
    let current = head;
    while (current) {
        if (current.val < x) {
            _left = _left.next = new ListNode(current.val);
        } else {
            _right = _right.next = new ListNode(current.val);
        }
        current = current.next
    }
    _left.next = right.next;
    return left.next
};
// @lc code=end

