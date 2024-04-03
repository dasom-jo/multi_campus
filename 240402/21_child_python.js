const { spawn } = require('child_process');

const process = spawn('python',['21-1_test.py']);

process.stdout.on('data',(data)=>{
    console.log(data.toString());
});

process.stderr.on('data',(data)=>{
    console.error(data.toString());
})