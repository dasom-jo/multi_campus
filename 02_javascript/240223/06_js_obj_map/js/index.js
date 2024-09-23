/*맵 : 키-값 한쌍으로 이루어져있고, 순서가 있다. 어떤 데이터 타입도 key가 될수있다 */
//map.set(key,value) set은 map객체에 새로운 요소를 추가하는  메서드

/*let my_map = new Map();
my_map.set('name','홍길동');
my_map.set('age', 20);

console.log(my_map);*/

let my_map = new Map([
    ['name','홍길동'],
    ['age', '20'],
]);

/*맵 체이닝 - 맵의 메서드는 맵을 반환한다 */
my_map
    .set('hobby', 'book')
    .set('family',['mom','dad'])


/*맵이 가진 프로퍼티, 메서드*/
console.log(my_map.size);//크기 4개 각 요소의 갯수
console.log(my_map.get('family'));//['mom','dad']

console.log(my_map.has('family')); //true
console.log(my_map.has('grade')); //false

console.log(my_map.keys()); // MapIterator 키 반복
console.log(my_map.values());// MapIterator값 반복
console.log(my_map.entries());// MapIterator키- 값 반복

console.log(my_map.delete('family')); //true 성공적으로 삭제하면 true
console.log(my_map.has('grade')); //false

console.log(my_map);
my_map.clear(); //초기상태로 돌림
console.log(my_map);
