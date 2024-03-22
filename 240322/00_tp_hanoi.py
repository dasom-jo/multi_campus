
#1번 하노이탑-탑다운방식
class Solution:
    def hanoi(self, n: int) -> int:
        def hanoi_top(num: int, memo: list[int]) -> int:
            if num == 0:
                return 0
            elif memo[num] == 0:
                memo[num] = hanoi_top(num-1, memo) * 2 + 1
                print(num-1, memo)
                return memo[num]

        memo = [0] * (n + 1)
        return hanoi_top(n, memo) #[0,0,0,0]

s = Solution()
print(s.hanoi(6))

