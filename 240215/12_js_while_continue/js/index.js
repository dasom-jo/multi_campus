// let sum = 0;

// for (let i =1; i < 10; i++){
   
//     if (i == 5)
//     // break;10(1+2+3+4)
//         //continue;50(1+--+10)
//         continue;
// }
// sum +=1
// document.write(`<h1>${sum}</h1>`)

// 1부터 10가지 반복을 하면서 홀수합계만 구하기

// for (let i = 1; i < 10; i++){
//     if(i %2 !==0 )
//     //continue;//1+3+5+7+9
//     sum +=i;
// } else {
//     continue;
// }
// //(i % 2) ? sum += i :0 ;
// document.write(`${sum}`)

// let i = 0;
// while (true) {
//     if (i >= 10){
//         break;
// }
//     i++;
//     if (1 %2 ) {
//         sum +=i;//sum = sum + i
//     } else {
//         continue;}

//     console.log(sum)
// }

let i = 0;//선언 변수의 초기화
while (true) { //참이면
    if (i >= 10) { //
        break;
    }
    i++;//무한반복
    if(i % 2) { //1 3 5 7 9 
    sum =+ i;
    //
    //
    }else {
    continue;
    }
    console.log(sum);
}

