const userA = {};
console.log(userA.name); // undefined

const userB = null;
// console.log(userB.name); // ReferenceError: userB is not defined
console.log(userB?.name);

const usersArr = null;
// console.log(usersArr.[0]);
console.log(usersArr?.[0]);