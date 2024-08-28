class MyQueue:

    def __init__(self):
        self.first=[]
        self.last=[]

    def push(self, x: int) -> None:
        while self.first:
            self.last.append(self.first.pop())
        self.last.append(x)

    def pop(self) -> int:
        while self.last:
            self.first.append(self.last.pop())
        val=self.first.pop()
        return val

    def peek(self) -> int:
        if self.last: return self.last[0]
        else:return self.first[-1]

    def empty(self) -> bool:
        return True if len(self.first)==0 and len(self.last)==0 else False 


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()