// 모달 구현

//프로필보기 버튼( open)을 클릭하면 나타나는 모달
let openBtn = document.querySelector('#open');
let modalBox = document.querySelector('#modal-box');
let closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', () => {
    //모달박스에  (#modal-box)active클래스가 추가
    //et modalBox = document.querySelector('#modal-box'); 전역변수로 변환
    modalBox.classList.add('active');
})

//close 버튼을 눌럿을떄 사라지는 모달
closeBtn.addEventListener('click',() => {
    //모달박스에  (#modal-box)active클래스 제거
    //let modalBox = document.querySelector('#modal-box');
    modalBox.classList.remove('active');
})

//모달창 외부를 클릭햇을때도, 모달창이 닫힌당
window.addEventListener('click',(e) => {
    //let modalBox = document.querySelector('#modal-box');
    //console.log(e.target); //회색 부분을 누르면콘솔창에 찍힌다 모델박스가
    if(e.target == modalBox) {
        modalBox.classList.remove('active');
    }
})