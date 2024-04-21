import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const PostDetail = () => {
    //state 상태관리
    const [post, setPost] = useState();
    const [userInfo, setUserInfo] = useState();
    //params id 붙인 주소로 이동가능
    const { id } = useParams();
    //navigate이동조건
    const navigate = useNavigate();
    //Post 내용 가져오기
    const getPostDetail = () =>{
        axios.get(`https://dummyjson.com/posts/${id}`)
        .then(res => res.data)
        .then(data => setPost(data));
    }
    //유저  가져오기
    const getUserInfo = () => {
        axios.get(`https://dummyjson.com/users/${post.userId}`)
        .then(res => res.data)
        .then(data => setUserInfo(data));
    }

    useEffect(() =>{
        getPostDetail();
    },[]);

    useEffect(() => {
        post &&
            getUserInfo();
    }, [post]);


    return (
        <div>
            { post && userInfo &&
                <StyledPostDetail>
                    <div className="title">{post.title}</div>
                    <div className="author">{userInfo.firstName} {userInfo.lastName} | 👍 {post.reactions}</div>
                    <div className="body">
                        {post.body}
                    </div>
                </StyledPostDetail>
            }
            <button onClick={()=>navigate(-1)}>돌아가기</button>
        </div>
    );
}

const StyledPostDetail = styled.div`
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 10px;
    margin: 1rem;
    .title {
        font-size: 1.6rem;
        font-weight: bold;
    }
    .author {
        font-size: 1.2rem;
        color: #333;
    }
    .body {
        margin-top: 1rem;
        font-size: 1.3rem;
    }
`;

export default PostDetail;