const user = {};

function err(e, msg) {
    e.currentTarget.parentElement.querySelector('.alert').innerText = msg;
}

function clearErr(e) {
    e.currentTarget.parentElement.querySelector('.alert').innerText = '';
}

// 이름 : 5글자까지만 입력
const input_name = document.signupForm.name;
input_name.addEventListener('blur', (e)=>{
    input_name.value = input_name.value.replaceAll(" ", "");
    if (input_name.value != '' && input_name.value.length > 5) {
        err(e, '5글자 이내만 사용가능합니다.');
        input_name.value = input_name.value.slice(0, 5);
        
    } else {
        clearErr(e);
    }
    user.name = input_name.value;
})

// 아이디 : 5~20글자까지 제한, 소문자로 저장, 중복여부 체크
const input_id = document.signupForm.id;
input_id.addEventListener('blur', (e) => {
    input_id.value = input_id.value.replaceAll(" ", "").toLowerCase();
    if (input_id.value != '' && (input_id.value.length < 5 || input_id.value.length > 20)) {
        err(e, '5~20글자까지만 사용가능합니다.');
        input_id.value = '';
    } else {
        clearErr(e);
    }
    // 중복 체크
    user.id = input_id.value;
})

// 비밀번호 : 10~16자리 문자, 숫자, ~!@#$%^&*
const input_pwd = document.signupForm.pwd;
input_pwd.addEventListener('blur', () => {
    input_pwd.value = input_pwd.value.trim();
    if (input_pwd.value != '' && input_pwd.value.length < 10 || input_pwd.value.length > 16) {
        alert('10~16글자까지만 사용가능합니다.');
        input_pwd.value = '';
    }
    // 문자, 숫자, ~!@#$%^&* 체크
    user.pwd = input_pwd.value;
})


// 비밀번호 확인 : 일치 여부 체크
const input_pwdChk = document.signupForm.pwdChk;
input_pwdChk.addEventListener('blur', () => {
    input_pwdChk.value = input_pwdChk.value.trim();
    if (input_pwdChk.value != '' && input_pwdChk.value != user.pwd) {
        alert('다릅니다.');
        input_pwdChk.value = '';
    } 
    user.pwdChk = input_pwdChk.value;
})

// 이메일 직접입력 : 주소 빈 칸 설정 및 작성 가능 처리
const select_email = document.querySelector('#addrBox');
const input_acc = document.signupForm.emailAccount;
const input_addr = document.signupForm.emailAddr;
input_addr.addEventListener('blur', () => {
    if (input_addr.value != '' && (!input_addr.value.split(".")[0] || !input_addr.value.split(".")[1])) {
        alert('올바르지 못한 도메인');
    }else if (!input_acc.value) {
        alert('이메일 아이디를 입력해주세요.');
        input_acc.focus();
    }
})

// 이메일 선택 : 주소 자동기입 및 읽기전용 처리
select_email.addEventListener('change', ()=>{
    console.log(select_email.value);
    if (select_email.selectedIndex > 0) {
        input_addr.value = select_email.value;
        input_addr.readOnly = true;
    } else {
        input_addr.value = '';
        input_addr.readOnly = false;
    }
})


// 회원가입 버튼 클릭 시 : 이동하지 않고 객체로 값 가져오기
const signUpBtn = document.querySelector('button[type=submit]');
signUpBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    // 이메일
    user.email = input_acc.value + '@' + input_addr.value;
    
    // 학년, 반 선택
    user.gr = document.signupForm.gr.value;
    user.cl = document.signupForm.cl.value;

    // 언어 선택
    const input_language = document.signupForm.language;
    let language = [];
    input_language.forEach(element => {
        if (element.checked) {
            language.push(element.value);
        }
    });
    user.language = language;
    // 콘솔 출력
    console.log(user);
})