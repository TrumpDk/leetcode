/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// 双指针 当边界条件是头节点时 可以额外添加一个节点
// 从而避免节点不够的问题
// 轻松解决滑动窗口
// 最长不重复序列等问题
var removeNthFromEnd = function(head, n) {
    let _ = new ListNode(0);
    _.next = head;
    let slow = _;
    let fast = head;
    let gap = 0;
    while (fast) {
        if (gap === n) {
            slow = slow.next
        } else {
            gap++
        }
        fast = fast.next
    }
    slow.next = slow.next.next;
    return _.next;
};
// @lc code=end

