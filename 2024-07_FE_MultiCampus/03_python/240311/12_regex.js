let id_regex = /[a-z0-9]/;
let regex = /[a-z0-9]/g;
let user_id = 'dlwlrma0311'

console.log(regex.exec(user_id)) // 조건에 부합하는 가장 첫 번째 결과 반환
console.log(user_id.match(regex)); // 조건에 부합하는 결과 반환
console.log(user_id.search(regex)); // 조건에 부합하는 가장 첫 번째 인덱스 반환

if (id_regex.test(user_id)) {
    console.log('아이디 사용 가능');
} else {
    console.error('아이디 사용 불가능');
}

let msg = '안녕하세요. Hello, 만나서 반갑습니다. Nice to meet you. 정규식은 참 편하네요!'
let msg_regex = /[^가-힣!]+/g
// msg = msg.replace(msg_regex, '')
// console.log(msg);
let arr = msg.split(msg_regex)
console.log(arr);