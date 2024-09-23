#list
#list[start,end,step] //기본
#list[list[index],list[index]] //인덱스이용
#list3=[list1,list2] = [[list1],[list2]] //리스트를 합침
#print(list3[배열][인덱스]) //합쳐진리스트에서 특정 리스트 추출 

alphabet = ['A','B','C','D','E']

vow = alphabet[::2] #['A', 'E'] [start,end,step]
#시작값과 끝이 처음부터 끝이면 생략가능

#vow = alphabet[0:5:4] #['A', 'E']

#print(vow)

vow = [alphabet[0],alphabet[2]] #//인덱싱  #['A', 'C'] /

consonant = alphabet[1:4]

new_alphabet = [vow, consonant]

print(new_alphabet) #[['A', 'C'], ['B', 'C', 'D']]

#new_alphabet 에서  B 추출
print(new_alphabet[1][0])