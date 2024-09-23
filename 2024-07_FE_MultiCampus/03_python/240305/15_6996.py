CASE_NUM = int(input())

for _ in range(CASE_NUM):
    word_a, word_b = input().split()
    # word_a를 이용한 딕셔너리 생성
    d_word_a = {}
    for i in word_a:
        if i in d_word_a:
            d_word_a[i] += 1
        else:
            d_word_a[i] = 1
    
    # word_b를 이용한 딕셔너리 생성
    d_word_b = {}
    for i in word_b:
        if i in d_word_b:
            d_word_b[i] += 1
        else:
            d_word_b[i] = 1
    
    # 딕셔너리 두 개 비교
    if d_word_a == d_word_b:
        print(f"{word_a} & {word_b} are anagrams.")
    else :
        print(f"{word_a} & {word_b} are NOT anagrams.")