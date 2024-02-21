window.addEventListener('load',() =>{
    // const bgcount = 5;
    // let randomNum = Math.floor(Math.random() * bgcount) + 1
    // //console.log(randomNum);
    // document.body.style.backgroundImage = `url(./images/bg-${randomNum}.jpg)`;

    //다른방법
    const imgArr = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];
    let randomNum = Math.floor(Math.random() * imgArr.length);
    document.body.style.backgroundImage = `url(./images/${imgArr[randomNum]})`
})  



