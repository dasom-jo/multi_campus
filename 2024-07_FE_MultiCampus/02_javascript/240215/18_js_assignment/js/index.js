let answer = Math.floor(Math.random() * 31 + 1);
// 1. 사용자로부터 정답이 입력될 때까지 숫자를 입력받는다. (hint. while)
// 2. 입력은 0보다 큰 값만 입력 가능하다. (0보다 작다면 다시 입력 _ hint. continue)
// 3. 정답보다 작으면 up을, 정답보다 크면 down을 출력하고, 계속 숫자를 입력받는다.
let num;
let count = 1;
while (num !== answer) {
    num = Number(prompt('숫자를 입력해주세요'));
    if (num <= 0) {
        alert(`0보다 큰 숫자 입력하세요`);
    } else if (num > answer) {
        count += 1;
        alert("down");
    } else if (num < answer) {
        count += 1;
        alert(`up`);
    } else if (!num) {
        alert(`숫자 입력하세요`)
    }
}
alert(` ${count}번만에 성공 ! 정답은 ${num}이었습니다`)