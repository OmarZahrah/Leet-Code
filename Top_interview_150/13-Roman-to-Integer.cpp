class Solution {
public:
    int romanToInt(string s) {
        int total=0;
        unordered_map<char,int>values={
            {'I',1},
            {'V',5},
            {'X',10},
            {'L',50},
            {'C',100},
            {'D',500},
            {'M',1000}
            };
        if(s.size()==1)return values[s[0]];
        for(int i=0;i<s.size();i++){
            if(values[s[i]]<values[s[i+1]])total-=values[s[i]];
            else total+=values[s[i]];
        }
    return total;
    }
};