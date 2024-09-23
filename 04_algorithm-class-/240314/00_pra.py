#자신을 제외한 배열의 곱
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        #빈배열을 일단 1로 채운다/복잡도n
        #result = [1 for i in nums]
        #복잡도 줄이기
        result= [1] * len(nums)

        def get_product_array(start,end,step):
            # get_product_array(len(nums) -1,0,-1)
            #[4,3,2,1]
            # get_product_array(0, len(nums) -1,1)
            #[1,2,3,4]
            temp = 1
        #대각선기준 상단의 곱
            for i in range(len(nums) - 1,0,-1):
                #print(i, nums[i])
                temp *= nums[i]
                result[i-1]*=temp
                print(result)
                #i = 현재인덱스 step = -1 or 1
                #[1, 1, 4, 1] [-1 + -1] = -2번째
                #[1,12,4,1] [-2 + -1] = -3번째
                #[24, 12, 4, 1] [-3 + -1] = -4번째
            #대각선을 그려 하단의 곱
            temp = 1
            for i in range(len(nums) - 1,1):
                #print(i, nums[i])
                temp *= nums[i]
                result[i+1]*=temp
            print(result)
            return result

        get_product_array(len(nums) -1,0,-1)#역순지정
        get_product_array(0, len(nums) -1,1)#순차정렬

s = Solution()
s.productExceptSelf([1,2,3,4])