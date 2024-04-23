import { useState } from "react";

export const useProvideAuth = () => {
    const [loginUser, setLoginUser] = useState(localStorage.getItem("loginUser"));
    //localStorage에서 loginUser키에 저장된값을가져와 초기상태로 설정
    //이를통해 사용자가 로그인한 상태가 되었을때 이를 유지할수있다
    //로그인이라는 동작을 하면 매개변수가 두개들어가기
    const login = (callback, userId) => {
        localStorage.setItem("loginUser", userId);
        //setItem: 로컬 스토리지에 데이터를 저장하는 데 사용
        setLoginUser(userId);
        callback();//사용자가 로그인한 후에 추가적인 작업을 수행하기 위해 사용
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

