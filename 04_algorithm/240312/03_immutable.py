# set 의 값(요소)에는 가변객체가 들어올 수 없다!
# my_set = set([1, 2, 3,{'name': 'son'}, [1, 2, 3]])
# print(my_set)

# dict의 키에는 가변객체가 들어올 수 없다!
my_dict = {
    'name': 'son',
    [1, 2] : 1,
    {1,2,3} : 1
}