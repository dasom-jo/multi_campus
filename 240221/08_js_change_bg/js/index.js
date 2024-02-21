window.addEventListener('load',() =>{
    const bgcount = 5;
    let rendomNum = 0; //1부터 5까지 랜덤 숫자

    let randomNum = Math.floor(Math.random() * bgcount) + 1
    //console.log(randomNum);

    document.body.style.backgroundImage = `url(./images/bg-${randomNum}.jpg)`;
})  


//다른방법
