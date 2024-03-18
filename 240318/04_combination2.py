#순열 permutation
#https://leetcode.com/problems/combinations

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        pass

s =Solution()
print(s.combine(4,2))

#결과물 = []
#1부터 4까지 반복 :for i in range(1, 4+1)
#[1]
#    [1]을 추가 = [1]
    # 2부터 4까지반복
    #     [2]
    #         [2]를 추가 - [1,2]
    #           3부터 4까지 반복
    #               [3]을추가안할거임 why?리스트의 길이가 k와 동일해서
    #               [4]을추가안할거임 why?리스트의 길이가 k와 동일해서
    #     [3]
    #         [3]를 추가 - [1,3]
    #           4부터 4까지 반복
    #               [4]을추가안할거임 why?리스트의 길이가 k와 동일해서
    #
    #     [4]
    #         [4]를 추가 - [1,4]
    #           반복X
#[2]
#    [2]을 추가
#    3부터 4까지반복
#       [3]
#           [3]를 추가 - [2,3]
#           4부터 4까지 반복
#               [4]을추가안할거임 why?리스트의 길이가 k와 동일해서
#       [4]
#           [4]를 추가 - [1,4]
#           반복X
#[3]

#[4]