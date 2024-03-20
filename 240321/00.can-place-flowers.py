#n: 심고자하는 꽃의 갯수

class Solution:
    def flower_list(self, flowerbed: list[int], n: int) -> int:
        count = 0
        for i in range(len(flowerbed) - 1):
            if flowerbed[i] == 0 and flowerbed[i+1] == 0:
                count += 1
                if count >= n:
                    return True
        return False

s = Solution()
result = s.flower_list([1,0,0,0,1], 1)
print(result)