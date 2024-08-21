# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr=temp=head
        node=ListNode()
        while curr:
            temp=curr.next
            if curr==head:
                curr.next=None
            else:
                curr.next=node.next
            node.next=curr
            curr=temp
        return node.next
