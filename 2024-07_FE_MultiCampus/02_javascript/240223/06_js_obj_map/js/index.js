/* 맵 : 키-값 한 쌍으로 이루어져있고, 순서가 있다. 어떤 데이터 타입도 key가 될 수 있다. */

// let my_map = new Map();
// my_map.set('name', '홍길동');
// my_map.set('age', 20);

let my_map = new Map([
    ['name', '홍길동'],
    ['age', 20],
]);

/* 맵 체이닝 - 맵의 메서드는 맵을 반환하다. */
my_map
    .set('hobby', 'book')
    .set('family', ['mom', 'dad']);

/* 맵이 가진 프로퍼티, 메서드 */
console.log(my_map.size); // 크기
console.log(my_map.get('family')); // ['mom', 'dad']

console.log(my_map.has('family')); // true
console.log(my_map.has('grade')); // false

console.log(my_map.keys()); // MapIterator
console.log(my_map.values()); // MapIterator
console.log(my_map.entries()); // MapIterator

console.log(my_map.delete('family')); // true
console.log(my_map.delete('grade')); // false

console.log(my_map);
my_map.clear();
console.log(my_map);