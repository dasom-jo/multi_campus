const http = require('http');
const { username } = require('os');
const fs = require('fs').promises;
const path = require('path');

http.createServer(async(req, res)=>{
    if(req.url === '/'){
        if(req.url.startsWith('/login')){
            /* 로그인은 원래 포스트요청,여기사용자 조회 */
            const url = new URL(req.url,'http://localhost:8000');
            //get 요정의 파라미터값 name확인
            console.log(url.searchParams.get('name'));
            username = url.searchParams.get('name');

            //쿠키의 유효시간을 현재시간에서 + 5분설정
            const expires = new Date();//현재시간정보
            expires.setMinutes(expires.getMinutes() + 5);

            //쿠기를 설정하고 리 다이렉트를 진행
            res.writeHead(302,{
                'Location' : '/',
                'set-Cookie' : `username=${encodeURIComponent(username)}; Expires=${expire.toGMTString()}; HttpOnly; path=/`
                //Expires:쿠기의 만료기한 설정(기한초과시 브라우저 쿠키를제거)
                //HttpOnly : 자바스크립트에서 쿠키에 접근할수없도록 한다(조작이불가).
                //Path : 쿠키가 전송될 URL 지정 (/로 설정하면 사이트 전체에서 사용가능)

            })
            res.end();
        }else if (req.url === '/' && cookies.name){
            
        }
        }else if(req.url == '/'){
            try {
                const data = await fs.readFile(path.join(__dirname, 'cookie.html'))
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(data);
            }catch(err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                return res.end(data);
            }
        }
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('NOT FOUND');
    }
}).listen(8000,()=>{
    console.log('8000번연결');
})