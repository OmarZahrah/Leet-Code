// function sortString(str: string): string {
//   return str.split("").sort().join("");
// }

// function groupAnagrams(strs: string[]): string[][] {
//   const store = {};
//   const result: string[][] = [];
//   for (let i = 0; i < strs.length; i++) {
//     const sortedStr = sortString(strs[i]);
//     if (store[sortedStr]) store[sortedStr].push(strs[i]);
//     else store[sortedStr] = [strs[i]];
//   }
//   for (let key in store) result.push(store[key]);
//   return result;
// }

function makeKey(str:string):string{
    const count=new Array(26).fill(0);
    for(let c of str)count[c.charCodeAt(0)-'a'.charCodeAt(0)]+=1;
    return count.join(',');
}

function groupAnagrams(strs: string[]): string[][] {
  const store={};
  for(let str of strs ){
    const key=makeKey(str);
    if(!store[key])store[key]=[];
    store[key].push(str);
  }
  return Object.values(store);
}