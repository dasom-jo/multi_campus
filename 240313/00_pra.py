#가장흔한단어
#https://leetcode.com/problems/most-common-word
# from collections import Counter
# #입력
# paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
# banned = "hit"
# #. , 제외
# paragraph = paragraph.replace(".","").replace(",","")
# #소문자 변경및 단어자르기
# paragraph_list = [i.lower() for i in paragraph.split()]
# # 객체를 counter로 변경
# paragraph_counter = Counter(paragraph_list)
# #슬라이스변경
# second_paragraph = paragraph_counter.most_common()
# #인덱스로 출력
# print(second_paragraph[1][0])
'''썜풀이'''
# import re, collections
# class Solution:
#     def mostCommonWord(self, paragraph: str, banned: list[str]) -> str:
#         # re.sub('정규표현식','대체문자',paragraph)
#         new_paragraph = re.sub('\w',' ',paragraph).lower(0)
#         new_paragraph_list = [i for i in new_paragraph.split() if i not in banned]
#         new_paragraph_counter = collections.Counter(new_paragraph_list)
#         #튜플임
#         result_list = new_paragraph_counter.most_common(1)
#         result_tuple = result_list[0]
#         result = rsult_tuple[0]
#         return result

# s = Solution()
# p = "Bob hit a ball, the hit BALL flew far after it was hit."
# b = ["hit"]
# s.mostCommonWord(p,b)

print('<------------------------->')

#문제 애너그램:문자열 배열을 받아 애너그램 단위로 그룹핑하라
#https://leetcode.com/problems/group-anagrams

# from collections import defaultdict
# #입력
# def find_anagrams(words):
#     #빈리스트딕셔너리생성
#     anagram_dict = defaultdict(list)
#     #문자를 정렬하고,빈리스트에 추가

#     #???:키 : 여러값 (그룹화를 모르겠습니다.)
#     for word in words:
#         sorted_word = ''.join(sorted(word))
#         anagram_dict[sorted_word].append(word)

#     #애나그램출력
#     for anagram_group in anagram_dict.values():
#         if len(anagram_group) >= 1:
#             print(anagram_group)
#     #???:출력값을 묶는법
# words = ["eat", "tea", "tan", "ate", "nat", "bat"]
# find_anagrams(words)
import collections

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
            #여기 리스트를 넣을거야
            my_anagrams_dd = collections.defaultdict(list)
            for str in strs:
                my_anagrams_dd[''.join(sorted(str))].append(str)
            return list(my_anagrams_dd.values())

s = Solution()
strs = ["eat","tea","tan","ate","nat","bat"]
result = s.groupAnagrams(strs)
print(result)
