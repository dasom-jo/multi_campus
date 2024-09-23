const http = require('http');


const server1 = http.createServer((req, res)=>{
        res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
        //charset=utf-8이거 등호 앞뒤로 꼭붙이기
        res.write('<h1>hello node server</h1>');
        res.end('<p>노드서버는처음입니다</p>')
    })
    .listen(8000,()=>{
        console.log('8000서버가 정상적으로 연결되었습니다');
    })


