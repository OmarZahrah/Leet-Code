/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const len=nums.length;
    let j=0;
    for(let i=0;i<len;i++){
        if(nums[i]!==0){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            j++
        }
    }
};

