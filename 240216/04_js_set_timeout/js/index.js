
//예시: 이미지가 몇초후 옆으로 쓱 넘어가는 형식 
let second = 0;//시작 초기화
let timer = setInterval(()=> { //무한반복함수시작
    second += 100;//내용: 0.1초당 백씩 더한다
    console.log(second); //내용을 콘솔에 적게나온다
    if(second === 3000) { //만약 특정조건에 도달하면
        clearInterval(timer); //타이머를 멈춘다
    }
}, 100) //0.1초씩

setTimeout(()=> { //타이머가 긑나면
    document.write('안녕하세요'); //해당 글자를 적는다
}, 3000)//타이머는 3000


