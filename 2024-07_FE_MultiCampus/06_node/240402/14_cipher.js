const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456'; // 초기화 벡터
const message = "비밀 메시지";

// 암호화하기
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update(message, 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호문:', result);

// 복호화하기
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('평문:', result2);
