/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var next = null;
    var head = null;
    var temp = null;
    var carry = 0;
    while(l1 != null || l2 != null){
        let value = carry;
        if(l1 != null){
            value = value + l1.val;
            l1 = l1.next;
        }
        if(l2 != null){
            value = value + l2.val
            l2 = l2.next;
        }
        
        let node = new ListNode(Math.floor(value) % 10);
        carry = Math.floor(value/10);
        
        if(head == null){
            head = node;
            temp = node;
        }
        else{
            temp.next = node;
            temp = node;
            
        }
        
        
    }
    if(carry > 0){
        let node = new ListNode(carry);
        temp.next = node;    
    }
    
    return head;
};
