function reverse(x: number): number {
    
    const isNegative=x<0;
    let result=0;

    if(isNegative)x*=-1;

    while(x){
        const digit=x%10;
        result=(result*10)+digit;
        x=Math.floor(x/10);
    }

    if (result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative?-result:result;

};