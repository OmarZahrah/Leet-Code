function zeroFilledSubarray(nums: number[]): number {
    const len=nums.length;
    let count=0;
    let result=0;
    for(let i=0;i<len;i++){
        if(nums[i]==0){
            count++;
            result++;
            }
        else {
            result+=(count*(count-1))/2;
            count=0;
        }
    }
    result+=(count*(count-1))/2;
    return result;
};

