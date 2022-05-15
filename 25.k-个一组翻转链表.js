/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
// var reverseKGroup = function(head, k) {
//     const dummyNode = new ListNode();
//     dummyNode.next = head;
//     let pre = dummyNode;
//     while (head) {
//         let tail = pre;
//         // 每次循环都去判断后面的节点是否还有k个以上节点
//         for (let i = 0; i < k; i++) {
//             tail = tail.next;
//             // 还没到k中途就遍历完了
//             // 意味着长度没有k
//             if (!tail) {
//                 // 返回整个链表
//                 return dummyNode.next;
//             }
//         }
//     }

//     // 保存此段后面节点引用
//     const next = tail.next;
//     // 走到这一步说明有k个以上节点 需要反转链表
//     [head, tail] = resverseNode(head, tail);

//     pre.next = head;
//     tail.next = next;
//     // 指针指向反转过后的最末尾一个节点
//     pre = tail;
//     // 新的头指向下一段的头节点
//     head = tail.next;

//     return dummyNode.next;
// };

// const resverseNode = (head, tail) => {
//     let prev = tail.next;
//     let p = head;
//     while (prev.next !== tail) {
//         const next = p.next;
//         p.next = prev;
//         prev = p;
//         p = next;
//     }

//     return [tail, head];
// }

const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
}
var reverseKGroup = function(head, k) {
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};
// @lc code=end

