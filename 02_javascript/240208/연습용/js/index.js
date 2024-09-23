// let subject1 = "프로그램 입문자를 위한 '자바스크립'"

// let subject2 = '프로그램 입문자를 위한 \'자바스크립\'';

// let name = '조다솜';
// let birthday = 1998;
// document.write(`<h1>${2024 - birthday}살의 ${name}님 안녕하세요!</h1>`);

// let userpwd = prompt('비밀번호를 입력하세요')
// console.log(userpwd)

// let textTen = '10';
// let textFive = '5';
// let five = 5;
// console.log(textFive + textTen);
// console.log(Number(textTen) + five);

// let kor_score = Number(prompt('국어 점수'));
// let eng_score = Number(prompt('영어 점수'));
// let math_score = Number(prompt('수학 점수'));

// let avg = (kor_score +eng_score + math_score) / 3;
// console.log(avg);

// let kor_score = 70;
// let eng_score = 80;
// let math_score = 90;

// let avg = (kor_score + eng_score + math_score) / 3;

// let result;

// if (avg >= 90) result = '수';
//     else if (avg >= 80) result = '우';
//     else if (avg >= 70) result = '미';
//     else if (avg >= 60) result = '양';
//     else result = '가';

//     let msg = `<h1> 당신의 성적은? ${result}</h1>`
//     document.write(msg)

function chk() {
    let num = Number(document.getElementById('num_input').value);
    if (!num) {
        document.write('에러');
    } else if (num % 5 === 0 || num % 7 === 0) {
        document.write('통과');
    } else {
        document.write('통과 실패');
    }
}

