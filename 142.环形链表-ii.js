/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    if (!head) {
        return null
    }

    let fast = head;
    let slow = head;

    while (fast != null) {

        slow = slow.next;

        if (fast.next) {
            fast = fast.next.next;
        } else {
            // 没有环快指针空了的情况下兜底
            return null
        }

        // 快慢指针相遇 此时还不是重复的点位
        if (fast === slow) {
            let ptr = head;
            // 从起点开始和慢指针一起寻找重复元素
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr
        }
    }

    return null
};
// @lc code=end

