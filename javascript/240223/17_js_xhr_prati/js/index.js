
let xhr = new XMLHttpRequest(); //선언하기
xhr.open('GET',"./data/student.json"); //제이슨받기
xhr.send(); //보내기
const result = document.querySelector("#result");
xhr.onreadystatechange=()=> {
    
    if(xhr.readyState === 4 && xhr.status ===200){
        let cards = JSON.parse(xhr.responseText);
    

// function random(min, max) {
//     const num = Math.floor(Math.random() * (max - min)) + min;
//     return num;
// }

    let randomSet = new Set([]);//빈공간으로 놔둔이유는 랜덤함수의 판을 까는것 
    while (randomSet.size !=1) { //뽑고 싶은 인덱스의 갯수
        const randomIdx = Math.floor(Math.random() * cards.length);//어디범위까지 인덱스를 지정할지
        randomSet.add(cards.splice(randomIdx, 1)[0]);//지정된 인덱스중에서 이미 1개의 인덱스르뽑기를 원햇으므로 \
        //1개의 인덱스를 삭제하기위해 splice 를 넣고 제로베이스가된 상태에서  0이라는 첫번째 빈요소칸에 randomSet을 입력하는것이다
    }//splice(start,delete  Count)
    for (let card of randomSet) {
        result.innerHTML += `<ul class=box>
                            <li class = name>행운의 컬러: ${card.color}</li><br>
                            <li class = name>행운의 숫자: ${card.number}</li><br>
                            <li class = name>행운의 아이템: ${card.item}</li><br>
                            </ul>`
    }
    console.log(cards)
        
    };
}

/*버튼클릭시 작동*/ 
let openbtn = document.querySelector('#openbtn');
let main = document.querySelector('#main');
let resetbtn = document.querySelector('#resetbtn');

openbtn.addEventListener('click',()=> {
        main.classList.add('active');
    
})


resetbtn.addEventListener('click',()=> {
    main.classList.remove('active');

})


