#n: 심고자하는 꽃의 갯수
class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        #for enumrate 사용해서반복 (인덱스i,값 plant)
        for i,plant in enumerate(flowerbed):
            #만약 심어져있으면 (plant값이 1이면),
            if plant == 1:
                continue
                #continue
            #만약 화단의 위치가 0보다 크고, 그앞에 꽃이 심어져있으면
            if i > 0 and flowerbed[i-1] == 1:
                continue
                #continue
            #만약 화단의 위치가 화단의 길이보다 작고, 뒤에 꽃이 심어져있으면
            if i < len(flowerbed)-1 and flowerbed[i+1] == 1:
                #뒤로가면서 탐색하기때문에 맨뒤는 탐색할필요없다
                continue
                #countinue
            flowerbed[i] = 1
            #꽃을 심어준다
            #n-=1
        return n <= 0

s = Solution()
result = s.canPlaceFlowers([1,0,0,0,1], 1)
print(result)