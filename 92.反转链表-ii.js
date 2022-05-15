/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let temp = head;
    let index = 0;
    let prev = temp;
    while (temp.next) {
        temp = temp.next;
        ++index
        if (index >= left) {
            let _prev = temp;
            let current = temp.next;
            for (let i = index; i <= right; i++) {
                const next = current.next;
                current.next = _prev;
                prev = current;
                current = next;
            }
            prev.next = temp
        }
        prev = temp;
        break;
    }

    return head
};
// @lc code=end

