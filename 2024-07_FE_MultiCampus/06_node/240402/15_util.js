const util = require('util');
const crypto = require('crypto');

const oneDigit = util.deprecate((num) => {
    return num % 10
}, '이거 쓰지마!')

console.log(oneDigit(207435023))

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf);
    })
    .catch((err) => {
        console.error(err);
    })