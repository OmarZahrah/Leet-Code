class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack =[0]
        res=[0]*len(temperatures)

        for i in range(len(temperatures)):
            if i==0:
                stack.append(i)
            else:
                while stack and temperatures[i]>temperatures[stack[-1]]:
                    res[stack[-1]]=i-stack[-1]
                    stack.pop()
                else:
                    stack.append(i)

        return res