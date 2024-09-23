// 학과 선택 시, alert으로 과 알려주기
let selectMajor = document.querySelector('#major');

selectMajor.onchange = () => {
    let major = selectMajor.options[selectMajor.selectedIndex];
    console.log(major.innerText, major.value);
    document.querySelector('#majorName').value = major.value;
    if (major.value) {
        document.querySelector('#majorName').readOnly = true;
    } else {
        document.querySelector('#majorName').readOnly = false;
    }
}

let btn = document.querySelector('#send');
btn.onclick = () => {
    // let subject = document.getElementsByName('subject');
    // let option;
    // for (let i=0;i<subject.length;i++) {
    //     option = subject[i].value;
    //     break;
    // }

    let subjectRadio = document.querySelector("input[name='subject']:checked");
    console.log(subjectRadio);

    let mailingCheck = document.querySelectorAll("input[name='mailing']:checked");
    console.log(mailingCheck);

    let result = "";

    result += subjectRadio.value + ", ";

    console.log('로그');
    console.error('에러');
    console.warn('워닝');
    console.info('인포');
    console.debug('디버그');
    for(let i=0; i<mailingCheck.length;i++){
        result += mailingCheck[i].value + ", ";
    }
    // for (let e of mailingCheck) {
    //     result += e.value + ", ";
    // }
    // mailingCheck.forEach(e => {
    //     result += e.value + ", ";
    // })
    alert(result);
}

