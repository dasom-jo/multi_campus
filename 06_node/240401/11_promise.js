// const condition = false;
//async가 붙은 함수는 promise 함수를  반환하기에
//then 이나 await를 붙여 쓸수잇다

const getUser = (id, password) =>{
    return new Promise((resolve, reject)=>{
        if (id == '짱구' && password == '1234'){
            const user = {
                name: '맹구',
                age:5
            }
            resolve(user);
        }else {
            reject('bibi-bip');
        }
    });
}


const modifyAge = (user, age) =>{
    return new Promise((resolve, reject) =>{
        if(user.name == '짱구') {
            user.age = age
            resolve('success')
        }else {
            reject("노짱구")
        }
    });
}

getUser('짱구','1234')
    .then((user)=> modifyAge(user,6))
    .then((status)=>console.log(status))
    .catch((err)=>console.log(err));