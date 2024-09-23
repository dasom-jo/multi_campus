//#btn 을 클릭하면 , noti-box 하위에 div.noti가 생성되고,3초후에 사라짐


// let btn = document.querySelector('#btn');
// let notiBox= document.querySelector('#noti-box');

// btn.addEventListener('click', () => {
//         notiBox.classList.add('noti');
//         notiBox.innerText = "알림:3초후 삭제됩니다!"
//         setTimeout(() => { 
//             notiBox.remove();
//         },3000);
// })

// ------------------------------------------------------------//
// #btn을 클릭하면, noti-box 하위에 div.noti가 생성되고, 3초 후에 사라짐.

// 1) 버튼 요소 가져오기
const btn = document.querySelector('#btn');

// 2) 버튼이 클릭될 때, 이벤트 동작
btn.addEventListener('click', ()=> {
    // 3) #noti-box 요소 가져오기
    const notiBox = document.querySelector('#noti-box');
    // 4) div 요소 생성하기
    const noti = document.createElement('div');
    // 5) 클래스 이름(.noti) 추가하기
    noti.classList.add('noti');
    // 6) 텍스트 넣기
    noti.innerText = '알림 3초 후에 사라집니다.'

    /* 서비스 */
    let second = 3;
    setInterval(()=> {
        second--;
        noti.innerText = `알림이 ${second}안에 사라집니다`

    let bar = document.createElement('div');
    bar.classList.add('bar');
    noti.appendChild(bar);

    // 7) noti-box 안에 div.noti 넣기
    notiBox.appendChild(noti);
    // 8) 3초 후에 사라지게 하기
    setTimeout(()=> noti.remove(), 3000);
})})



