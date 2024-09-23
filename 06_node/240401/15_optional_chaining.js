const userA = {};
console.log(userA.name);//undefined

// console.log(userB.name);//userB is not defined

const userB = undefined;
console.log(userB?.name);//undefined
//보통 네임을 의심하지 유저를 의심하지않는다
//그래서 ?를 통해 유저도 의심하게함

const userArr = [];
console.log(userArr?.[0]);//undefined


