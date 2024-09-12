class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        allSum=(len(nums)*(len(nums)+1))//2
        for num in nums:
            allSum-=num
        return allSum