const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // img 요소를 만들고, src 속성을 생성한다.
    let newImg = document.createElement('img');
    let srcNode = document.createAttribute('src');
    srcNode.value = './images/pic-1.jpg';

    // 생성된 src 속성을 img 요소와 관계를 지정한다.
    newImg.setAttributeNode(srcNode);
    // body에 img 요소를 넣는다.
    document.body.appendChild(newImg);
}, { once : true })