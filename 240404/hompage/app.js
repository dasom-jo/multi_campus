const morgan = require('morgan');

require('dotenv').config();

const express = require('express');

const app = express();

const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: app,
    watch: true,
    autoescape: true
})



const path = require('path');

const indexRouter = require('./routes');
const userRouter = require('./routes/user')

app.set('view engine' ,'html');
app.set('views', path.join(__dirname,'views'))
app.set('port',process.env.PORT || 8001)
//404
app.use(
    morgan(process.env.NODE_ENV == 'development' ? "dev" : "combined"),
    express.static(path.join(__dirname,'public')),
    express.json(),
    express.urlencoded({ extended: true })
)

//'/'->메인 화면구성
app.use('/',indexRouter);
// '/users' -> 사용자
app.use('/users',userRouter);
// '/porsts -> 게시물

//404
app.use((req, res, next)=>{
    const err = new Error(`${req.url}은 접근할수없습니다`)
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(err.status || 500);
    res.render('error',{ error: err.status, message: err.message });
    //res.sendFile(path.join(__dirname, './views/error.html'));
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'포트익스프에스연결');
})