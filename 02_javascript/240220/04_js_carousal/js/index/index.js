function arrow_func(e) {
            if (e?.target.id == 'left') {
                imgIdx--;
                if (imgIdx <0) {
                    imgIdx = imgArr.length - 1; 
                }
            } else {
                if(imgIdx >= imgArr.length) {
                    imgIdx = 0;
                }
            container.style.backgroundImage = "url(./images/pic-3.jpg)";
            }}

            ////참고: 오른쪽 마우스 클릭 못해 를 만들기

            window.addEventListener('contextmenu',(e)=>{
                e.preventDefault();
                alert('마우스 우클릭 사용불가');
            })