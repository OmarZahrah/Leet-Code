class Solution:
    def check(self,i,j,k):
        return abs(i-j)<=k

    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        Map={}
        # 1:[0,3] 
        # 2:[1]
        # 3:[2]
        for i,num in enumerate(nums):
            if num in Map:
                for j in Map[num]:
                    if self.check(i,j,k):
                        return True
                Map[num].append(i)
            else:
                Map[num]=[i]
        return False