/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let tempSet = new Set();
    let _headA = headA;
    let _headB = headB;

    // 构建set
    while (_headA) {
        tempSet.add(_headA);
        _headA = _headA.next;
    }

    // 寻找共同节点
    while (_headB) {
        if (tempSet.has(_headB)) {
            return _headB;
        }
        _headB = _headB.next
    }

    return null;
};
// @lc code=end

