/*시작페이지:  설명과 뽑기버버튼, 닫기 버튼
1. 뽑기 버튼을 누른다
2.버튼이 동작한다
3.카드가 한장뽑힌다
    -16장의 카드중  랜덤으로 한장!
(가능하면 카드가 돌아보는 이벤트)
4.다른 버튼을 다시 누르면 
5.카드대신 문장 등장 */ 

let openBtn = document.querySelector('#openBtn');
let xhr = new XMLHttpRequest();
xhr.open('GET','./data/cards.json');
xhr.send();
const result = document.querySelector("#result");
const newCard = document.querySelector('#newCard');
const closeBtn = document.querySelector('#closeBtn');

openBtn.addEventListener('click', () =>{
    const cards = JSON.parse(xhr.responseText);
    if (xhr.readyState === 4 && xhr.status === 200){
    let randomSet = new Set([]);
    while (randomSet.size !=1){
        const randomIdx = Math.floor(Math.random()*cards.length);
        randomSet.add(cards.splice(randomIdx,1)[0]);
    }
    for (let card of randomSet){
        newCard.innerHTML = `<ul class= box>    
                            <li class=name>행운의 컬러: ${card.color}</li>
                            <li class=name>행운의 숫자: ${card.number}</li>
                            <li class=name>행운의 아이템: ${card.item}</li>
                            </ul>`
        }}
        console.log(newCard);
})

closeBtn.addEventListener('click',() =>{
    newCard.innerText = '오늘 하루도 화이팅';
    newCard.classList.add('closeText');
})
