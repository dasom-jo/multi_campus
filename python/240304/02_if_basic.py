# msg = int(input('숫자를 입력하세요/n'))

# if msg >= 50 :
#     print('큰수입니다.')
# else : 
#     print('낮은수 입니다')
    
msg = 100
if msg : 
    print('T')
else :
    print('F')
    
print("bool(0) ->", bool(0)) #0 = false
print("bool(1) ->", bool(1)) # 0을 제외하면 true
print("bool(-1) ->", bool(-1)) # 0을 제외하면 true

print("bool(0.0) ->", bool(0.0)) #0 = false
print("bool(0.5) ->", bool(0.5)) # 0을 제외하면 true
print("bool(0.5) ->", bool(-0.5)) # 0을 제외하면 true

print("bool('문자열') ->", bool('문자열')) #비어잇지않으면 true
print("bool(' ') ->", bool(' ')) #비어잇지않으면 true
print("bool('') ->", bool('')) #빈문자열은 거짓