k_movie = ['파묘','서울의봄']
movie = ['윙카','아가일',k_movie]

print(movie)

# 좋지않아
# my_movie = movie
# print(my_movie is movie)#True
# my_movie.append('태양은 없다')
# print(movie)

# my_movie =movie[:]
# # print(my_movie == movie) #True
# # print(my_movie is movie) #f
# my_movie.append('없다')
# print(my_movie) #얉은 복사:객체안에 객체는 안변함
# print(movie[2])
# print(my_movie[2] is movie[2])

#깊은복사
import copy
my_movie = copy.deepcopy(movie)
print(my_movie is movie) 
print(my_movie[2] is movie[2])

