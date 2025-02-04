# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        if head.next==None:
            return

        # Find the middle node
        slow,fast=head,head.next
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
        

        # Split the List
        second=slow.next
        slow.next=None

        # Reverse the second part
        prev=None
        while second:
            tmp=second.next
            second.next=prev
            prev=second
            second=tmp
        
        # Merge the two lists
        first,second=head,prev
        while second:
            newHead,newSecond=first.next,second.next
            first.next=second
            second.next=newHead
            first=newHead
            second=newSecond




