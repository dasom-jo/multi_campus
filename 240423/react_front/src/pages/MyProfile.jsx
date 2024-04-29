import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ProfileInfo } from "../components/Profile";
import { Box, Button, InputBase, colors } from "@mui/material";

const MyProfile = ({ user }) => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();
    const [inputcontent, setInputcontent] = useState("");
    const [inputimg , setInputimg ] = useState("");
    const [profileImg, setProfileImg] = useState("");
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
//게시글에 이미지 업로드하는 코드
const uploadFile = async (e) => {
    // e.target.files[0] 업로드할 파일
    const formData = new FormData();
    formData.append('img', e.target.files[0])
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/posts/image`,
    formData,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem("token"),
        }
    }
    )
    console.log(response);
    setInputimg(response.data.img); //콘솔에 찍히는 주소 data.img:/upload/ ~~~.jpg
}

//프로필 이미지 업로드하는 코드
const uploadProfileImg = async (e) => {
    // e.target.files[0] 업로드할 파일
    const formData = new FormData();
    formData.append('img', e.target.files[0])
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/profilimg`,
    formData,
    {
        headers: {
            "Content-Type": "multipart/form-data", //내가 보낼 데이터는 이미지이다
            "Authorization": localStorage.getItem("token"),
        }
    }
    );

    console.log(response);
    setProfileImg(response.data.img); //콘솔에 찍히는 주소 data.img:/upload/ ~~~.jpg
    localStorage.setItem(`profileImg_${loginUser.id}`, response.data.img);
}
//로컬에 저장한 프로필 이미지를 불러오는 코드
useEffect(() => {
    const key =`profileImg_${ loginUser.id}`;
    // 로컬 스토리지에서 이미지 URL 가져오기
    const savedProfileImg = localStorage.getItem(key);
    if (savedProfileImg) {
        setProfileImg(savedProfileImg);
    }
}, [loginUser.id]);

    return (
        <>
        <h1>my profile</h1>
        {profileImg && <img src={"http://localhost:8000/" + profileImg} width='200' />}
        <input type="file"  onChange={uploadProfileImg } />
                {userProfile &&
                <ProfileInfo user={userProfile} />
            }

        {/* 타임라인에 업데이트할 내용 쓰기 */}
        <h2>TimeLine</h2>
        <InputBase onChange={content} value={inputcontent} id="input" type="text" sx={{border:"1px solid black", width:"500px",height:"50px", margin:"50px" }} />
        <InputBase type="file" onChange={uploadFile}/>
        <Button onClick={PostTimeLine}>업로드</Button>

        </>
    );
}

export default MyProfile;