//fetch의 get 요청
//fetch('URL')
//fetch('URL',{ method: 'GET',headers:~~~})

//fetch의 post 요청
//fetch('URL',{ method: 'post', bpdy:~~~,headers:~~~})

const btn = document.querySelector('button');
let num = 0;
btn.addEventListener('click',()=>{
    num++
    let url = `https://dummyjson.com/products/${num}`;

    fetch(url) //데이터 요청보내는역활 get 
        .then(response => response.json()) //제이슨형식으로변환 비동기함수
        .then(data => {
            const resultDiv = document.querySelector('#result');
            resultDiv.innerHTML = `
            <ul>
                <li>${data.title}</li>
                <li>${data.brand}</li>
                <li>${data.description}</li>
            </ul>
        `;
        })
        .catch(e => {
            console.error(e);
            const resultDiv = document.querySelector('#result');
            resultDiv.innerHTML = '에러발생';
        })
})
