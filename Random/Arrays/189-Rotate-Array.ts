/**
 Do not return anything, modify nums in-place instead.
 */
 function reversrRange(arr:number[],start:number,end:number):void{
    while(start<=end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
 }

function rotate(nums: number[], k: number): void {
    const len=nums.length;
    k=k%len;
    nums.reverse();
    reversrRange(nums,0,k-1);
    reversrRange(nums,k,len-1);
   
};

