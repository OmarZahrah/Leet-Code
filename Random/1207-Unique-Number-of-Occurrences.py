class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        Map = {}
        for num in arr:
            Map[num] = Map.get(num, 0) + 1

        nums = set()
        values = set()

        for key, val in enumerate(Map.values()):
            nums.add(key)
            values.add(val)
        
        return len(nums)==len(values)