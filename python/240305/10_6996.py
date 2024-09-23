#애너그램
#문자열은 immutable불변객체
CASE_NUM = int(input())

for _ in range(CASE_NUM):
    word_a, word_b = input().split()
    if sorted(word_a) == sorted(word_b):
        #원본을변경하지않고 정렬
        print(f'{word_a} & {word_a} are anagrams.')
    else:
        print(f'{word_a} & {word_a} are NOT anagrams.')
        