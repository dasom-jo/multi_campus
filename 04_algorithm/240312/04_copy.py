k_movie = ['파묘', '서울의봄']
movie = ['웡카', '아가일', k_movie]

# my_movie = movie
# print(my_movie is movie)
# my_movie.append('태양은없다')
# print(movie)

# 얕은 복사 # JS : my_movie = [...movie]
# my_movie = movie[:] 
# print(my_movie is movie)
# my_movie.append('태양은없다')
# print(my_movie)
# print(my_movie[2] is movie[2])

# k_movie.append('올드보이')
# print(my_movie, movie)

# 깊은 복사
import copy
my_movie = copy.deepcopy(movie)
print(my_movie is movie)
print(my_movie[2] is movie[2])
k_movie.append('올드보이')
print(my_movie, movie)
