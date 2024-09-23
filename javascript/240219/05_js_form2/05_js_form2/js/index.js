// 학과 선택 시, alert으로 과 알려주기
let selectMajor = document.querySelector('#major');//major 요소를 할당

selectMajor.onchange = () => { //온체인지는 폼요소가  변경될때 (input,select,textarea)
    let major = selectMajor.options[selectMajor.selectedIndex];//선택된옵션 선언
    console.log(major.innerText, major.value); //콘솔에 출력
    document.querySelector('#majorName').value = major.value;//과 이름을 작성
    if (major.value) { // 과이름이 있으면
        document.querySelector('#majorName').readOnly = true; //읽기전용으로
    } else {
        document.querySelector('#majorName').readOnly = false;//직접작성
    }
}

let btn = document.querySelector('#send'); //btn의 변수지정
btn.onclick = () => { 
    let subject = document.getElementsByName('subject');//subject선언
    let option;//option선언
    for (let i=0;i<subject.length;i++) { //길이이자 갯수를 나타냄
        option = subject[i].value;
        break;
    }

    let subjectRadio = document.querySelector("input[name='subject']:checked");//속성이 서브젝 체크된버튼
    console.log(subjectRadio);//첫번째요소 반환

    let mailingCheck = document.querySelectorAll("input[name='mailing']:checked");
    console.log(mailingCheck);//속성(name)이 메일 이고 체크된 박스 선택

    let result = ""; //결과를 저장할 빈문자열 변수선언

    result += subjectRadio.value + ", ";//

    //방법1
    for(let i=0; i<mailingCheck.length;i++){
        result += mailingCheck[i].value + ", ";
    }

    //방법2
    // for (let e of mailingCheck) {
    //     result += e.value + ", ";
    // }
    //방법3
    // mailingCheck.forEach(e => {
    //     result += e.value + ", ";
    // })
    alert(result);
}


// console.log('로그');
    // console.error('에러');
    // console.warn('워닝');
    // console.info('인포');
    // console.debug('디버그');