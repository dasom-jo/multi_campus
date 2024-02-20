//등록버튼을 눌럿을때 이름과 전공을 콘솔에  출력
const addBtn = document.querySelector('button');
let name = document.querySelector('#username').value;
let major = document.querySelector('#major').value;

let add = (e) => {
    e.
addBtn.addEventListener('click',(e)=>{
    //console.log(`${name}, ${major}`); 콘솔창에 찍히게만듬
   // e.preventDefault();

    if(name && major) {//이값이 잇으면

    //2.tr td name td td major td tr
    //html에 없으므로 여기서 요소 만들어줌
let tr = document.createElement('tr');//<tr></tr>

let tdName = document.createElement('td');//td 생성

let nameText = document.createTextNode(name);//텍스트 노드:홍길돌
    tdName.appendChild(nameText); //입양 첫째 td홍길동td

let tdMajor = document.createElement('td');
    tdMajor.innerText=major;//입양 방법2



    tr.appendChild(tdName);//또 윗세대로 입양
    tr.appendChild(tdMajor);

    document.querySelector('#attendant > tbody').appendChild(tr); //입양
    document.querySelector('#username').value = '';//입력후 초기화
    document.querySelector('#major').value = '';
    document.querySelector('#username').focus();
    document.querySelector('#major').addEventListener('keydown') ,() =>{
        console.log(e.code); }
    //console.log(tr,tdName,tdMajor);

    }
})

document.addEventListener('click',(e => {
    e.prevenyDefault();
    add();
});

document.querySelector('#major').addEventListener('keyup', (e) => {
    if (e.code == "Enter") {
        add();
    }


