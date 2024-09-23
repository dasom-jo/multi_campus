// let kor_score = Number(prompt('국어 점수'));
// let eng_score = Number(prompt('영어 점수'));
// let math_score = Number(prompt('수학 점수'));

let kor_score = 70;
let eng_score = 80;
let math_score = 90;

let avg = (kor_score + eng_score + math_score) / 3;

// 100 수 90 우 80 미 70 양 60 가
let result;

if (avg >= 90) result = '수';
else if (avg >= 80) result = '우';
else if (avg >= 70) result = '미';
else if (avg >= 60) result = '양';
else result = '가';

let msg = `<h1>당신의 성적은? ${result}</h1>`
document.write(msg);

let readHbrb = true;
let readKjpj = true;

if (readHbrb || readKjpj) {
    document.write('하나라도 읽어서 다행');
}
