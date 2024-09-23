let title = document.querySelector('h1');
// let title = document.getElementsByName('h1');
console.log(title);
console.log(title.innerHTML);
console.log(title.innerText);
console.log(title.innertextcontent);
title.innerText = "안녕\n하세요"
//title.innerTextcontent = "안녕\n하세요"

title.onclick = function () {
    title.textcontent = "클릭해서 바꾼 제목입니다";
}

//let imgBox = document.querySelector('#profile');
let imgBox = document.getElementById('#profile');
console.log(imgBox);

console.log(imgBox.innerHTML);//내부html
console.log(imgBox.innerText);//내부 text
console.log(imgBox.innertextcontent); //소스그대로

console.log(imgBox.querySelector('img').src);

// console.log(imgBox.querySelector('#myBox > p')); //선택자 조합가능/한번발견하면 끝 그것만씀
console.log(imgBox.getElementsByClassName('#myBox > p'));

console.log(imgBox.querySelectorAll('#myBox > p')); //모두 반환

