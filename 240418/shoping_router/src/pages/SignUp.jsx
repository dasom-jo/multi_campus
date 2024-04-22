import styled from "styled-components";
import useInputs from "../hooks/useInputs";
import { Button } from "../components/ui/Button";
import axios from 'axios';
//회원가입 페이지
//에러메세지까지 기본으로 가지고잇음
const SignUp = () => {
    const [form, onChange, reset]= useInputs({
        email: '',
        nickname: '',
        password: '',
        pwd_chk: '',
        errMsg: '',
        validate: false, //폼데이터가 유효하냐 안하냐
    });

    const {email, nickname, password, pwd_chk, errMsg, validate} = form;

    const onInsertUser = () => {
        if (validate) { //폼유효성 검사
            const url = `${process.env.REACT_APP_SERVER_ADDR}users`;
            const user = {
                email,
                nickname,
                password
            }//해당 정보를 db에 보냄
            axios.post(url,user)
            .then(res => {
                if (res.status === 201) {
                    alert('회원가입');
                }
            })
            .catch(err =>console.error(err))
            .finally(reset());
        }
    };

    return (
        <>
            <h1>회원가입</h1>
            <JoinForm>
                <div className="input_group">
                    <label htmlFor="email">이메일</label>
                    <div>
                        <input id="email" name="email" value={email} onChange={onChange}/>
                        <div className="errMsg">{errMsg?.email}</div>
                    </div>
                </div>

                <div className="input_group">
                    <label htmlFor="nickname">닉네임</label>
                    <div>
                        <input id="nickname" name="nickname" value={nickname} onChange={onChange} />
                        <div className="errMsg">{errMsg?.nickname}</div>
                    </div>
                </div>

                <div className="input_group">
                    <label htmlFor="password">비밀번호</label>
                    <div>
                        <input id="password" name="password" value={password} onChange={onChange} />
                        <div className="errMsg">{errMsg?.password}</div>
                    </div>
                </div>
                <div className="input_gtoup">
                    <label htmlFor="pwd_chk">비밀번호 확인</label>
                    <div>
                        <input id="pwd_chk" name="pwd_chk" value={pwd_chk} onChange={onChange} />
                        <div className="errMsg">{errMsg?.pwd_chk}</div>
                    </div>
                </div>
                <span>{errMsg}</span>
                <Button onClick={(e)=>{
                    e.preventDefault();
                    reset();
                }}>초기화</Button>
                <Button onClick={(e) => {
                    //preventDefault:폼 제출의 기본 동작을 막음
                    e.preventDefault();
                    //그리고 유효성검사
                    onInsertUser();
                }}>회원가입</Button>
            </JoinForm>
        </>
    );
}

const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    .btn_group {
        padding-top: 2rem;
        margin:0 auto;
    }
    .input_group{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 1rem auto;
        height: 2rem;
        label {
            margin-right: 1rem;
        }
        input {
            border-radius: 9px;
            border: none;
            box-shadow: 10px 10px 10px grey;
            background-color: #b5c9f4;
            padding: 0.5rem;
        }
        .errMsg {
            font-size: small;
            color : red;
        }
    }

`

export default SignUp;