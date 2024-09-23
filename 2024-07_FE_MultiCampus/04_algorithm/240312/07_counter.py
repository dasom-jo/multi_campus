from collections import Counter

student_list = ["a", "b", "c", "a", "a", "c", "c", "a"]
student_counter = Counter(student_list)
print(student_counter)
print(student_counter.most_common())
print(student_counter.most_common(2))
