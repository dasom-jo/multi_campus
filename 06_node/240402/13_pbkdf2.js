const crypto = require('crypto');

const pass = '비밀번호';

crypto.randomBytes(64, (err, buf) => {
    // buf : 64바이트 길이의 랜덤한 문자열
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    crypto.pbkdf2(pass, salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});