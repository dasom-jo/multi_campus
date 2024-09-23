let descript = document.getElementById('view');
let detail = document.getElementById('detail');

descript.onclick = function () {
    detail.classList.toggle('hidden');
    if (detail.classList.contains('hidden')) {
        descript.innerText = '상세 설명 닫기';
    } else {
        descript.innerText = '상세 설명 보기';
    }
}