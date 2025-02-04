function isAnagram(s: string, t: string): boolean {
    if(s.length!==t.length)return false;
    const mapS={};
    const mapT={};

    for(let i=0;i<s.length;i++){
        mapS[s[i]] = (mapS[s[i]] || 0) + 1;
        mapT[t[i]] = (mapT[t[i]] || 0) + 1;
    }
    for(let key in mapS){
        if(mapS[key]!==mapT[key])return false;
    }
    return true;
};