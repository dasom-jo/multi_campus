#투포인터:선형 자료 구조에서 활용되는 전략
#왼쪽과 오른쪽 포인터를 활용
#대부분 정렬이된 상태에서 많이 사용

class Solution:
    def two_sum(self,nums:list[int], target:int)->list[int]:
        lt,rt = 0,len(nums)-1
        #[0 , 3]
        while lt < rt:
            temp_sum = nums[lt] + nums[rt]
            #print(temp_sum) [9,8,12,13,17,16]
            if target == temp_sum:
                return [lt,rt]
            elif target < temp_sum:
                rt -= 1
                #print(rt)
            elif target > temp_sum:
                lt +=1
                #print(lt)

s = Solution()
result = s.two_sum([2,7,6,10],9)
print(result)