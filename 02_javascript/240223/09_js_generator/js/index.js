/* 제너레이터 : 이터레이터를 반환(yield)하는 함수 */
function* gen() {
    yield '봄';
    yield '여름';
    yield '가을';
    yield '겨울';
}

let seasons_iterator = gen();
console.log(seasons_iterator.next()); // {value: '봄', done: false}
console.log(seasons_iterator.next()); // {value: '여름', done: false}
console.log(seasons_iterator.next()); // {value: '가을', done: false}
console.log(seasons_iterator.next()); // {value: '겨울', done: false}
console.log(seasons_iterator.next()); // {value: undefined, done: true}
console.log(seasons_iterator);

let seasons_iterator2 = gen();
for (let season of seasons_iterator2) {
    console.log(season); 
}

// 제너레이터(Generator)와 일반적인 이터레이터(Iterator) 사이의 주요 차이점은 
// 제너레이터가 코드 블록을 통해 값을 반환하는 함수로서 동작한다는 것입니다. 
// 이는 함수를 잠시 중단하고 나중에 돌아올 수 있는 기능을 제공합니다. 
// 이에 반해 일반적인 이터레이터는 반복 가능한 객체의 요소를 반복하는 데 사용되는 객체입니다.