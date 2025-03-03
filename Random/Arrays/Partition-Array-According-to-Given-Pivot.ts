// function pivotArray(nums: number[], pivot: number): number[] {
//   const less: number[] = [];
//   const pivots:number[]=[];
//   const greater: number[] = [];

//   for (const num of nums) {
//     if (num < pivot) less.push(num);
//     else if (num > pivot) greater.push(num);
//     else pivots.push(num);
//   }
  

//   return [...less,...pivots,...greater];
// }

function pivotArray(nums: number[], pivot: number): number[] {
   const n = nums.length;
    const result: number[] = new Array(n);
    let left = 0 , pivots = 0, greater = 0;

    for (const num of nums) {
        if (num < pivot) left++;
        else if (num === pivot) pivots++;
    }
    
    let middle=left;
    let right=middle+pivots;
    left=0;

    for (const num of nums) {
        if (num < pivot) result[left++] = num;
        else if (num === pivot) result[middle++] = num;
        else result[right++] = num;
    }
    return result;

}

