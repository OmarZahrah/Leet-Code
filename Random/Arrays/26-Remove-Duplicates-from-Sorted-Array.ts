function removeDuplicates(nums: number[]): number {
    const len=nums.length;
    let j=1;
    let k=1;
    for (let i=1;i<len;i++){
        if(nums[i]!==nums[i-1]){
            nums[j]=nums[i];
            j++;
            k++;
        }
    }
    return k;
};

