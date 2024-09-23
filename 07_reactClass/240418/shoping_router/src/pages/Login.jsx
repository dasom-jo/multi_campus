import styled from "styled-components";
import { Button } from "../components/ui/Button";
import useInputs from "../hooks/useInputs";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {loginUser, login, logout} = useAuth();
    const [form, onChange, reset, setForm] = useInputs({
        email: '',
        password: ''
    });

    const { email, password } = form;

    const onLoginHandler = async() => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users?email=${email}&password=${password}`
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                console.log(res.data);
                login(()=>{
                    console.log('user');
                    navigate('/');
                }, res.data[0].id);
            }
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <>
            <h1>로그인 화면</h1>
            <StyledLoginBox>
                <div className="input_group">
                    <input type='text' name='email' value={email} onChange={onChange} />
                    <input type='text' name='password' value={password} onChange={onChange} />
                </div>
                <Button onClick={onLoginHandler}>로그인</Button>
            </StyledLoginBox>
        </>
    );
}

const StyledLoginBox = styled.div`
    display: flex;
    .input_group {
        display: flex;
        flex-direction: column;
    }
`

export default Login;