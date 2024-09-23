let sum = 0;

// for(let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         // break; 10 (1+2+3+4)
//         // continue; 50 (1+2+3+4 + 6+7+8+9)
//         continue;
//     }
//     sum += i;
// }

/* 1부터 10까지의 반복을 하면서, 홀수 합계만 구하기 */
// 1 + 3 + 5 + 7 + 9
let i = 0;
while (true) {
    if (i >= 10) {
        break;
    }
    i++;
    if (i % 2) {
        sum += i;
    } else {
        continue;
    }
    console.log(sum);
}

// for (let i = 1; i <= 10; i++) {
//     // (i % 2) ? sum += i : 0;
//     if (i % 2) {
//         sum += i;
//     } else {
//         continue;
//     }
//     console.log(sum);
// }

document.write(`<h1>${sum}</h1>`);