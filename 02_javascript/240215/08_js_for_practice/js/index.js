for (let i = 1; i < 10; i++) {
    document.write(`i =${i} <br>`);
    for(let j = 1; j < 10; j++) {
        document.write(`&emsp;&emsp; j = ${j} <br>`)
    }
}


//2단부터 나오게
for(let i =2; i <= 9;i++) {
    document.write(`${i}단 <br>`)
    for (let j = 1; j <= 9; j++) {
        document.write(`&emsp;&emsp; ${i} x ${j} = ${i * j} <br> `)
    }
}


// for(let i =2; i <= size; i++) {
//     document.write(`<ul>`)
//     document.write(`${i}단 <br>`)
//     for (let j = 1; j <= size; j++) {
//         document.write(`<li> ${i} x ${j} = ${i * j} </li> `)
//     }
//     document.write('</ul>')
// }