function containsDuplicate(nums: number[]): boolean {
    const freqs={};
    for(let num of nums){
        freqs[num]=1+(freqs[num]|0);
        if(freqs[num]>1)return true;
    }
    return false;
};