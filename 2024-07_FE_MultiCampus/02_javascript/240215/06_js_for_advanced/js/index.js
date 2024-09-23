const students = ["Park", "Kim", "Lee", "Kang"];

/* 기본형 for */
for (let i = 0; i < students.length; i++) {
    document.write(`${i + 1}번 ${students[i]}, `)
}

/* 배열의 기능 forEach */
// 첫번째는 각각의 요소를 의미 (element)
// 두번째는 각각의 번째를 의미 (index)
// students.forEach(function(e, i) {
//     document.write(`${i + 1}번 ${e}, `);
// })

// students.forEach((e, i)=> {
//     document.write(`${i+1}번 ${e}, `);
// });

/* for ~ in */
const son = {
    name : '손흥민',
    height : 183,
    address : '서울'
}

for(let key in son) {
    console.log(key, son[key]);
}

for(let i in students) {
    document.write(`${Number(i) + 1}번 ${students[i]}, `);
}

for (let e of students) {
    document.write(`${e}, `);
}