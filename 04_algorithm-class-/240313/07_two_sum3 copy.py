
#문제 두수의 합
#키와 인덱스 값을 함꺼번에 가져올수있는 함수 enumerate
#딕셔너리 사용
class Solution:
    def twoSum(self, nums:list[int],target:int) -> list[int]:
        for idx,v in enumerate(nums):
            gap = target - v #[9,10,6]
            new_nums = nums[idx+1:] #현재원소를제외한
            if gap in new_nums:#new_nums안에 gap이 있니없니
                #7,6,10
                return [idx,#현재원소의 인덱스값
                        new_nums.index(gap) +idx + 1]
                        #gap에 해당하는인덱스(현재인덱스제외상태)+ 현재원소를 제외한



s = Solution()
result = s.twoSum([2,7,6,10],16)
print(result)
