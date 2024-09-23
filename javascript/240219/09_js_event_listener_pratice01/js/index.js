// 마우스 오버하면 이미지가 바뀌도록


/* 
click	사용자가 동일한 요소 위에서 마우스 버튼을 눌렀다 땔 때
dblclick	두 번 눌렀다 땔 때
mousedown	마우스를 누르고 있을 때
mouseup	눌렀던 마우스 버튼을 땔 때
mousemove	마우스를 움직였을 때
mouseover	요소 위로 마우스를 움직였을 때
mouseout	요소 바깥으로 마우스를 움직였을 때
*/
let img1 = document.querySelector('#img1');
let i = 0;

img1.addEventListener("click", () => {
    i = (i + 1) % 6 //이미지번호
    img1.src = `./images/pic-${i + 1}.jpg`;
    
})

