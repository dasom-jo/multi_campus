import { useState } from "react";

const useProvideAuth = () => {
    const [loginUser, setLoginUser] = useState(localStorage.getItem("loginUser"));
    //로그인이라는 동작을 하면 매개변수가 두개들어가기
    const login = (callback, userId) => {
        localStorage.setItem("loginUser", userId);
        setLoginUser(userId);
        callback();
    }

    const logout = (callback) =>{
        localStorage.removeItem("loginUser");
        setLoginUser(null);
        callback();
    }
    return {
        loginUser,
        login,
        logout
    }; //처음부터 여기까지가 훅을 만든거
}

export default useProvideAuth;

//프로바이드에 밸류를 넣어주기위한