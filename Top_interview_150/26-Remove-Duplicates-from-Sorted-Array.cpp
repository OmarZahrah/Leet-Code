class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size()==1)return 1;

        int val=nums[0];
        int count=1;
        int i=1,j=1;
        while(j<nums.size()){
            if(nums[j]>val){
                val=nums[j];
                swap(nums[i],nums[j]);
                i++;
                count++;
            }
            j++;
        }
        return count;
    }
};

