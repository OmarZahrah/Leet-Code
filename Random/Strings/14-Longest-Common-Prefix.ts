
function longestPrefix(str1:string,str2:string):string{
  let len1=str1.length,len2=str2.length;

    let prefix:string = "";

    for(let i=0;i<len1&&i<len2;i++){
        if(str1[i]===str2[i])prefix+=str1[i];
        else break;
    }
return prefix;
}

function longestCommonPrefix(strs: string[]): string {
    const len=strs.length;
  let result=strs[0];
  for(let i=1;i<len;i++){
    result=longestPrefix(strs[i],result);
  }
  return result;
};

