const {data} = require('./var')

console.log('require.cache',require.cache);
console.log('require.main',require.main); //실행시 첫번쨰로 되는 모듈
console.log(require.main == module); //true
console.log(require.main.filename); //현재파일이름