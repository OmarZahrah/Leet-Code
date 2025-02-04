class Solution:
    def simplifyPath(self, path: str) -> str:
        stack=[]
        for arg in path.split('/'):
            if arg =='' or arg=='.':
                continue
            elif arg=='..':
                if stack:
                    stack.pop()
            else:
                stack.append(arg)
        return '/'+'/'.join(stack)

