let regex = /[a-z]/;
let language = 'node'
console.log(regex.exec(language)) //조건에 가장 부합하는 첫번쨰 결과
console.log(regex.test(language))
console.log(language.match(regex))  //조건에 가장 부합하는 첫번쨰 결과
console.log(language.search(regex)) // //조건에 가장 부합하는 가장첫 인덱스 반환

