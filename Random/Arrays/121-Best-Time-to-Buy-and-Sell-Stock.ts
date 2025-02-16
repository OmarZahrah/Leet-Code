function maxProfit(prices: number[]): number {
    const len=prices.length;
    let buy=prices[0];
    let profit=0,max_profit=0;

    for(let i=1;i<len;i++){
        if(prices[i]<=buy)buy=prices[i];
        else{
            profit=prices[i]-buy;
            max_profit=Math.max(profit,max_profit);
        }
    }
    return max_profit;
};

