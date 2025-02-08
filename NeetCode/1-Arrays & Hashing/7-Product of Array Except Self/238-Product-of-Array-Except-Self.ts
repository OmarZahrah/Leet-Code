function productExceptSelf(nums: number[]): number[] {
    const len=nums.length;
    const result=new Array(len).fill(1);
    // [1,2,3,4]
    // [1,1,2,6]
    for(let i=1;i<len;i++)result[i]=nums[i-1]*result[i-1];
    let postfix=1;
    for(let i=len-1;i>=0;i--){
        result[i]=postfix*result[i];
        postfix*=nums[i];
    }
    return result;
};