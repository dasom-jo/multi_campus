setImmediate(()=> {
    console.log('5.setImmediate'); //5등
})

process.nextTick(()=>{
    console.log('2.nextTick'); //2등
})//현재 이벤트루프의 마지막단계에서 실행되므로 다른비동기작업들보다 우선적으로처리

setTimeout(()=> {
    console.log('4.setTimeout');//4등
}, 0)

Promise.resolve().then(()=> {
    console.log("3.Promise"); //3등
})//then()은 promise의 메서드이다 

console.log('1.no callback'); //첫번째
//코등 가장위에있는 동기적인부분