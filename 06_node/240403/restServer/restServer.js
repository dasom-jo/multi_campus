
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const users = {
};//임시데이터베이스


http.createServer(async(req,res)=>{
    console.log(req.method, req.url);
    if(req.method === 'GET'){
        //분기처리
        if(req.url === '/'){
            const data = await fs.readFile(path.join(__dirname, 'index.html'));
            //console.log('index.html을 응답해줘야합니다');
            res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
            return res.end(data)//정보보내기
            //get방식의 \일떄만노드 띄어줌
        }else if (req.url === '/about'){
            const data = await fs.readFile(path.join(__dirname, 'about.html'));
            res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
            return res.end(data)
    }else if (req.url === '/user'){//input에 유저 받아와서 띄움
        res.writeHead(200, { 'content-type' : 'application/json; charset=utf-8'});
        return res.end(JSON.stringify(users));
    }else {
        try{
            const data = await fs.readFile(path.join(__dirname, req.url));
            return res.end(data);
        }catch(err){
            console.log(err);
        }
        res.writeHead(404);
        return res.end('NOT FOUND'); //주소에 맞는걸 찾지못했을떄
    }
}else if (req.method === 'POST'){
    if(req.url === '/user'){
        let body = '';
        req.on('data',(data)=>{ //데이터잇으면 찍어줘
            //console.log(data); <Buffer 75 73
            body += data;
        });
        //console.log(body);
        req.on('end',()=>{
            const { userName } = JSON.parse(body);
            //console.log(userName);
            const id = Date.now();
            users[id] = userName;
            console.log(users);
            res.writeHead(201);
            res.end('등록성공');
        })
    }
}
else if (req.method === 'PUT') {
    if (req.url.startsWith('/user/')) {
        const id = req.url.split('/')[2];
        let body = ''; //내가 데이터 모으는중
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            const { newName } = JSON.parse(body);
            users[id] = newName;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(users));
        })
    }
}
else if (req.method === 'DELETE') {
    if (req.url.startsWith('/user/')) {
        const id = req.url.split('/')[2];
        delete users[id];
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(users));
    }
}
// 삭제 메서드일 때, /user/1777815615 로 들어오면 해당 아이디를 가지고 있는 유저 삭제

}).listen(8000, ()=> {
console.log('8000번 포트로 연결!');
})
//정리전
// if(req.url === '/'){
//     const data = await fs.readFile(path.join(__dirname, 'index.html'));
//     //console.log('index.html을 응답해줘야합니다');
//     res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
//     return res.end(data)
//     //get방식의 \일떄만노드 띄어줌
// }else if (req.url === '/about'){
//     const data = await fs.readFile(path.join(__dirname, 'about.html'));
//     res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
//     return res.end(data)
// }else if (req.url === '/user'){//input에 유저 받아와서 띄움
// res.writeHead(200, { 'content-type' : 'application/json; charset=utf-8'});

const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const users = {
};//임시데이터베이스


http.createServer(async(req,res)=>{
    console.log(req.method, req.url);
    if(req.method === 'GET'){
        //분기처리
        if(req.url === '/'){
            const data = await fs.readFile(path.join(__dirname, 'index.html'));
            //console.log('index.html을 응답해줘야합니다');
            res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
            return res.end(data)//정보보내기
            //get방식의 \일떄만노드 띄어줌
        }else if (req.url === '/about'){
            const data = await fs.readFile(path.join(__dirname, 'about.html'));
            res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
            return res.end(data)
    }else if (req.url === '/user'){//input에 유저 받아와서 띄움
        res.writeHead(200, { 'content-type' : 'application/json; charset=utf-8'});
        return res.end(JSON.stringify(users));
    }else {
        try{
            const data = await fs.readFile(path.join(__dirname, req.url));
            return res.end(data);
        }catch(err){
            console.log(err);
        }
        res.writeHead(404);
        return res.end('NOT FOUND'); //주소에 맞는걸 찾지못했을떄
    }
}else if (req.method === 'POST'){
    if(req.url === '/user'){
        let body = '';
        req.on('data',(data)=>{ //데이터잇으면 찍어줘
            //console.log(data); <Buffer 75 73
            body += data;
        });
        //console.log(body);
        req.on('end',()=>{
            const { userName } = JSON.parse(body);
            //console.log(userName);
            const id = Date.now();
            users[id] = userName;
            console.log(users);
            res.writeHead(201);
            res.end('등록성공');
        })
    }
}
else if (req.method === 'PUT') {
    if (req.url.startsWith('/user/')) {
        const id = req.url.split('/')[2];
        let body = ''; //내가 데이터 모으는중
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            const { newName } = JSON.parse(body);
            users[id] = newName;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(users));
        })
    }
}
else if (req.method === 'DELETE') {
    if (req.url.startsWith('/user/')) {
        const id = req.url.split('/')[2];
        delete users[id];
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(users));
    }
}
// 삭제 메서드일 때, /user/1777815615 로 들어오면 해당 아이디를 가지고 있는 유저 삭제

}).listen(8000, ()=> {
console.log('8000번 포트로 연결!');
})
//정리전
// if(req.url === '/'){
//     const data = await fs.readFile(path.join(__dirname, 'index.html'));
//     //console.log('index.html을 응답해줘야합니다');
//     res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
//     return res.end(data)
//     //get방식의 \일떄만노드 띄어줌
// }else if (req.url === '/about'){
//     const data = await fs.readFile(path.join(__dirname, 'about.html'));
//     res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
//     return res.end(data)
// }else if (req.url === '/user'){//input에 유저 받아와서 띄움

// return res.end(JSON.stringify(user));}