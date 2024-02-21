document.addEventListener('DOMContentLoaded', ()=> {
    const resultSpan = document.querySelector('#result');
    const startDay = new Date('1998-02-16');
    const endDay = new Date();

    //시작일부터 종요일까지의 계산 (밀리초) ㅇ오늘날짜 추가 // floor  히면 반올림되서 오늘날짜 자연스레 제외
    let subTime = endDay.getTime() - startDay.getTime();
    let subDay = Math.ceil(subTime / (1000 * 60 * 60 * 24)) ;
    resultSpan.innerText = subDay;
})