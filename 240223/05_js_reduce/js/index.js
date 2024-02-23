//reduce
// 배열의 각요소에대해 주어진 함수를 실행하고, 하나의 결과값을 반환
//forEach(f(요소,인덱스,배열))
//map(f(요소,인덱스,배열))
//filter(f(요소,인덱스,배열))
//reduce((누산기,요소,인덱스,배열)=>{},초기값)
let total = nums.reduce((tot, num) =>{ 
    console.log(tot, num);
    return tot + num} , 5
);
console.log(total);



let strArr = ["Hello","Nice","Javascript"];   
let result = strArr.reduce((tot, str)=> [...tot,str.length],[] );
console.log(result);


//...acc,str.length =[].concat[5]