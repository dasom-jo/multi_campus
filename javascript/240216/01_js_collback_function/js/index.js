// function showInfo(name, age) {
//     document.write(`안녕하세요\n ${name}님, ${age}살이시네요`)
// }

// function showInfo() {
//     let name = prompt('이름을 입력하세요');
//     let age = prompt('나이를 입력하세요');
//     document.write(`안녕하세요?\n${name}님, ${age}살이시네요.`);
// }

// showInfo();

function showInfo(name, age) {
    document.write(`안녕? 나는 ${name}이고 , 나이는 ${age}살이야}`);
}

function getInfo(callback) {
    let name = prompt('이름을 입력하세요');
    let age = prompt('나이를 입력하세요');
    callback(name, age);//매개변수// 일반함수가 함수 내부에서 쓰이면 콜백함수이다. 
}

getInfo(showInfo);




// function showInfo1(name, age) {
//         document.write(`안녕하세요\n ${name}님, ${age}살이시네요`)
//     }
// function showInfo2(name, age) {
//         document.write(`안녕하세요\n ${name}님, ${age}살이시네요`)
//     }
// function getInfo(callback) {
//     let name = prompt('이름을 입력하세요');
//     let age = prompt('나이를 입력하세요');
//     callback(name, age);
// }

// getInfo(showInfo1);
// getInfo(showInfo2);
//getInfo 함수에서showInfo 함수를 인수로 받아 실행한다.
//showInfo 함수를 인수로 받는것을 콜백함수라고한다



const btn = document.querySelector('button');

function hello() {
    document.write('안녕핳세요');
}

btn.addEventListener ('click',hello);
//매개변수로 들어오는 헬로우가 콜백함수 저 펑션 헬로우값이 실행된된다 
//addEventListener:웹 페이지에서 사용자의 상호 작용(마우스 클릭, 키 입력 등)에 대한 응답으로 특정 동작이나 기능을 실행하도록 만들어줍니다.
btn.addEventListener ('click',function hello() {
    document.write('안녕핳세요');
});

btn.addEventListener ('click',() => { console.log("안녕하세요");});

//다같은거
//클릭은재사용성은 높지만 자리차지를 많이해서 가장 아래 함수를 쓰는게 깔끔

