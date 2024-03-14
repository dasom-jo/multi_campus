#주식을 사고 팔기 좋은시점
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit = 0
        #1 복잡도 높음
        # for i in range(len(prices)-1):
        #     buy_p = prices[i]
        #     for j in range(i+1,len(prices)):
        #         sell_p = prices[j]
        #         profit = sell_p - buy_p
        #         if profit > max_profit:
        #             max_profit = profit
        # print(max_profit)

        #2복잡도 낮음
        min_p = prices[0]
        for _, cur_p in enumerate(prices):
            min_p = min(cur_p, min_p)
            profit = cur_p - min_p
            max_profit = max(profit,max_profit)
        return max_profit

s  = Solution()
s.maxProfit([7,1,5,3,6,4])
