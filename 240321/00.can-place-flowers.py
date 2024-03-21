#n: 심고자하는 꽃의 갯수

#경우의수1 :가운데는 0이 세개는 있어야하지만 양끝은 0이 두개만잇어도 심기가능
class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        #만약 화단의 길이가 1개면 여기서 결정
        if flowerbed == [0]:
            flowerbed[0] = 1
            n -= 1
        #양끝은 연속된 0이 두개여야 끝에 심을수있다
        if flowerbed[:2] == [0,0]:
            flowerbed[0] = 1#뒤에 0나오면 또심기를 막기위해
            n -= 1 #  꽃심기
        #뒷자리
        if flowerbed[:-2] == [0,0]:
            flowerbed[-0] = 1#뒤에 0나오면 또심기를 막기위해
            n -= 1 #  꽃심기
        #두번째부터 끝에서 두번째까지는 좌우가(자신도) 0이여야한다
        for i in range(1, len(flowerbed)-1):
            if flowerbed[i-1:i+2] == [0,0,0]: #i+1인데 뒷번호는 포함안되니깐
                flowerbed[i] = 1
                n-=1
        return n <= 0

s = Solution()
result = s.canPlaceFlowers([1,0,0,0,0,0,0,1], 2)
print(result)