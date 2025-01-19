class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int,int>store;
        int maximum=0;
        int res=0;
        for(int num :nums){
            store[num]=1+store[num];
            if(store[num]>maximum){
                maximum=store[num];
                res=num;
            }
        }
return res;
    }
};