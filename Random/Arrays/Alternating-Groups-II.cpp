class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors, int k) {
        for(int i=0;i<k-1;i++)colors.push_back(colors[i]);
        int len=colors.size();
        int result=0;
        int left=0,right=1;
        while(right<len){
            if(colors[right]==colors[right-1]){
                left=right;
                right++;
                continue;
            }
            if(right-left+1==k)result++,left++;
            right++;
        }
        return result;
    }

};