function reverseWords(s: string): string {
const result=s.split(" ").reverse().filter(s=>s!='').join(' ');
return result;
};