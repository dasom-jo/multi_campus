const fs = require('fs').promises;

fs.readFile('22_1_readme.txt','utf8')
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })