class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        prefix=[]
        postfix=[]
        total=0
        for n in nums:
            total+=n
            prefix.append(total)
        
        total=0
        for n in nums[::-1]:
            total+=n
            postfix.append(total)
        
        postfix.reverse()
        for i in range(len(nums)):
            if postfix[i]==prefix[i]:
                return i 
        return -1