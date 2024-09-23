// const Buffer = require("buffer").Buffer;
const { Buffer } = require('buffer')

const buffer = Buffer.from('저를 버퍼로 바꿔보세요')

console.log("Buffer.from() : ", buffer);
console.log("buffer.length : ", buffer.length);
console.log("buffer.toString() : ", buffer.toString());

const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄어쓰기')]
const buffer2 = Buffer.concat(array);
console.log("Buffer.concat() : ", buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log("Buffer.alloc() : ", buffer3);