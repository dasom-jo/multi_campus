//setInterval(콜백함수, 시간) 시간=밀리초

function greeting() {
    document.write('안녕하세요');
}

setInterval(greeting, 2000);//시간마다 콜백함수의조건을 무한반복


//setInterval(()=>{document.write('안녕하세요')} , 3000);



//타이머 멈추기
let cnt = 0;
let timer = setInterval(()=>{
            
            document.write('안녕하세요')
            cnt++; 
            if (cnt == 2) {
                document.write('안녕히계세요')
                clearInterval(timer);
            }
} , 2000);


