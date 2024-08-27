class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack=[]
        Map={}
        res=[]
        for num in nums2[::-1]:
            while stack and num > stack[-1]:
                stack.pop()
            if stack :
                Map[num]=stack[-1]
            else:
                Map[num]=-1
            stack.append(num)
        
        for num in nums1:
            res.append(Map[num])
        return res