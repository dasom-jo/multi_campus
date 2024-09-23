const fs = require('fs');

const readStream = fs.createReadStream('22_1_readme.txt', { highWaterMark: 16 });
const writeStream = fs.createWriteStream('31_1_writeme2.txt');

readStream.pipe(writeStream); // pipe() 메서드로 연결하면 여러개의 스트림을 이어서 사용할 수 있다.