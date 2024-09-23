const {data} = require('./var')

console.log('require.cache', require.cache);

console.log('require.main', require.main);
console.log(require.main == module);
console.log(require.main.filename);