//양방향 복호화 가능
const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; //실제잇는 알고리즘명칭
const key = 'abcdefghijklmnopqrstuvwxyz123456';//32바이트
const iv = '1234567890123456';//초기화백터 매번달라야 안전 /16바이트고정
//키랑백터 잃어버리면 암호 못찾음
const message = "비밀 메시지";

// 암호화하기
const cipher = crypto.createCipheriv(algorithm, key, iv); //사이퍼
let result = cipher.update(message, 'utf8', 'base64');
// console.log(result);
// kmSAGRbjIG3G7lQTUyOQ
// 암호문: kmSAGRbjIG3G7lQTUyOQ47lPtTBukLL0sjabDYPXbUc=
result += cipher.final('base64');
console.log('암호문:', result);

// 복호화하기
const decipher = crypto.createDecipheriv(algorithm, key, iv);//디사이퍼
let result2 = decipher.update(result, 'base64', 'utf8');//리절트 암호화된암호
result2 += decipher.final('utf8');
console.log('평문:', result2);
// 암호문: kmSAGRbjIG3G7lQTUyOQ47lPtTBukLL0sjabDYPXbUc=
// 평문: 비밀 메시지