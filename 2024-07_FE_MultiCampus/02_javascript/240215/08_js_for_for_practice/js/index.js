// for(let i = 1; i < 10; i++) {
//     document.write(`i = ${i} <br/>`);
//     for(let j = 1; j < 10; j++) {
//         document.write(`j = ${j} <br/>`)
//     }
// }

let size = 9
for (let i = 2; i <= size; i++) {
    document.write('<ul>');
    document.write(`${i}단`);
    for (let j = 1; j <= size; j++) {
        document.write(`<li>${i} * ${j} = ${i * j}</li>`);
    }
    document.write('</ul>');
}

/*
2단
    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    .
    .
    2 * 9 = 18
3단
    3 * 1 = 3
    .
    .
    3 * 9 = 27
9단
    9 * 1 = 9
    .
    .
    9 * 9 = 81
*/