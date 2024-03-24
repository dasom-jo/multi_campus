#https://leetcode.com/problems/permutations
#서로다른 정수배열에서 가능한 모든순열을 반환
import itertools
#itertools.permutations(iterable, r=None):
    # 주어진 길이(r)의 순열(permutations)을 생성합니다.
    # 중복요소를 제외함
class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        return[list(i) for i in itertools.permutations(nums)]
        # for i in itertools.permutations(nums):
        #     result.append(list(i))
        # return result



s = Solution()
print(s.permute([1,2,3]))

