/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // 太坑了 居然头一个用0
    let dummyNode = new ListNode(Symbol());
    dummyNode.next = head;
    let temp = dummyNode;
    let prev = temp;
    let current = temp.next;
    while (current) {
        if (prev.val === current.val) {
            prev = current;
            current = current.next;
        } else {
            if (!current.next || current.next.val !== current.val) {
                temp = temp.next = prev.next;
            }
            prev = current;
            current = current.next;
        }
    }
    temp = temp.next = prev.next;
    return dummyNode.next;
};
// @lc code=end

