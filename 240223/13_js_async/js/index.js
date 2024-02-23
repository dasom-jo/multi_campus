//동기적 (synchonous)처리
//결과가 주어질떄까지 대기

console.log('1st');
console.log('2nd');
console.log('3rd');

//비동기적인처리Asynchronous
//결과가 주어지는 동안 다른작업처리 
console.log('1st');
setTimeout(() => {
    console.log('2nd');
},0)

console.log('3rd'); 
//순서 바귀어서 나옴
//setTimeout 메서드가 비동기적인 메서드이기때문에 뒤에 실행된다