class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy=sell=prices[0]
        res=0
        for price in prices:
            if price<buy:
                buy =price
                sell=price
            else:
                sell=price
            res=max(res,sell-buy)
        return res