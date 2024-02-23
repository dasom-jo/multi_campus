let obj = {
    name: '이대희',
    major: '영상학과',
    grade: 3
}

let json = JSON.stringify(obj);

console.log(obj);
console.log(json);

let str = `{"name":"이순대","major":"유아교육과","grade":5}` 
let obj2 = JSON.parse(str);
console.log(obj2);