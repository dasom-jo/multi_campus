import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ProfileInfo } from "../components/Profile";
import { Button, InputBase } from "@mui/material";

const MyProfile = () => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();
    const [inputcontent, setInputcontent] = useState("");
    const [inputimg , setInputimg ] = useState();
    const content = (e) =>setInputcontent(e.target.value);
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

//개인프로필에서 타임라인을 올리는 코드
    const PostTimeLine = async(req,res) =>{
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/posts`,
            {
                    content:inputcontent,
                    img:inputimg,
                    UserId: req.user.id
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                },
            }
        );
            console.log('요청 성공:', response.data);
        } catch (error) {
            console.error('요청 실패:', error);
    }
};

    return (
        <>
        <h1>my profile</h1>
            {userProfile &&
                <ProfileInfo user={userProfile} />
            }
        {/* 타임라인에 업데이트할 내용 쓰기 */}
        <h2>TimeLine</h2>
        <InputBase onChange={content} value={inputcontent} id="input" type="text" sx={{border:"1px solid black", width:"500px",height:"50px", margin:"50px" }} />
        <InputBase value={inputimg} type="file" />
        <Button onClick={PostTimeLine}>업로드</Button>

        </>
    );
}

export default MyProfile;