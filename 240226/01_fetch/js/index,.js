//fetch('URL', {method:'GET'}) //GET 생략가능
fetch('URL')

//frtch 요청
fetch('URL',{method: "post", body:'~~' , headers:'~~'})
console.log(1);
fetch(url)
    .then(response =>{
    console.log(2);})
    
    console.log(3);

    //1,3,2 /. 처리하는동안 쉬지않고 다음거 먼저함

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const resultDiv = document.querySelector('result');
        resultDiv.innerText=`
                    ${}${}${}`
    })

