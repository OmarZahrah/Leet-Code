class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        freq1 = {}
        freq2 = {}
        for i in s1:
            freq1[i] = freq1.get(i, 0) + 1

        l=0
        matches=0
        for r in range(len(s2)):
            freq2[s2[r]]=freq2.get(s2[r],0)+1
            if freq1==freq2:
                return True
            if r-l+1 ==len(s1):
                freq2[s2[l]] -= 1
                if freq2[s2[l]]==0 and s2[l] not in freq1:
                    freq2.pop(s2[l])
                
                l+=1
        return False

            
