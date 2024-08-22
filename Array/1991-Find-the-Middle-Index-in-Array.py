class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        total=sum(nums)
        prefix=0
        postfix=total
        for i in range(len(nums)):
            postfix=total-prefix
            prefix+=nums[i]
            if prefix==postfix:
                return i
        return -1