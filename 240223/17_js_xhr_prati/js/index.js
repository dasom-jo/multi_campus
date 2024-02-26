
let xhr = new XMLHttpRequest();
xhr.open('GET',"./data/student.json");
xhr.send();
const result = document.querySelector("#result");
xhr.onreadystatechange=()=> {
    
    if(xhr.readyState === 4 && xhr.status ===200){
        let student = JSON.parse(xhr.responseText);

        for(let i = 0; i <16; i++ ){
        result.innerHTML+=`<ul class=box>
                        <li class= name>행운의 컬러: ${student[i].color}</li><br>
                        <li class= name>행운의 숫자: ${student[i].number}</li><br>
                        <li class= name>행운의 아이템: ${student[i].item}</li>
                        </ul>`
        }
        console.log(student)
        
    };
}

//랜덤함수
//뽑기를 누르면 여러 카드중 한장 카드만 색이바뀌거나 뽑힌다
//닫기를 누르면 원래대로


// function random(min, max) {
//     const num = Math.floor(Math.random() * (max - min)) + min;
//     return num;
// }


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


