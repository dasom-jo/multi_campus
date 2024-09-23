const http = require('http');
const fs = require('fs').promises;
const path = require('path');

/* parseCookies 함수 - 쿠키를 ; 기준으로 나누고, = 기준으로 나누어 객체로 만드는 함수 */
const parseCookies = (cookie = '') => {
    return cookie
        .split(";")
        .map(v => v.split("="))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
}

const session = {}

http.createServer(async (req, res) => {
    console.log(req.headers.cookie);
    const cookies = parseCookies(req.headers.cookie);
    console.log(cookies);

    if (req.url.startsWith('/login')) {
        /* 원래는 POST 요청이여야 하고, 여기 사용자 조회 */

        const url = new URL(req.url, 'http://localhost:8000');
        // GET 요청의 파라미터 name 값 확인
        const userName = url.searchParams.get('name');

        // 세션의 유효 기한을 현재시간에서 + 1분으로 설정
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 1);

        // 세션 설정
        const uniqueInt = Date.now();
        session[uniqueInt] = {
            userName,
            expires
        };

        // 세션을 설정하고, 리다이렉트를 진행
        res.writeHead(302, {
            'Location': '/',
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/;`
        })
        console.log(session);
        return res.end();

    } else if (req.url === '/' && cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end(`${session[cookies.session].userName}님 안녕하세요!`);
    } else if (req.url === '/') {
        try {
            const data = await fs.readFile(path.join(__dirname, 'session.html'))
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end(err.message);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('NOT FOUND');
    }
}).listen(8000, () => {
    console.log('8000번 포트 연결');
})