# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        curr1,curr2=l1,l2
        node=ListNode()
        tail=node
        carry=0
        while curr1 or curr2 or carry:
            val1=curr1.val if curr1 else 0
            val2=curr2.val if curr2 else 0
            val=val1+val2+carry
            carry=val//10
            val%=10
            tail.next=ListNode(val)
            tail=tail.next

            curr1=curr1.next if curr1 else None
            curr2=curr2.next if curr2 else None
        return node.next
