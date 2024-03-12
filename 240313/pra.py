#가장흔한단어
from collections import Counter
#입력
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = "hit"
#. , 제외
paragraph = paragraph.replace(".","").replace(",","")
#소문자 변경및 단어자르기
paragraph_list = [i.lower() for i in paragraph.split()]
# 객체를 counter로 변경
paragraph_counter = Counter(paragraph_list)
#슬라이스변경
second_paragraph = paragraph_counter.most_common()
#인덱스로 출력
print(second_paragraph[1][0])

print('<------------------------->')

#문제 애너그램:문자열 배열을 받아 애너그램 단위로 그룹핑하라
from collections import defaultdict
#입력
def find_anagrams(words):
    #빈리스트딕셔너리생성
    anagram_dict = defaultdict(list)
    #문자를 정렬하고,빈리스트에 추가

    #???:키 : 여러값 (그룹화를 모르겠습니다.)
    for word in words:
        sorted_word = ''.join(sorted(word))
        anagram_dict[sorted_word].append(word)

    #애나그램출력
    for anagram_group in anagram_dict.values():
        if len(anagram_group) >= 1:
            print(anagram_group)
    #???:출력값을 묶는법
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
find_anagrams(words)
