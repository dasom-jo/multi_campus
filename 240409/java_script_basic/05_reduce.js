<<<<<<< HEAD
/*배열 메서드 reduce()-
배열을 통해 하나의 값을 만든다
배열의 각요소에 대해 주어지 함수를(reducer)를 실행하다, 하나의 값을 반환*/

/*reduce의 사용구조
Array.reduce(callback,initialValue);
callback: 리듀서 함수_ (acc,cur,idx,src) =>{...}
acc : 누적값 ,cur: 현재값, idx: 현재인덱스 ,src:원본배열 */
//초기값이 제공되지않으면 acc에 1이 들어오고 cur은 배열[1]인 2부터 들어온다
const arr = [1,2,3,4,5];
const lastValue1 = arr.reduce((acc, cur, idx, src)=>{
    console.log('현재값',cur);
    console.log('누적값',acc);
    return acc + cur;
},);
console.log(lastValue1);

//초기값을 0으로 햇을경우
let a = [1, 2, 3, 4, 5];

a.reduce((acc, cur) => {
    console.log('acc값입니다', acc);
    console.log('cur값입니다', cur);
    acc = acc + cur;
    console.log('cur을 더해준 acc값입니다.', acc);
    return acc;
}, 0);


const lastValue2 = arr.reduce((acc, cur)=>{return acc + cur;},10); //초기값
console.log(lastValue2);

const lastValue3 = arr.reduce((acc, cur)=>{
    if(cur % 2 === 0){
        acc.push(cur)
    }
    return acc;
},[]);
console.log(lastValue3);//[ 2, 4 ]

=======
/*배열 메서드 reduce()-
배열을 통해 하나의 값을 만든다
배열의 각요소에 대해 주어지 함수를(reducer)를 실행하다, 하나의 값을 반환*/

/*reduce의 사용구조
Array.reduce(callback,initialValue);
callback: 리듀서 함수_ (acc,cur,idx,src) =>{...}
acc : 누적값 ,cur: 현재값, idx: 현재인덱스 ,src:원본배열 */

const arr = [1,2,3,4,5];
const lastValue1 = arr.reduce((acc, cur, idx, src)=>{
    console.log('현재값',cur);
    console.log('누적값',acc);
    return acc + cur;
},);
console.log(lastValue1);


const lastValue2 = arr.reduce((acc, cur)=>{return acc + cur;},10); //초기값
console.log(lastValue2);

const lastValue3 = arr.reduce((acc, cur)=>{
    if(cur % 2 === 0){
        acc.push(cur)
    }
    return acc;
},[]);
console.log(lastValue3);//[ 2, 4 ]

>>>>>>> 774db5d737327d284b218d744e04dd18ef85365d
