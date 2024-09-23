// // 마우스 오버하면 이미지가 바뀌도록
// let img = document.querySelector('img');
// let index = 1;
// img.addEventListener("mouseover", () => {
//     img.src = `images/pic-${index % 6 + 1}.jpg`;
//     index++;
// });
// img.addEventListener("mouseout", () => {
//     img.src = `images/pic-${index % 6 + 1}.jpg`;
//     index++;
// });

/* 
click	사용자가 동일한 요소 위에서 마우스 버튼을 눌렀다 땔 때
dblclick	두 번 눌렀다 땔 때
mousedown	마우스를 누르고 있을 때
mouseup	눌렀던 마우스 버튼을 땔 때
mousemove	마우스를 움직였을 때
mouseover	요소 위로 마우스를 움직였을 때
mouseout	요소 바깥으로 마우스를 움직였을 때
*/

const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", () => imgBox.src = "images/pic-2.jpg");
imgBox.addEventListener("mouseout", () => imgBox.src = "images/pic-1.jpg");
imgBox.addEventListener("click", () => imgBox.src = "images/pic-3.jpg");
imgBox.addEventListener("dblclick", () => imgBox.src = "images/pic-3.jpg");
imgBox.addEventListener("mousedown", () => imgBox.src = "images/pic-4.jpg");
imgBox.addEventListener("mousemove", () => imgBox.src = "images/pic-5.jpg");
imgBox.addEventListener("mouseup", () => imgBox.src = "images/pic-6.jpg");