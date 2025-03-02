function isValid(s: string): boolean {
    const map:{[key:string]:string}={
        ")":"(",
        "]":"[",
        "}":"{",
    };
    const stack:string[]=[];

    for(let char of s){
        if(char in map){
            const top = stack.length>0?stack.pop():"#";
            if(top !== map[char])return false;
        }
        else stack.push(char);
    }
    
    return stack.length===0;
};

