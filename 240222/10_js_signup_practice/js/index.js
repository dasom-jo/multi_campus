아웃포커스

// 이름 : 5글자까지만 입력
const input_name = document.signupForm.name;
input_name.addEventListener('blur', ()=> {
    if (input_name.value.length >= 6){
        alert('이름은 5글자 이내만 작성 가능합니다.');
        input_name.value = input_name.value.slice(0,-1);
    }
})

// 아이디 : 5~20글자까지 제한, 소문자로 저장,중복여부 체크
const input_id = document.signupForm.id;
input_id.addEventListener('blur',()=>{
    if(input_id.value.length<5 ||input_id.value.length>20 ) {
        alert('아이디는 5~20글자까지 입력가능합니다. 다시입력해주세요');
    }
})

// 비밀번호 : 10~16자리 문자, 숫자, ~!@#$%^&*
const input_pwd = document.signupForm.pwd.value;
if(input_pwd.value.length<10) {
    alert('문자, 숫자, 특수문자(~!@#$%^&*)의 조합 10 ~ 16자리로 입력이 가능합니다.');
};//비밀번호는 무슨 버튼을 눌러 확인???

// 비밀번호 확인 : 일치 여부 체크
const pwd_chk = document.signupForm.pwdchk.value;
if(pwd_chk !== input_pwd ) {
    alert('비밀번호가 같지않습니다. 다시 입력 바랍니다')
};

// 이메일 선택 : 주소 자동기입 및 읽기전용 처리
// 이메일 직접입력 : 주소 빈 칸 설정 및 작성 가능 처리

// 회원가입 버튼 클릭 시 : 이동하지 않고 객체로 값 가져오기


