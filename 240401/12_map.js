const m = new Map();
//map은 키-값쌍을 저장하는 자료구조
//먼저 빈 map값을 생성한후 set 을 이용해 키값 추가
m.set('a','b');
m.set(3, 'c');
const o = {};
m.set(o, 'object');
 //get매서드를 이용해 키에 연결된 값을 가져옴
console.log(m.get('a'));
console.log(m.get(3));
console.log(m.get(o));
console.log(m.size);

for (const[k, v]of m) {
    console.log(k, v);
}
//has:map 객체내에 키가 존재하는지 물음
console.log(m.has('a'));
//값을 삭제햇다면 true반환
console.log(m.delete('a'));
console.log(m);//Map(2) { 3 => 'c', {} => 'object' }
m.clear()
console.log(m);//Map(0) {}