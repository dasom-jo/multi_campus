// let num;

// for (let i=0; i<3;i++){

// num = Number(prompt('점수를 입력하세요'));
// if (num >= 60) {
// console.log('합격입니다.');
// } else {
// console.log('불합격입니다.');
// }
// }

//while (조건) {반복되는 코드.주기별작업}
let i = 0;
while (i < 3) { //무한반복대비 조건 걸음
    let num = Number(prompt('점수를 입력하세요')); //사용자에게 정보요그
    if (num >= 60) { //i조건문
    console.log("합격입니다");//일차 결과
}   else { console.log("불합격입니다.");
}//아닐시 결과
    i++; //무한반복
}



//while (조건) {반복되는 코드.주기별작업}
//do {반복되는코드} while(조건)