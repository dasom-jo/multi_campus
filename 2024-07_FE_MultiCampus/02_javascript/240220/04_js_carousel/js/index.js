const container = document.querySelector('#container');
const imgArr = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg', 'pic-6.jpg'];
let imgIdx = 0;
container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`;

const arrows = document.querySelectorAll('.arrow');
for (let arrow of arrows) {
    arrow.addEventListener('click', arrow_func);
}

// arrows.forEach(arrow => {
//     arrow.addEventListener('click', arrow_func);
// })

setInterval(arrow_func, 3000);

function arrow_func(e) {
    if (e?.target.id == 'left') {
        imgIdx--;
        if (imgIdx < 0) {
            imgIdx = imgArr.length - 1;
        }
    } else {
        imgIdx++;
        if (imgIdx >= imgArr.length) {
            imgIdx = 0;
        }
    }
    container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`;
}

///////////////////////////
////// 참      고 /////////
///////////////////////////
/* 오른쪽 마우스 클릭 못해 */
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('마우스 우클릭 사용 불가');
})