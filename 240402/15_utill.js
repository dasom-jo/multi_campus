const util = require('util');
const crypto = require('crypto');
const oneDigit = util.deprecate((num) => {
    return num % 10
},'해당 함수는 곧 만료됩니다')

console.log(oneDigit(55456));

const randomBytesPromise = util.promisify(crypto.randomBytes);

randomBytesPromise(64)
    .then((buf)=>{
        console.log(buf);
    })
    .catch((err)=>{
        console.error(err);
    })