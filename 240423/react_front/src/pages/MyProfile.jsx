import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const MyProfile = () => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();

    useEffect(()=>{
        getInfo();
    }, []);

    const getInfo = async () => {
        try {
            const userId = loginUser.id;
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
            setUserProfile(res.data.payload);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <h1>마이 프로필입니다</h1>
            {userProfile &&
                <>
                    <h1>{userProfile.email}</h1>
                    <h1>{userProfile.nickname}</h1>
                </>
            }
        </>
    );
}

export default MyProfile;