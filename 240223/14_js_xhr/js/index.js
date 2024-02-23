let num = 1;
const result = document.querySelector('#result');
const button = decodeURI.querySelector('button');


button.addEventListener('click', ()=>{
    num++;
const url = `https://dummyjson.com/products/${num}`;


let xhr = new XMLHttpRequest();
//xhr.open('GET',url); //=xhr.open('GET',url,true)//url주소로 겟방식으로 만듬
xhr,open('GET','./data/product.json')
xhr.send();
//clg(xhr)

xhr.onreadystatechange=()=> { //온클릭이랑 비슷한개념
    //console.log(xhr);
    if(xhr.readyState === 4 && xhr.status === 200){
    let product = JSON.parse(xhr.responseText);}
    const result = document.querySelector('#result')
    console.log(product);
    result.innerHTML = `
            <p>상품명 : ${product.title}</p>
            <p>상품설명 : ${product.desctiption}</p>
            <div>
                <img src= `${}`
            </div>
    `
}
})