/*set : 키 없이 배열처럼 나열하나 중복되는 요소가 없다*/ 

let my_set = new Set();
my_set.add(1).add(2).add(3);
my_set.add(1); // 중복된 값은 하나만 유지

console.log(my_set);

let nums = [10,20,30,20,30,10];
let my_set2 = new Set(nums);
console.log(my_set2); //중복되는값 제거 [10,20,30]

for(let num of my_set2) {
    console.log(num);
}

/*set이 가진 프로퍼티와 메서드*/
onsole.log(my_set2.size); // 크기
console.log(my_set2.has(30)); // true
console.log(my_set2.has(40)); // false

console.log(my_set2.keys()); // setIterator
console.log(my_set2.values()); // setIterator
console.log(my_set2.entries()); // setIterator

console.log(my_set2.delete(30)); // true
console.log(my_set2.delete(40)); // false

my_set2.clear();
console.log(my_set2);