const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 학습을 위해 복잡하게 데이터베이스를 연결하지 않고 사용자 정보를 저장할 객체 생성
const user = {};

// 서버 생성
http.createServer(async (req, res) => {
    console.log(req.method, req.url); // 요청 메서드와 url 확인
    /* GET 메서드일 때 */
    if (req.method === 'GET') {
        // [GET, http://localhost:8000/] 메인 페이지 화면 요청
        if (req.url === '/') {
            const data = await fs.readFile(path.join(__dirname, 'index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
            // [GET, http://localhost:8000/about] about 페이지 화면 요청
        } else if (req.url === '/about') {
            const data = await fs.readFile(path.join(__dirname, 'about.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
            // [GET, http://localhost:8000/user] 사용자 정보 JSON 객체 요청
        } else if (req.url === '/user') {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(user));
            // [GET, 기타] 해당 파일이 존재하면 파일을 읽어서 응답
            // [GET, 기타] 해당 파일이 존재하지 않으면 404 NOT FOUND 응답
        } else {
            try {
                const data = await fs.readFile(path.join(__dirname, req.url));
                return res.end(data);
            } catch (err) {
                console.log(err);
            }
            res.writeHead(404);
            return res.end('NOT FOUND');
        }
    /* POST 메서드일 때 */
    } else if (req.method === 'POST') {
        // [POST, http://localhost:8000/user] 사용자 정보 등록
        if (req.url === '/user') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                const { userName } = JSON.parse(body);
                const id = Date.now();
                user[id] = userName;
                console.log(user);
                res.writeHead(201);
                res.end('등록 성공');
            })
        }
    /* PUT 메서드일 때 */
    } else if (req.method === 'PUT') {
        // [PUT, http://localhost:8000/user/1777815615] 해당 아이디를 가지고 있는 유저의 이름 변경
        if (req.url.startsWith('/user/')) {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                const { newName } = JSON.parse(body);
                user[id] = newName;
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                return res.end(JSON.stringify(user));
            })
        }
    /* DELETE 메서드일 때 */
    } else if (req.method === 'DELETE') {
        // [DELETE, http://localhost:8000/user/1777815615] 해당 아이디를 가지고 있는 유저 삭제
        if (req.url.startsWith('/user/')) {
            const id = req.url.split('/')[2];
            delete user[id];
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(user));
        }
    }

}).listen(8000, () => {
    console.log('8000번 포트로 연결!');
})