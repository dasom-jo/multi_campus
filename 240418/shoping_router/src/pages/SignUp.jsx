import styled from "styled-components";
import useInputs from "../hooks/useInputs";
import { Button } from "../ui/Button";
import axios from 'axios';

const SignUp = () => {
    const [form, onChange, reset]= useInputs({
        email: '',
        nickname: '',
        password: '',
        pwd_chk: '',
        errMsg: '',
        validate: false,
    });

    const {email, nickname, password, pwd_chk, errMsg, validate} = form;

    const onInsertUser = () => {
        if (validate && errMsg === "") {
            const url = `${process.env.REACT_APP_SERVER_ADDR}users`;
            const user = {
                email,
                nickname,
                password
            }
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
                <div>
                    <label htmlFor="email">이메일</label>
                    <input id="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="nickname">닉네임</label>
                    <input id="nickname" name="nickname" value={nickname} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input id="password" name="password" value={password} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="pwd_chk">비밀번호 확인</label>
                    <input id="pwd_chk" name="pwd_chk" value={pwd_chk} onChange={onChange} />
                </div>
                <span>{errMsg}</span>
                <Button onClick={(e)=>{
                    e.preventDefault();
                    reset();
                }}>초기화</Button>
                <Button onClick={(e) => {
                    e.preventDefault();
                    onInsertUser();
                }}>회원가입</Button>
            </JoinForm>
        </>
    );
}

const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        justify-content: space-between;
        padding: 1rem 4rem;
        width: 70%;
        margin: 1rem auto;
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
        button {

        }
    }
`

export default SignUp;