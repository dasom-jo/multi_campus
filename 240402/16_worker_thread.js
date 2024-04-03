const { Worker, isMainThread, parentPort } = require('worker_threads');

console.log(1);
if (isMainThread) {
    console.log(2);
    const worker = new Worker(__filename);
    console.log(3);
    worker.on('message', (msg) => console.log('부모가 받은 데이터 :', msg));
    console.log(4);
    worker.on('exit', (code) => console.log('exit', code));
    console.log(5);
    worker.postMessage('부모가 워커에 전송한 데이터');
} else {
    console.log(6);
    parentPort.on('message', (msg) => {
        console.log(7);
        console.log('워커가 받은 데이터 :' ,msg);
        console.log(8);
        parentPort.postMessage('워커가 부모에게 전송한 데이터');
        parentPort.close();
    });
}