class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        Map={}
        for num in nums:
            Map[num]=Map.get(num,0)+1
            if Map[num]>1:
                return True
        
        return False