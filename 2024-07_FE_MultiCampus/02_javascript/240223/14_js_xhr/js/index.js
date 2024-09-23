let num = 1;
const button = document.querySelector('button');

button.addEventListener('click', () => {
    num++;
    const url = `https://dummyjson.com/products/${num}`;
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data/product.json')
    // xhr.open('GET', url); // = xhr.open('GET', url, true);  [비동기 처리]
    xhr.send();
    console.log(xhr);
    xhr.onreadystatechange =()=> {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let product = JSON.parse(xhr.responseText);
            const result = document.querySelector('#result');
            console.log(product);
            result.innerHTML = `
                <p>상품명 : ${product.title}</p>
                <p>상품설명 : ${product.description}</p>
                <div>
                    <img src="${product.thumbnail}" alt="상품이미지" width="150" />
                </div>
            `;
        }
    }
})