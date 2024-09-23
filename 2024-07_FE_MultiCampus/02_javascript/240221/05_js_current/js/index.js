document.addEventListener('DOMContentLoaded', () => {
    let today = new Date();
    /* 현재 날짜 콘솔 출력 */
    console.log(today);
    console.log(today.toDateString());
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    
    function clock() {
        console.log(today.getMilliseconds());
        today = new Date();
        
        const todayObj = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            date: today.getDate(),
            day: week[today.getDay()] + "요일",
            am_pm: today.getHours() < 12 ? 'AM' : 'PM',
            hour: function () {
                let hour = today.getHours() % 12;
                if (hour === 0) {
                    hour = 12
                } else if (hour < 10) {
                    hour = "0" + hour;
                }
                return hour;
            },
            min: today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(),
            sec: today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
        }
    
        const todayDiv = document.querySelector('#today')
        todayDiv.innerHTML = `
                ${todayObj.year}년 ${todayObj.month}월 ${todayObj.date}일 <span>${todayObj.day}</span>
            `;
        const clockDiv = document.querySelector('#clock');
        clockDiv.innerText = `
                ${todayObj.am_pm} ${todayObj.hour()} : ${todayObj.min} : ${todayObj.sec}
            `
    }

    setInterval(clock, 1000);
})