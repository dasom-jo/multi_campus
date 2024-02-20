// 키보드 이벤트

document.addEventListener('keydown' ,(e) => {

    let txtContents =`Code : ${e.code} \n key: ${e.key}`;//e.code는 사용자가 누른키

    document.querySelector('#result').innerText = txtContents; //div에 텍스트 작성
    
    if(e.key == 'Enter') { //엔터를 누르면
        window.close();//닫기
    }
})