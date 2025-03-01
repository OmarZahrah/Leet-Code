class Solution {
public:
    string reverseWords(string s) {
        string word;
        stringstream ss(s);
        string result;
        
        while(ss>>word){
            reverse(word.begin(),word.end());
            if(!result.empty())result+=' ';
            result+=word;
        }
        return result;
    }
};


