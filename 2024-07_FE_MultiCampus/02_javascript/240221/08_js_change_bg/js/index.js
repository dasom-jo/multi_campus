window.addEventListener('load', () => {
    // const bgCount = 5;
    // let randomNum = Math.floor(Math.random() * bgCount) + 1
    // document.body.style.backgroundImage = `url(./images/bg-${randomNum}.jpg)`

    
    const imgArr = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];
    let randomNum = Math.floor(Math.random() * imgArr.length);
    let x_img = sessionStorage.getItem('bg');
    
    console.log(x_img, imgArr[randomNum]);
    while (x_img == imgArr[randomNum] && imgArr.length != 1) {
        randomNum = Math.floor(Math.random() * imgArr.length);
    }
    
    sessionStorage.setItem('bg', imgArr[randomNum]);
    document.body.style.backgroundImage = `url(./images/${imgArr[randomNum]})`
})