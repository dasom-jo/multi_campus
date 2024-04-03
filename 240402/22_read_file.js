const fs = require('fs');

fs.readFile('22_1_readme.txt','utf8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})