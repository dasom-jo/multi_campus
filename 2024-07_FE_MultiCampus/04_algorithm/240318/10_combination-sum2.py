class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        result = []
        stack = [(0, target, [])]
        while stack:
            index, target, list = stack.pop()
            if target == 0:
                result.append(list[:])
            elif target < 0:
                continue
            else:
                for i in range(index, len(candidates)):
                    new_list = list + [candidates[i]]
                    new_target = target - candidates[i]
                    stack.append((i, new_target, new_list))
        return result

s = Solution()
print(s.combinationSum([2,3,6,7], 7))

# 2, 3, 6, 7 | target = 7
# 2, 3, 6, 7 반복
# 1. [2]
#   target = target - 2 (5)
#   2, 3, 6, 7 반복
#   1. [2]
#       target = target - 2 (3)
#       2, 3, 6, 7 반복
#       1. [2]
#           target = target - 2 (1)
#           2, 3, 6, 7 반복
#           1. [2]
#               target = target - 2 (-1) !!!!!! 이건 안되네?
#           2. [3]
#               target = target - 3 (-2) !!!!!! 이건 안되네?
#           3. [6]
#               target = target - 6 (-5) !!!!!! 이건 안되네?
#           4. [7]
#               target = target - 7 (-6) !!!!!! 이건 안되네?
#       2. [3]
#           target = target - 3 (0) 👍👍👍👍👍👍 [반환]
#           2, 3, 6, 7 반복
#           1. [2]
#               target = target - 2 (-2) !!!!!! 이건 안되네?
#           2. [3]
#               target = target - 3 (-3) !!!!!! 이건 안되네?
#           3. [6]
#               target = target - 6 (-6) !!!!!! 이건 안되네?
#           4. [7]
#               target = target - 7 (-7) !!!!!! 이건 안되네?
#       3. [6]
#       4. [7]
#   2. [3]
#   3. [6]
#   4. [7]

# 2. [3]
#
# 3. [6]
#
# 4. [7]