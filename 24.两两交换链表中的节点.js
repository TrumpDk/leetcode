/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// 递归最简单
/** 每间隔1递归一次
 *      next1          next2
 *  a ---> b ---> c ---> d ---> e
*/
const swapPairs = (head) => {
    // // 考虑边界情况
    // if (head == null || head.next == null) {
    //     return head;
    // }

    // let next = head.next;
    // head.next = swapPairs(next.next);
    // next.next = head;
    // return next;

    let dummyNode = new ListNode();
    dummyNode.next = head;
    let temp = dummyNode;
    while (temp && temp.next && temp.next.next) {
        // 需要额外两个指针存储需要交换的节点
        // temp用来记录需要处理的节点的位置
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        // 跳过交换过后的节直接移动到下一个待处理节点
        temp = node1;
    }
    return dummyNode.next;
};
// @lc code=end

