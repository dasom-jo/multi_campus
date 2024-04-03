setImmediate(()=> {
    console.log('5.setImmediate'); //5등
})

process.nextTick(()=>{
    console.log('2.nextTick'); //2등
})

setTimeout(()=> {
    console.log('4.setTimeout');//4등
}, 0)

Promise.resolve().then(()=> {
    console.log("3.Promise"); //3등
})

console.log('1.no callback'); //첫번째