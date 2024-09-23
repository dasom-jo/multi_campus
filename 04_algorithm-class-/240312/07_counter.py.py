from collections import Counter
#자동으로계산해서 딕셔너리로 리턴

student_list = ["a","b","c","c","a","b","b"]
student_counter = Counter(student_list)
print(student_counter)
#Counter({'b': 3, 'a': 2, 'c': 2})
print(student_counter.most_common())
#[('b', 3), ('a', 2), ('c', 2)]
print(student_counter.most_common(2))
#[('b', 3), ('a', 2)]
#에너그램을 풀어보기