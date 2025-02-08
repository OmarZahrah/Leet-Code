class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        const int len=nums.size();
        vector<int> prefix(len,1);
        vector<int>postfix(len,1);

        for(int i=1;i<len;i++)prefix[i]=prefix[i-1]*nums[i-1];
        for(int i=len-2;i>=0;i--)postfix[i]=postfix[i+1]*nums[i+1];
        vector<int>result(len);
        for(int i=0;i<len;i++)result[i]=prefix[i]*postfix[i];
        return  result;

    }
};

