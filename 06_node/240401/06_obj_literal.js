let sayHello = function () {
    console.log('안녕하세요');
}
let subject = "node";

let person = {
    sayBye : function () { console.log('안녕히가세요'); },
    sayHello,
    subject,
    [subject + "Info"] : '노드는 자바스크립트 런타임!'
}

person.sayHello();
person.sayBye();
console.log(person.subject);
console.log(person.nodeInfo);