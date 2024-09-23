let btn = document.querySelector('#btn');
let nav = document.querySelector('#nav');

btn.onclick = () => {
    // 버튼이 클릭되면 아래와 같은 동작을 실행
    btn.classList.toggle('active');
    nav.classList.toggle('active');
}