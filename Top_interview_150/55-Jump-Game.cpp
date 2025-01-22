class Solution {
public:
    bool canJump(vector<int>& nums) {
        int last=nums.size()-1;
        int i= last-1;
        int need=0;
        while(i>=0){
            need=last-i;
            if(nums[i]>=need)last=i;
            i--;
        }
        return last>0?false:true;
    }
};

