function isSubsequence(s: string, t: string): boolean {
    if(s===t)return true;
    
    const lenS=s.length;
    const lenT=t.length;
    let j=0;

    for(let i=0;i<lenT;i++){
        if(t[i]===s[j])j++;
        if(j===lenS)return true;
    }

    return false;
};
