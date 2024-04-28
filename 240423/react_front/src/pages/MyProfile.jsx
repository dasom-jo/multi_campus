import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ProfileInfo } from "../components/Profile";
import { Button, InputBase } from "@mui/material";

const MyProfile = () => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();
    useEffect(()=>{
        getInfo();
    }, []);



    //백엔드 api로부터 정보를 가져오고 그정보를 setUserProfile 함수를 사용하여 상태에 설정하려는것
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
        <h1>내꺼다</h1>
            {userProfile &&
                <ProfileInfo user={userProfile} />
            }
        {/* 타임라인에 업데이트할 내용 쓰기 */}
        <h2>타임라인 업로드</h2>
        <InputBase id="input" type="text" sx={{border:"1px solid black", width:"500px",height:"50px", margin:"50px" }} />
        <InputBase type="file" />
        <Button >업로드</Button>

        </>
    );
}

export default MyProfile;