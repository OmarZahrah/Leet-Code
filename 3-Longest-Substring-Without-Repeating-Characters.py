class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s=='':
            return 0
        freq=set()
        l,r=0,0
        length,max_length=0,1
        while r<=len(s)-1:
            if s[r] in freq:
                max_length=max(max_length,length)
                freq.clear()
                l+=1
                r=l
                length=0
            else:
                length+=1
                freq.add(s[r])
                r+=1
        max_length=max(max_length,length)
        return max_length