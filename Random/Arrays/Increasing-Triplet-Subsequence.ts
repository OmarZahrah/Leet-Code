function increasingTriplet(nums: number[]): boolean {
    let first:number=Infinity;
    let second:number=Infinity;
   for(let i=0;i<nums.length;i++){
        if(nums[i]<first)first=nums[i];
        if(nums[i]>first && nums[i]<second)second=nums[i];
        if(nums[i]>second)return true;
   }
   return false;
};

// [2,10,5,0,4,6]
//  i  j

