const getUser = (id, password) => {
    return new Promise((resolve, reject) => {
        if (id == '짱구' && password == '1234') {
            const user = {
                name: '맹구',
                age: 5
            }
            resolve(user);
        } else {
            reject('아이디 또는 비밀번호가 틀렸습니다.');
        }
    });
}

const modifyAge = (user, age) => {
    return new Promise((resolve, reject) => {
        if (user.name == '짱구') {
            user.age = age
            resolve('success')
        } else {
            reject('짱구가 아닙니다.');
        }
    });
}

getUser('짱구', '1234')
    .then((user) => modifyAge(user, 6))
    .then((status) => console.log(status))
    .catch((err)=> console.log(err));