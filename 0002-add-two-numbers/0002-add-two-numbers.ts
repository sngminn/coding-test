/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let [p1, p2] = [l1, l2];

    while(true) {
        const sum = (p1?.val || 0) + (p2?.val || 0);
        p1.val = sum % 10;
        
        if ((!p1?.next && !p2?.next) && sum < 10) break;

        p1.next ??= new ListNode();
        p2.next ??= new ListNode();

        p1.next.val += Math.floor(sum/10);

        [p1, p2] = [p1.next, p2.next];
    }
    return l1;
};