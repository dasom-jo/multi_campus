/*reduce*/
//배열의 각 요소에 대해 주어진 함수를 실행하고, "하나의 결과값을 반환"

let nums = [1,2,3,4,5];

/*let total = 0;
nums.forEach(num => total += num);
console.log(total);*/

//forEach((요소,인덱스,배열)=>{})
//map((요소,인덱스,배열)=>{})
//filter((요소,인덱스,배열)=>{})
//reduce((누산기,요소,인덱스,배열)=>{},초기값) / 이전요소들의 결과를 누적하여 반환

let total = nums.reduce((tot,num)=>{
    console.log(tot,num);
    return tot +num;
},0);
console.log(total);
//tot는 누적값//초기값으로 시작

let strArr = ['hello','nice','javascript'];
//let result = strArr.reduce((acc,str)=> acc.concat(str.length),[]);
let result = strArr.reduce((acc, str) => [...acc, str.length],[]);
console.log(result); 
//[5,4,10] reduce를 사용해서 문자열의 길이를 배열로 반환 
//[]빈 배열이 공백