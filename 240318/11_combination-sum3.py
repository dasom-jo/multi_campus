import itertools
class Solution:
    def combinationSum(self, candidates: list[int], target: int)->list[list[int]]:
        result = []
        for i in range(target//2+1):
            #print(i) 0,1,2,3
            #중복을 허용할때 조합의 길이가 target값을 초과하는 경우를막기위해
            for j in itertools.combinations_with_replacement(candidates, i):
                if sum(j) == target:
                    result.append(list(j))
        return result
s = Solution()
print(s.combinationSum([2,3,6,7],7))