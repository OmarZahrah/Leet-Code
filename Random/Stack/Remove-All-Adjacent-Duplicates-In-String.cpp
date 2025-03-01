class Solution {
public:
    string removeDuplicates(string s) {
        int len=s.size();
        stack<char>stack;
        for(int i=0;i<len;i++){
            if(!stack.empty() && s[i]==stack.top())stack.pop();
            else stack.push(s[i]);
        }

        string result="";
        while(!stack.empty()){
            result=stack.top()+result;
            stack.pop();
        }
        return result;
    }
};

