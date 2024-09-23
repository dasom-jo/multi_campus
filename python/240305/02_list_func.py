#list
#append(요소) : 리스트 끝에 요소추가
#insert(인덱스,요소):특정 위치에 요소를 삽입
#pop(),pop(위치) : 맨뒤 또는 특정위치에서 요소를 추가
#in을 통한 요소존재여부 확인
#sort(): 리스트 정렬
#reverse(): 순서 뒤집기
#extend(추가할리스트) :리스트합치기
#index(값): 같은 값인 위치반환 (중복된경우, 앞에있는 인덱스를 반환한다)
#count(값):같은 값의 개수를 반환
#len(리스트) : 리스트의 길이 = 요소의 개수
#리스트를 이용한 반복


march_list = []

#append(요소) : 리스트 끝에 요소를 추가
march_list.append('파묘')
march_list.append('밤양갱')
march_list.append(240305)
#print(march_list) #['파묘', '밤양갱', 240305]

#insert(인덱스,요소) : 특정위치에 요소를 삽입
march_list.insert(1,'꽃샘추위')
#print(march_list) #['파묘', '꽃샘추위', '밤양갱', 240305]

#pop(), pop(위치) :맨뒤 또는 특정위치에서 요소를 꺼냄
date= march_list.pop()
print(date) #240305
#print(march_list) #['파묘', '꽃샘추위', '밤양갱']
music = march_list.pop(2)
print(music) #밤양갱
print(march_list) #['파묘', '꽃샘추위']

#in 을 통한 요소 존재여부 확인
print('파묘' in march_list) #true
text = '삼일절'
if text not in march_list:
    march_list.append(text)
    print(f'{text}이/가 추가되었습니다')
else: 
    print(f'{text}은/는 이미 존재합니다.')

#sort() : 리스트 정렬
march_list.sort()
print(march_list) #['꽃샘추위', '삼일절', '파묘']

#reverse() : 순서 뒤집기
march_list.reverse()
print(march_list) #['파묘', '삼일절', '꽃샘추위']

#extend(추가할리스트) :리스트합치기
new_list = ['파묘', 'Git/GitHub', 'UX/UI' , '취업특강', '포트폴리오']
march_list.extend(new_list)
print(march_list)#['파묘', '삼일절', '꽃샘추위', '파묘', 'Git/GitHub', 'UX/UI', '취업특강', '포트폴리오']

#index(값) : 같은 값인 위치반환 (중복된 경우, 앞에있는 인덱스를 반환한다)
movie_index = march_list.index('파묘')
print(movie_index) #0

#count(값) : 같은 값의 개수를 반환
movie_count = march_list.count('파묘')
print(movie_count) #2

#len(리스트) :리스트의 길이 = 요소의 개수
print(len(march_list)) #8

#리스트를 이용한 반복
for i in range(len(march_list)):
    print(i,march_list[i])

