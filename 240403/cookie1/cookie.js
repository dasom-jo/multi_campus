const http = require('http');

http.createServer((req, res)=>{
    console.log(req.method, req.url, req.headers.cookie);

    if(req.url == '/cook'){
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'set-cookie' : 'mycookie=test'
        })
    }else if(req.url == '/eat') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end('쿠키잇어요?')
    }
}).listen(8000,()=>{
    console.log('8000연결');
})