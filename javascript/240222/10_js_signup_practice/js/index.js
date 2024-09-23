// // 이름 : 5글자까지만 입력
// const input_name = document.signupForm.name;
// input_name.addEventListener('blur', ()=> {
//     if (input_name.value.length >= 6){
//         alert('이름은 5글자 이내만 작성 가능합니다.');
//         input_name.value = input_name.value.slice(0,-1);
//     }
//     user.name = input_name.value;
// })

// // 아이디 : 5~20글자까지 제한, 소문자로 저장,중복여부 체크
// //아이디와 중복버튼선언
// let input_id = document.querySelector('#user_id');
// let b_btn = document.querySelector('#btn-black');
// //아이디작성후 동작시
// b_btn.addEventListener('clcik',()=>{
//     //아이디 소문자와 공백잇는지체크
//     let input_value = input_id.value.trim().toLowerCase();
//     input_id.value = input_value;
//     //아이디 글자수체크
//     if(input_id.value = '' &&(input_id.length <5 || input_id.length >20)){
//         alert('글자수는 5~20글자로 제한됩니다. ')
//     }
//     //중복체크
//     user.id = input_id.value    
// })


// // 비밀번호 : 10~16자리 문자, 숫자, ~!@#$%^&*
// // 비밀번호 선언
// const input_pwd = document.signupForm.pwd;
// //비밀번호 작성후 동작시
// input_pwd.addEventListener('blur',() =>{
//     input_pwd.value = input_id.value.trim();
// })
// //비밀번호 문자,숫자,특수기호 포함선언
// //글자수제한
// //글자수제한오버시 알림창

    

// // 비밀번호 확인 : 일치 여부 체크
// //비밀번호 중복선언
// //비밀번호 일치 true
// //알림창 : 비밀번호가 일치합니다
// //false 
// //알림창: 비밀번호가 일치하지않습니다.

// // 이메일 선택 : 주소 자동기입 및 읽기전용 처리
// //이메일선언
// //직접입력버튼선언
// //버튼입력 동작시
// //기입시 읽기전용처리
// //이메일중복확인

// // 이메일 직접입력 : 주소 빈 칸 설정 및 작성 가능 처리
// //???

// // 회원가입 버튼 클릭 시 : 이동하지 않고 객체로 값 가져오기
// //clg


//
const user = {};
//function ERR- 에러만드심
//function clearERR- 에러지우는거

// 이름 : 5글자까지만 입력
const input_name = document.signupForm.name;
input_name.addEventListener('blur', ()=>{
    input_name.value = input_name.value.replaceAll(" ", "");
    if (input_name.value != '' && input_name.value.length > 5) {
        alert('5글자 이내만 사용가능합니다.');
        input_name.value = input_name.value.slice(0, 5);
    }
    user.name = input_name.value;
})

// 아이디 : 5~20글자까지 제한, 소문자로 저장, 중복여부 체크
const input_id = document.signupForm.id;
input_id.addEventListener('blur', () => {
    input_id.value = input_id.value.replaceAll(" ", "").toLowerCase();
    if (input_id.value != '' && (input_id.value.length < 5 || input_id.value.length > 20)) {
        alert('5~20글자까지만 사용가능합니다.');
        input_id.value = '';
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