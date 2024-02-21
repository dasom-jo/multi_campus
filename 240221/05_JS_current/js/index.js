/*현재날짜 콘솔에 출력*/ 
const today = new Date();
//console.log(today);
//console.log(today.toDateString());

const week = ['일','월','화','수','목','금','토'];

//조건이있을경우
//let hour = today.getHours();
//let am_pm = 'AM';
//-----



// today.setHours(12);
/*const todayObj = {
    year: today.getFullYear(),
    month : today.getMonth() + 1,
    date : today.getDate(),
    day : week[today.getDay()]+'요일',
    am_pm : today.getHours() <12 ? 'AM' : "PM",

    hour : function () {
        let hour = today.getHours()%12;
        if(hour === 0) {
            hour = 12
        } else { 
            hour 
        }
        return 12
    },

    min : today.getMinutes() <10 ? '0'+ getMinutes() : getMinutes(),
    sec : today.getSeconds() <10 ? '0' + today.getSeconds() : today.getSeconds()

}


document.addEventListener('DOMContentLoaded',()=> {
    const todayDiv = document.querySelector('#today')
    todayDiv.innerHTML = `
    ${todayObj.year}년 ${todayObj.month}월 ${todayObj.date}일 <span>${todayObj.day}<span>`

    const clockDiv = document.querySelector('clock');
    clockDiv.innerHTML = `
    ${todayObj.am_pm}  ${todayObj.hour} : ${todayObj.min} : ${todayObj.sec}`


})*/


//실시간으로 바뀌는것


const todayObj = {
    year: today.getFullYear(),
    month : today.getMonth() + 1,
    date : today.getDate(),
    day : week[today.getDay()]+'요일',
    am_pm : today.getHours() <12 ? 'AM' : "PM",

    hour : function () {
        let hour = today.getHours()%12;
        if(hour === 0) {
            hour = 12
        } else { 
            hour ;
        }
        return hour;
    },

    min : today.getMinutes() <10 ? '0'+ today.getMinutes() : today.getMinutes(),
    sec : today.getSeconds() <10 ? '0' + today.getSeconds() : today.getSeconds()

}


document.addEventListener('DOMContentLoaded',()=> {
    const todayDiv = document.querySelector('#today')
    todayDiv.innerHTML = `
    ${todayObj.year}년 ${todayObj.month}월 ${todayObj.date}일 <span>${todayObj.day}<span>`

    const clockDiv = document.querySelector('#clock');
    clockDiv.innerHTML = `
    ${todayObj.am_pm}  ${todayObj.hour} : ${todayObj.min} : ${todayObj.sec}` })
