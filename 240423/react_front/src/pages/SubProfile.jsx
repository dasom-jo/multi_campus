import React, { useEffect, useState } from 'react';
import { useAuth } from './../hooks/useAuth';
import axios from 'axios';
import {useParams } from "react-router-dom";
import styled from 'styled-components';


const SubProfile = () => {
    const { id } = useParams();
    const { userId }= useAuth();
    const [followingId, setFollowingId] = useState("");
    const [profileImg, setProfileImg] = useState("");

    //팔로워 정보가져오기
    const getFollower = async()=>{
        try{
            const url =  `${process.env.REACT_APP_API_URL}/users/${id}`;
            const res = await axios.get(url);
            if(res.data.code === 200){
                console.log('apt호출성공');
                setFollowingId(res.data.payload);
                console.log(res.data);

            }else{
                console.log('api호출실패');
                console.log('API 호출 실패: 상태 코드', res.data.payload);
                    }
        }catch(error){
            console.error('API 호출 중 에러:', error);
            console.log('API 호출 중 오류 발생');
        }
    };

    //로컬에 저장한 프로필 이미지를 불러오는 코드
    useEffect(() => {
        const key =`profileImg_${id}`;
        // 로컬 스토리지에서 이미지 URL 가져오기
        const savedProfileImg = localStorage.getItem(key);
        if (savedProfileImg) {
            setProfileImg(savedProfileImg);
            console.log(key);
        }
    }, [id]);


    useEffect(()=>{
        getFollower();
    },[])

    return (
        <StyledSubProfile>
            {/* 이미지/닉네임/이메일 */}
            <div>{<img src={`http://localhost:8000/${profileImg}`} alt="Profile" />} </div>
            <div className='pName'>{followingId.email}</div>
            <div className='pName'>[{followingId.nickname}]</div>

        </StyledSubProfile>
    );
};

const StyledSubProfile = styled.div`
    img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        margin:20px;
        border: 15px double #247ef5
    }
    .pName {
        font-size: 30px; /* 예시로 24px로 지정 */
        font-weight: bold; /* 필요에 따라 추가적인 스타일 지정 */
        display: flex;
        justify-content: center;
        margin: 10px;
    }
`


export default SubProfile;