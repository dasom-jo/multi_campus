// const timeout = setTimeout(콜백,시간)

const timeout = setTimeout(() => {
    console.log('1.5초후');
},1500);

const interval = setInterval(()=>{
    console.log('1초후마다 실행');
},1000);

const setImmediate = setImmediate(()=>{
    console.log('이건 실행되지않습니다');
})

clearImmediate(Immediate2)