class Solution:
    def twoSum(self,nums:list[int],target:int)->list[int]:
        nums_dict ={}
        for i,v in enumerate(nums):
            nums_dict[v] = i
            #[0,1,2,3]
        for i,v in enumerate(nums):
            gap = target - v #[7,2,-3,-1]
            if gap in nums_dict and i != nums_dict[gap]:
                print(i != nums_dict[gap]) #True
                #i != nums_dict[gap]: 이 조건은 동일한 요소가 두 번 사용되지 않도록 합니다.
                # 현재 숫자의 인덱스인 i(0)가 해당 숫자를 target을 달성하기 위해 더할 수 있는 숫자의 인덱스[1,2,3]와 다른지 확인합니다.
                # 만약 두 값이 같다면,
                # 같은 숫자가 두 번 사용되고 있으므로 이는 허용되지 않습니다.
                return [i,nums_dict[gap]]

        # for i,v in enumerate(nums):
        #     gap = target -v
        #     if gap in nums_dict and i != nums_dict[gap]:
        #         return [i,nums_dict[gap]]
        #     nums_dict[v] = i
        #     #현재숫자의 인덱스를 저장하는역할

s =Solution() #class함수 호출
result = s.twoSum([2,7,6,10],9)
print(result)