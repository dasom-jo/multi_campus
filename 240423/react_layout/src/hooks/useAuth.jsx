import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export const useAuth = () => {
    return useContext(LoginContext);

}

//LoginContext에서 인증정보를 받아오기위해