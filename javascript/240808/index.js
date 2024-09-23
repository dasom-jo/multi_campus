//string 객체
//trim() 문자열 양쪽 끝의 공백없애기
//객체이름.trim()

//split() 문자열을 특정기호로 자르기
//객체이름.split('\n')

//js->json
//JSON.stringify(data,null,2)
//json->js
//JSON.parse(data)

//math객체------------------------------------
//const num = Math.random() 0<=결과값<1 의 범위
//console.log("0~10사이의 랜덤값", num*10)

//lodash라이브러리
//_.sortBy(배열OR객체, [함수=[_.identity]])
//_.sortBy(books, (book)=>book.price) 가격으로 정렬한뒤 출력합니다


//객체와 배열 고급
//속성존재여부:undefined로 확인
const object = {
    name:'혼공파',
    price:'30000'
}
//객체 내부에 속성확인
if(object.name !== undefined){
    console.log('속성이 잇습니다');
}else{
    console.log('속성이 없습니다');
}
//속성이 잇습니다
if(object.author !== undefined){
    console.log('속성이 잇습니다');
}else{
    console.log('속성이 없습니다');
}
//속성이 없습니다
//짧게사용
object.name || console.log('속성이잇습니다');
object.author || console.log('속성이없습니다');

//속성지정
object.name = object.name !== undefined? object.name :'제목미정'

