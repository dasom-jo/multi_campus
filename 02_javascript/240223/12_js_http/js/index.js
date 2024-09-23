const user = {};

function err (e, msg) {
    e.currentTarget.parentElement.querySelector('.alert').innerText = msg;
} //이벤트가 발생한 요소의 부모 요소를 찾음.

function clearErr(e){
    e.currentTarget.parentElement.querySelector('.alert').innerText = '';
}

//이름 : 5글자까지만 입력
const input_name = document.signupForm.name;
input_name.addEventListener('blur', (e)=>{
    input_name.value = input_name.value.replaceAll(" ",""); 
    if(input_name.value != '' && input_name.value.length > 5) {
        err (e, '5글자 이내만 사용가능합니다.');
        input_name.value = input_name.value.slice(0,5);
    }else {
        clearErr(e);
    }
    user.name = input_name.value; 
})

//아이디: 5~20까지 제한, 소문자로 저장, 중복여부 체크 
const input_id = document.signupForm.input_id;
input_id.addEventListener('blur', (e) => {
    input_id.value = input_id.value.replaceAll(" ", "").toLowcase();
    if(input_id.value != '' && (input_id.value.length < 5 || input_id.value.length > 20)){
    err(e, '5~20글자까지만가능합니다 ');        
    input_id.value = '';
}else {
    clearErr(e);
}  
    user.id = input_id.value;
})

//비밀번호 : 10~16자리 문자, 숫자, ~!@#$%^&*
const input_pwd = document.signupForm.pwd;
input_pwd.addEventListener('blur', () => {
    input_pwd.value = input_pwd.trim();
    if(input_pwd.value != "" && input_pwd.value.length < 10 || input_pwd.value.length > 16){
        alert('10~16글자만까지만 사용가능합니다 ');
        input_pwd.value = ''; 
    } // 문자, 숫자, ~!@#$%^&* 체크
    user.pwd = input_pwd.value;
})

//비밀번호 확인: 일치여부 체크
const input_pwdChk = document.signupForm.pwdChk;
input_pwdChk.addEventListener('blur',() =>{
    input_pwdChk.value = input_pwdChk.value.trim();
    if(input_pwdChk.value != "" && input_pwdChk.value != user.pwd) {
        alert('다릅니다');
        input_pwdChk.value = "";
    }
    user.pwdChk = input_pwdChk.value;
})

//이메일 직접입력 : 주소 빈 칸 설정및 작성 가능 처리
const select_email = document.querySelector('#addrBox');
const input_acc = document.signupForm.emailAccount;
const input_addr = document.signupForm.emailAddr;
input_addr.addEventListener('blur',() => {
    if(input_addr.value != "" && (!input_addr.value.split('.')[0] || !input_addr.value.split('.')[1])){
        alert('올바르지못한 도메인');
    }else if (!input .value) {
        alert('이메일 아이디를 입력해주세요');
        input_acc.focus();
    }
})


//이메일 선택 : 주소 자동기입 및 읽기 전용 처리
select_email.addEventListener('change',()=>{
    console.log(select_email.value);
    if(select_email.selectedIndex > 0) {
        input_addr.value = select_email.value;
        input_addr.readOnly = true;
    }else {
        input_addr.value = "";
        input_addr.readOnly = false;
    }
})


//회원가입 버튼 클릭시 : 이동하지않고 객체로 값 가져오기
const signUpBtn = document.querySelector('button[type=submit]');
signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //이메일
    user.email = input_acc.value + '@' + input_addr.value;

    //학년반 선택
    user.gr = document.signupForm.gr.value;
    user.cl = document.signupForm.cl.value;

    //언어선택
    const input_language = document.signupForm.language;
    let language = [];
    input_language.forEach(Element => {
        if(element.checked){
            language.push(element.value);
        } 
    });
    user.language = language;
    console.log(user);
})