class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buy=prices[0],sell=prices[0];
        int max_profit=0;

        for(int price : prices){
            if(price<buy){
                buy=price;
                sell=price;
            }
            else{
                sell=price;
            }
            int profit=sell-buy;
            max_profit=max(max_profit,profit);
        }
        return max_profit;

    }
};

