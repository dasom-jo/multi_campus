#하노이탑 - 바텀업방식
class Solution:
    def hanoi(self, n: int) -> int:
        tabul = [0]
        if n in tabul:
            return n
        for i in range(1,n+1):
            tabul.append(tabul[i-1] * 2 + 1)
            print(tabul)
        return tabul[n]

s = Solution()
print(s.hanoi(6))
