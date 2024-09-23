#주식을 사고 팔기 좋은시점
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit = 0
        #2복잡도 낮음
        min_p = prices[0]
        for _, cur_p in enumerate(prices):
            min_p = min(cur_p, min_p)  #min작은값을 선택하는 함수
            profit = cur_p - min_p
            max_profit = max(profit,max_profit)
        return max_profit

s  = Solution()
s.maxProfit([7,1,5,3,6,4])
