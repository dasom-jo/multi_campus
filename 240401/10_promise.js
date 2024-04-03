//콜백지옥해결법
//1.프로미스
//->비동기 작업은 직접 추적이 어려우므로 프로미스를 같이 실행
//2.async/await를사용

const condition = true;

const promise = new Promise((resolve,reject)=>{
    if(condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
});

promise
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=> {
        console.error(err);
    })
    .finally(()=>{
        console.log('종료');
    })