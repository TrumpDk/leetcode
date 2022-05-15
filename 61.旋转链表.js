/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let queue = [];
    let _head = new ListNode();
    let newHead = _head;
    let temp = head;
    while(temp) {
        queue.push(temp.val)
        temp = temp.next;
    }
    const times = k % queue.length;
    for (let n = 0; n < times; n++) {
        const tail = queue.pop();
        queue.unshift(tail);
    }

    for (let i = 0; i < queue.length; i++) {
        newHead = newHead.next = new ListNode(queue[i]);
    }
    return _head.next;
};
// @lc code=end

