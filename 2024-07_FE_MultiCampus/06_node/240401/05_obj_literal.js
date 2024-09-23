var sayHello = function () {
    console.log('안녕하세요');
}
var subject = "node";

var person = {
    sayBye : function () { console.log('안녕히가세요'); },
    sayHello : sayHello,
    subject : subject,
}

person.sayHello();
person.sayBye();
console.log(person.subject);
person[subject + "Info"] = '노드는 자바스크립트 런타임!';
console.log(person.nodeInfo);