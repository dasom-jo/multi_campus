k_movie = ['파묘','서울의봄']
movie = ['윙카','아가일',k_movie]

# my_movie = movie
# print(my_movie is movie) #True
# my_movie.append('태양은없다')
# print(movie)
#['윙카', '아가일', ['파묘', '서울의봄'], '태양은없다']

# '''얕은복사'''
#js : my_movie = [..movie]
my_movie = movie[:]
print(my_movie is movie)
#False
my_movie.append('태양')
print(my_movie)
#['윙카', '아가일', ['파묘', '서울의봄'], '태양']
print(my_movie[2] is movie[2])
#true

# k_movie.append('올드보이')
# print(my_movie,movie)

'''깊은복사'''
# import copy
# my_movie = copy.deepcopy(movie)
# print(my_movie is movie) #False
# print(my_movie[2] is movie[2]) #False
# k_movie.append('올드보이')
# print(my_movie,movie)
#완전히 복사되어 서로 다른 객체가 되었다
