// const fs = require('fs');

// fs.readFile('./nofile.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

const fs = require('fs').promises;

fs.readFile('./nofile.txt', 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })