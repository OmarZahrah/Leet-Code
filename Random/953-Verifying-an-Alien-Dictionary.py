class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        # ["word","world","row"]
        Map={}
        for i in range(len(order)):
            Map[order[i]]=i
        
        for i in range (len(words)-1):
            for j in range (len(words[i])):
                    
                if j>=len(words[i+1]):
                    return False
                if Map[words[i][j]]<Map[words[i+1][j]]:
                    break
                if Map[words[i+1][j]]<Map[words[i][j]]:
                    return False
        return True
                