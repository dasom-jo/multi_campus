//구조분해할당
const person = {
    status: {
        name : '짱구',
        age: 5
    },
    getAge() {
        this.status.age++;
        return this.status.age;
    }
};
//완젼 중요!!!
const {getAge,status: {name,age}} = person;
// var getAge = person.getAge;
// var name = person.status.name;
// var age = person.status.age;

console.log(name,age,person.getAge());