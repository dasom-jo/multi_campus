let subject1 = "프로그램 입문자를 위한 '자바스크립'"
//작은따음표를 화면에 표시하고싶으면 큰따음표로 겉에 묶어줌
let subject2 = '프로그램 입문자를 위한 \'자바스크립\'' ;
//이스케이팅 (\)문자를 사용 해당 작은 따옴표 앞에 구현

let msg1 = '그가 말했다. "안녕?"';
let msg2 = "그가 말했다. \"안녕?\"";
let msg3 = `그가 말했다. "안녕?"`;

let msg4 = '그녀는 생각햇다. \'얘뭐지\' 그리고 대답햇다. \"응\"' ;

let name = '조다솜';
let birthyear = 1998;
// document.write("<h1>" + name + "님 안녕하세요!</h1>");
// document.write("<h1>${name}님 안녕하세요!</h1>");
document.write(`<h1>${2024 - birthyear}살의 ${name}님 안녕하세요!</h1>`);



