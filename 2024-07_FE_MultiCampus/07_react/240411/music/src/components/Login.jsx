import { useState } from 'react';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    const handleLogin = () => {
        alert(`아이디는 ${userId}이고, 비밀번호는 ${userPw}입니다.`);
        setUserId("");
        setUserPw("");
        setUserPw("");
    }

    return (
        <>
            <div>
                <label htmlFor='userId'>아이디</label>
                <input type='text' id='userId' value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
                <label htmlFor='userPw'>비밀번호</label>
                <input type='password' id='userPw' value={userPw} onChange={(e) => setUserPw(e.target.value)} />
            </div>
            <button onClick={handleLogin}>로그인</button>
        </>
    );
}
export default Login;