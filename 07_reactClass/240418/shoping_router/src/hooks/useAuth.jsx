import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const useAuth = () => {
    //authContenxt 를 사용하기위한 hook
    return useContext(LoginContext);

}

export default useAuth;