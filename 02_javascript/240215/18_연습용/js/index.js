// let answer = Math.floor(Math.random() * 31 + 1);
// 1. 사용자로부터 정답이 입력될 때까지 숫자를 입력받는다. (hint. while)
// 2. 입력은 0보다 큰 값만 입력 가능하다. (0보다 작다면 다시 입력 _ hint. continue)
// 3. 정답보다 작으면 up을, 정답보다 크면 down을 출력하고, 계속 숫자를 입력받는다.//
//조건
let answer = Math.floor(Math.random() * 31 + 1);
answer = 21//정한 숫자
let count = 0;//도전횟수세기

while (true) {//조건이 참일경우//반복문
    let num = Number(prompt("숫자를 입력해주세요.[1-31까지]"));//사용자에게 묻기
    //count++; 가능

    if(isNaN((num))) {  //isNaN
    alert('잘못 입력하셨습니다. 다시 입력해주십시요');
    continue; //제대로 입력시 다음반복
    }
    else if(num > answer){
        alert('down👇');// 높은수로 실패시
    }
    else if(num <= answer) {
        alert('up🆙');} //낮은수로실패시
    else {
        count++;//성공시카운트 //count 를 1로 바꾸면 성공시 카운터 지워도됨 
        document.write(`정답입니다!. 답은 "${answer}"이었습니다.<br> 총 [${count}]회 도전하셨습니다~!`);
        break; 
    }
    count++; //실패하더라도 카운트
}


