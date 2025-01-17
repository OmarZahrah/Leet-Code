class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int counter=0;
        int i=0,j=nums.size()-1;
        while(i<=j){
            if(nums[j]==val){
                counter++;
                j--;
                continue;
            }
            if(nums[i]==val ){
                counter++;
                swap(nums[i],nums[j]);
                j--;
            }
            i++;

        }
        return nums.size()-counter;

    }
};

