let num = Number(prompt('반복 횟수를 입력하세요'));

// num = 3
for (let i = num; 0 < i; i--) {
    // i = 3, 0 < 3 ---> 참
    // 출력 : Hello Javascript 1번째 출력
    // i = 2, 0 < 2 ---> 참
    // 출력 : Hello Javascript 2번째 출력
    // i = 1, 0 < 1 ---> 참
    // 출력 : Hello Javascript 3번째 출력
    // i = 0, 0 < 0 ---> 거짓 => 조건문 종료
    console.log(`Hello Javascript ${num - i + 1}번째 출력`);
}

for (let i = 0; i < num; i++) {
    // i = 0, 0 < 3 ---> 참
    // 출력 : Hello Javascript 1번째 출력
    // i = 1, 1 < 3 ---> 참
    // 출력 : Hello Javascript 2번째 출력
    // i = 2, 2 < 3 ---> 참
    // 출력 : Hello Javascript 3번째 출력
    // i = 3, 3 < 3 ---> 거짓 => 조건문 종료
    console.log(`Hello Javascript ${i + 1}번째 출력`);
}

for (let i = 1; i <= num; i++) {
    // i = 1, 1 <= 3 ---> 참
    // 출력 : Hello Javascript 1번째 출력
    // i = 2, 2 <= 3 ---> 참
    // 출력 : Hello Javascript 2번째 출력
    // i = 3, 3 <= 3 ---> 참
    // 출력 : Hello Javascript 3번째 출력
    // i = 4, 4 <= 3 ---> 거짓 => 조건문 종료
    console.log(`Hello Javascript ${i}번째 출력`);
}

/* 
// 모범 답안
// 사용자 입력 받기
let numberOfTimes = parseInt(prompt("반복 횟수를 입력하세요:")); // 입력 문자열을 정수로 변환
// 입력값이 유효한 숫자인지 확인
if (!isNaN(numberOfTimes)) {
    // 사용자가 입력한 숫자만큼 반복
    for (let i = 0; i < numberOfTimes; i++) {
        console.log("Hello JavaScript");
    }
} else {
    console.log("유효한 숫자를 입력해 주세요.");
}
*/