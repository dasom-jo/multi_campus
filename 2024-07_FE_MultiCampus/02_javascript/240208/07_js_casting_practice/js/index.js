let kor_score = Number(prompt('국어 점수'));
let eng_score = Number(prompt('영어 점수'));
let math_score = Number(prompt('수학 점수'));

let avg = (kor_score +eng_score + math_score) / 3;
console.log(avg);