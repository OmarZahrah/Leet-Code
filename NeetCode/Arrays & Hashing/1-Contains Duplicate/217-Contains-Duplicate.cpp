class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int,int>freqs;
        for(auto number : nums){
            freqs[number]=1+freqs[number];
            if(freqs[number]>1)return true;
        }
        return false;
    }
};