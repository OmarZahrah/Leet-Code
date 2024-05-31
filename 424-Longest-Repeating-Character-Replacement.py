class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0
        freqs = {}
        max_window = 0

        for r in range(len(s)):
            freqs[s[r]] = freqs.get(s[r], 0) + 1
            while (r-l+1)-max(freqs.values())>k:
                freqs[s[l]] -=1
                l+=1
            max_window=max(max_window,(r-l+1))
        return max_window