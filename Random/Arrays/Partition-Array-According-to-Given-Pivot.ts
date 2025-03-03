// function topKFrequent(nums: number[], k: number): void {
//   const count: { [key: number]: number } = {};

//   for (const num of nums) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
//   arr.sort((a, b) => b[0] - a[0]);
//   console.log(arr);
// }

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;

// console.log(topKFrequent(nums, k));

function pivotArray(nums: number[], pivot: number): number[] {
  const less: number[] = [];
  const pivots:number[]=[];
  const greater: number[] = [];

  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num > pivot) greater.push(num);
    else pivots.push(num);
  }
  

  return [...less,...pivots,...greater];
}

