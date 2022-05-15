/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let _ = new ListNode();
    let head = _;
    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val <= list2.val) {
                head = head.next = new ListNode(list1.val)
                list1 = list1.next
            } else {
                head = head.next = new ListNode(list2.val)
                list2 = list2.next
            }
        } else if (list1) {
            head = head.next = new ListNode(list1.val)
            list1 = list1.next
        } else if (list2) {
            head = head.next = new ListNode(list2.val)
            list2 = list2.next
        }
    }
    return _.next;
};
// @lc code=end

