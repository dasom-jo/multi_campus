const students =["Park","Kim","Lee","Kang"];
//기본형
for (let i = 0; i < students.length; i++) {
    document.write(`${students[i]}, `)
}

//students.forEach 반복개체 
students.forEach((e, i)=>  document.write(`${students[i]}, `));
//e(0123) i(park.kim.lee.kang)


document.write(`<br>`);

//배열형의 기능 foreach
//e (element):첫번째는 각각의 요소를 의미
//i(index):두버냊는 각각의 번쨰를 의미 e.i는 임의로 지음

// let name ='조다솜'; 
// for (let i = 0; i < name.length; i++) {
//     document.write(`${i+1}번째 글자는 ${name[i]} <br>`);
// }
// naem 은 forEach문이 안되서 취소~



//for~in문
const son = {
    name : '손흥민',
    height : 183,
    adress : '서울'
}

for(key in son) {
    console.log (key, son[key]);
}
for(i in son) {
    document.write(`${Number(i) + 1}번 ${students[i]} <br>`);
}

for(let e of students) {
    document.write(`${e}, `);
}

        