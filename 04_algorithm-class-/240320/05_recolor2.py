#슬라이딩 윈도우 알고리즘
#https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        window = block[:k]
        min_count = window.count('w') #0
        for i in range(k,ken(blocks)): #(7,9)두번돔
            #앞글자하나빼서 다음 인덱스를 붙여서
            #윈도우를 이동하는것처럼사용
            #window[1:]#문자열은 - window[0] 할수없지만 일케표현가능
            window = window[1:] + block[i] #윈도우 이동한것
            new_count = window.count('w')
            min(min_count,new_count)
        # for i in range(1,len(blocks)-k+1): #1을추가함으로써 한번 반복제외
        #     new_count = blocks[i:i+k].count('w')
        #     print(new_count)
        #     min_count = min(min_count,new_count)
        # return min_count

s = Solution()
result = s.minimumRecolors("wbbwbbwbw",7)
print(result)

