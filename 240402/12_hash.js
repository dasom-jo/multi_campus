const crypto = require('crypto');

const pass = '비밀번호';

console.log('base64:', crypto.createHash('sha512').update(pass).digest('base64'));
console.log('hex:', crypto.createHash('sha512').update(pass).digest('hex'));

/*이코드는 내장모듈인 crypto를 사용하여 주어진 비밀번호를 해싱하는것이다
해싱은 보안적인 목적으로 주어진 데이터를 고정길이의 무작위한 문자열로 변환하는 작업이다
이코드는 SHA-512해시알고리즘을 사용하여비밀번호를 해싱합니다

1.crypto 모듈을 불러옵니다
2.해싱할 비밀번호를 변수 pass에 저장
3.crypto.createHash('sha512')를 사용하여 SHA-512해시 알고리즘을 사용하는 해시객체를 생성
4..update(pass)를 사용하여 해시객체에 해싱할 데이터를 업데이트
5. .digest('base64')를 사용하여 base64형으로 변환하고 출력
6..digest('hex')를 사용하여 해시 값을 16진수 형식으로 변환하고 출력합니다.
이러한 해시 값을 사용하면 보안적인 목적으로 비밀번호를 안전하게 저장하거나 인증하는 데 사용할 수 있습니다..*/