document.addEventListener('DOMContentLoaded', () => {//모든 DOM 컨텐트' 가 로드되었을 때, 실행된다.
/*현재날짜 콘솔에 출력*/ 
let today = new Date();
console.log(today);
console.log(today.toDateString());
const week = ['일','월','화','수','목','금','토'];


//실시간으로 바뀌는것
function clock() {
    console.log(today.getMilliseconds());//실시간 업뎃
    today = new Date();//현재 시간을 저장하고 로그에 전달




const todayObj = {
    year: today.getFullYear(),
    month : today.getMonth() + 1,
    date : today.getDate(),
    day : week[today.getDay()]+'요일',
    am_pm : today.getHours() < 12 ? 'AM' : "PM",

    hour : function () {
        let hour = today.getHours() % 12;
        if(hour === 0) {
            hour = 12
        } else if(hour < 10) { 
            hour = "0" + hour ;
        }
        return hour;
    },

    min : today.getMinutes() <10 ? '0'+ today.getMinutes() : today.getMinutes(),
    sec : today.getSeconds() <10 ? '0' + today.getSeconds() : today.getSeconds()

}



    const todayDiv = document.querySelector('#today')
    todayDiv.innerHTML = `
    ${todayObj.year}년 ${todayObj.month}월 ${todayObj.date}일 <span>${todayObj.day}<span>`;

    const clockDiv = document.querySelector('#clock');
    clockDiv.innerText = `
    ${todayObj.am_pm}  ${todayObj.hour()} : ${todayObj.min} : ${todayObj.sec}` 

}

setInterval(clock,1000);
})