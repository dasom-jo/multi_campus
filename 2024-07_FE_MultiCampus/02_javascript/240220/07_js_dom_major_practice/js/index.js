// 1. 등록버튼을 눌렀을 때, 이름과 전공을 콘솔에 출력 (성공)
const addBtn = document.querySelector('button');

let add = () => {    
    let name = document.querySelector('#username'); // 홍길동
    let major = document.querySelector('#major'); // 컴퓨터
    // console.log(`${name}, ${major}`);

    if (name.value && major.value) {
        // 2. <tr> <td>${name}</td><td>${major}</td> </tr>
        let tr = document.createElement('tr'); // <tr></tr>

        let tdName = document.createElement('td'); // <td></td>
        let nameText = document.createTextNode(name.value); // 텍스트 노드 : 홍길동
        tdName.appendChild(nameText); // tdName = <td>홍길동</td>

        let tdMajor = document.createElement('td'); // <td></td>
        tdMajor.innerText = major.value; // tdMajor = <td>컴퓨터</td>

        tr.appendChild(tdName); // <tr><td>홍길동</td></tr>
        tr.appendChild(tdMajor); // <tr><td>홍길동</td><td>컴퓨터</td></tr>

        document.querySelector('#attendant > tbody').appendChild(tr);
        name.value = '';
        major.value = '';
        document.querySelector('#username').focus();
    }
}

addBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    add();
});

document.querySelector('#major').addEventListener('keyup', (e) => {
    if (e.code == "Enter") {
        add();
    }
})