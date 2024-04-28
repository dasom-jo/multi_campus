import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, } from '@mui/material'; // Material-UI 컴포넌트 import
import { styled } from 'styled-components';
const IdSearch = () => {
    //요청받은 이메일 저장
    const [nickname, setNickname] = useState("");
    //디비에서 받은정보저장
    const [userData, setUserData] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleIdSearch = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/idsearch`, {
            nickname:nickname // 사용자가 입력한 이메일 값을 전달
            });
            //api호출이 정상적인지 확인
            if (res.status === 200) {
                console.log('API 호출 성공!');
                console.log('응답 데이터:', res.data);

            // 응답 데이터에 따라 원하는 작업 수행
            if (res.data.code === 200) {
              // 사용자 정보를 찾은 경우
                const userData = res.data.user;
                console.log('찾은 email:', userData.email);
                setUserData(userData);
                setErrorMessage('');
            } else {
              // 사용자 정보를 찾지 못한 경우
                setErrorMessage('일치하는 사용자가 없습니다');
            }
            } else {
            console.log('API 호출 실패: 상태 코드', res.status);
            setErrorMessage('API 호출 실패');
            }
        } catch (error) {
            console.error('API 호출 중 에러:', error);
            setErrorMessage('API 호출 중 오류 발생');
        }
    };

    return (
        <StyledEmail>
            <h2>이메일 찾기</h2>
            <TextField
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                label="닉네임을 입력하세요"
                variant="outlined"
            />
            <Button variant="contained" onClick={handleIdSearch} >찾기</Button>
            {userData && (
                <div>
                    <p>찾은 이메일: {userData.email}</p>
                </div>
            )}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </StyledEmail>
    );
};

const StyledEmail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

`




export default IdSearch;