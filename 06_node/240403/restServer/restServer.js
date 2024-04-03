const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const user = { }; // 임시 DB

http.createServer(async (req, res)=>{
    console.log(req.method, req.url);
    if (req.method === 'GET') {
        if (req.url === '/') {
            const data = await fs.readFile(path.join(__dirname, 'index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
        } else if (req.url === '/about') {
            const data = await fs.readFile(path.join(__dirname, 'about.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
        } else if (req.url === '/user') {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(user));
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
    } else if (req.method === 'POST') {
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
    } else if (req.method === 'PUT') {
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
    } // 삭제 메서드일 때, /user/1777815615 로 들어오면 해당 아이디를 가지고 있는 유저 삭제

}).listen(8000, ()=> {
    console.log('8000번 포트로 연결!');
})