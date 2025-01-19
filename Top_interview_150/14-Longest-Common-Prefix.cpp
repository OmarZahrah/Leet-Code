class Solution {
public:
    string compare(string str1,string str2){
        int shortest = min(str1.size(), str2.size());
        int i = 0;
        while(i<shortest && str1[i]==str2[i])i++;
        return str1.substr(0,i);
    }
    string longestCommonPrefix(vector<string>& strs) {
        string longest_prefix=strs[0];
        for(int i=1;i<strs.size();i++){
            longest_prefix=compare(longest_prefix,strs[i]);
            if(longest_prefix.empty())return \\;
        }
        return longest_prefix;
    }
};