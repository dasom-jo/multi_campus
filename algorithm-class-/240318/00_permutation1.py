#순열 permutation
#https://leetcode.com/problems/permutations
#서로다른 정수배열에서 가능한 모든순열을 반환

class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        main_result = []
        sub_result = [] #현재까지의 선택
        def dfs(nums):
            if len(nums) == 0:
                main_result.append(sub_result[:]) #중요
                return
            for i in nums:
                sub_result.append(i)
                new_nums = nums[:]
                new_nums.remove(i)
                dfs(new_nums)
                sub_result.pop()
        dfs(nums)
        return main_result
        #중요 =빈배열 반환POP의영향으로 텅비기때문에 복제를 해둠

        # [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
        #[1,2,3]반복
        #[1]
        #결과물에 [1] 만들기
        #[1,2,3] 복제후 [1] 제거 -> [2,3]
        #[2,3]을반복
        #   [2]
        # 결과물에 [2]추가
        # [2,3]복제후[2]제거 -> [3]
        # [3]을반복
        #       결과물에 [3] 추가
        #       [3]복제후 [3]제거 -> []
        #       []을반복! 비어있다면 결과물 반환 [1,2,3]
        #   [3]
        #   결과물에 [3] 추가
        #   [2,3] 복제후 [3]제거 -> [2]
        #   [2]을반복
        #       #결과물에 [2]추가
        #       #[2]복제후 [2] 제거 -> []
        #       []을반복! 비어있다면 결과물 반환[1,3,2]
        #[2]
        #결과물에 [2] 만들기
        #[1,2,3] 복제후 [2]제거 -> [1,3]
        #[1,3]을반복
        #   [1]
        #   결과물에 [1] 추가
        #   [1,3] 복제후 [1] 제거 -> [3]
        #   [3]을반복
        #       #결과물에 [3]추가
        #       #[3]복제후 [3] 제거 -> []
        #       []을반복 ! 비어있다면 결과물 반환 [2,1,3]
        #   [3]
        #   결과물에 [3] 추가
        #   [1,3]복제후 [3] 제거 -> [1]
        #    [1]을반복
        #       결과물에 [1]추가
        #       [1]복제후 [1]제거 -> []
        #       []을반복 ! 비어있다면 결과물반환 [2,3,1]
        # [3]
        # 결과물에  [3] 만들기
        # [1,2,3]복제후 [3]제거 -> [1,2]
        # [1,2]을반복
        #   [1]
        #   결과물에 [1] 추가
        #   [1,2]복제후 [1]제거 -> [2]
        #   [2]을반복
        #       결과물에 [2]추가
        #       [2]복제후 [2]제거 -> []
        #       []을반복 ! 비어있다면 결과물 반환 [3,1,2]
        #   결과물에 [2] 추가
        #   [1,2]복제후 [2]추가
        #   [1,2]복제후 [2]제거 -> [1]
        #   [1]을 반복
        #       결과물에 [1]추가
        #       [1]복제후 [1] 제거 -> []
        #       []을 반복 ! 비어있었다면 결과물 반환 [3,2,1]

s = Solution()
print(s.permute([1,2,3]))
