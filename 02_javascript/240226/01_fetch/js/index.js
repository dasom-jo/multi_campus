// fetch의 get 요청
// fetch("URL")
// fetch("URL", { method: 'GET', headers: ~~~ })

// fetch의 post 요청
// fetch("URL", { method: 'POST', body: ~~~, headers: ~~~ })

const btn = document.querySelector('button');
let num = 0;
btn.addEventListener('click', () => {
    num++;
    let url = `https://dummyjson.com/products/${num}`;

    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
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
            resultDiv.innerHTML = "에러발생";
        })
        // .finally(()=> {
            
        // })
})
