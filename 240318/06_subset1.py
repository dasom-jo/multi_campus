#부분집합

class Solution:
    def subsets(self, nums:list[int]) -> list[list[int]]:
        result = []
        subset = []
        def dfs(index, subset):
            reuslt.append(subset) #공집합
            #종료조건
            for i in range(0,len(nums)):
                new_subset = subset[:]
                new_subset.append(nums[ㅑ])
                #print(new_subset)
                dfs(index+1,new_subset)
        dfs(0)
        return result


s =Solution()
print(s.subsets([1,2,3]))

#공집합추가



#[1,2,3]반복
#[1]
#부분집합 = [1]
# 나머지[2,3]반복
#   [2]반복
#   부분집합 = [1,2]
#     부분집합  =[1,2]
#         나머지[3]반복
#         [3]
#         부분집합 = [1,2,3]
#             나머지 [] 반복
#       [3]
#        부분집합 = [1,3]
#         나머지 [] 반복
#[2]
#   부분집합 = [2]
#     나머지 [3]
#         [3]
#         부분집합 = [2,3]
#             나머지 [] 반복
#[3]
#부분집합 =





#[3]









