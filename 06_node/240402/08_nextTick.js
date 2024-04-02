setImmediate(()=> {
    console.log('5. setImmediate');
})

process.nextTick(()=>{
    console.log('2. nextTick');
})

setTimeout(()=> {
    console.log("4. setTimeout");
}, 0)

Promise.resolve().then(()=> {
    console.log("3. Promise");
})

console.log('1. no callback');