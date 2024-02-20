while (true) { //참이면
    let num = Number(prompt('오늘은 몇 일인가요?')); //사용자에게 날짜를 묻는 행위
    if (num === 15) {//15라는 숫자가 들어가면
        alert('정답');//결과값
        break;//멈추고
    } else {//아니라면
        alert('틀렸습니다. 다시 시도합니다.');
    }
}