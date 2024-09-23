let sayHello = function() {
    console.log('안녕하세요');
}

let subject = 'node';

let person = {
    sayBye :function () {
        console.log('안녕히가세요');},
    sayHello,//키값이 같다면 지워도 알아서 인식
    subject,
    [subject + 'info'] : '노드는 자바스크립트'
}

person.sayHello();
person.sayBye();
console.log(person.subject);
console.log(person.nodeinfo);