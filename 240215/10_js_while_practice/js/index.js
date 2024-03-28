// while (조건) {
//     반복;
//     조건해제;
// }

let i = 1;
let num = Number(prompt('입력하세요'));
while (i <= num) {
    console.log(i);
    i++;
}


/* 모범 답안 */
// let i = prompt("숫자를 입력하세요");

// if (isNaN(i)) {
//     console.log("유효한 숫자를 입력하세요.");
// } else {
//     let count = 1;

//     while (count <= i) {
//         console.log(count);
//         count++;
//     }
// }