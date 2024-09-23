import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { PostList } from './../components/Posts';
import styled from "styled-components";


const Search = () => {
    const [ searchParams ] = useSearchParams();
    const hashtag = searchParams.get('hashtag');
    const [showResult, setShowResult] = useState(false);

    const {
        register, //입력요소를 form에 등록하는 함수
        handleSubmit, //폼 제출시 함수를 호출할 함수
        watch,//입력요소의 값을 감시하고 필요에다라 해당값을 가져오는함수
        reset,//폼의 값을 초기화하느느함수
        formState: { errors }, //폼의 유효성 검사 오류를 포함하는객체
    } = useForm();

    const navigate = useNavigate();

    //검색결과 담아줄거임
    const [posts, setPosts] = useState();

    const getPosts = async() =>{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
            params: { hashtag }
        });
    setPosts(res.data.payload);
};
useEffect(()=>{
    hashtag && getPosts();
}, [hashtag]);

    const onSearch = async (data) => {
        try {
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts?hashtag=${data.hashtag}`);
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
            //     params : data
            // });
            //주소창에 검색한 내용을 담음
            navigate({
                search:createSearchParams(data).toString()
            });
            setShowResult(true);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <StyledSearch>
            <form onSubmit={handleSubmit(onSearch)}>
                <input type="text" {...register("hashtag")} />
                <button type='submit'>#</button>
            </form>
            {hashtag && hashtag.trim() !== '' ? (
                <PostList posts={posts} setPosts={setPosts} showCount={3} />
            ) : (
                <h1>검색어를 입력하세요(❁´◡`❁)</h1>
            )}
        </StyledSearch>
    );
}
const StyledSearch= styled.div`
    h1{
        font-size:50px;
        color: #D94389;

    }
    form{
        display: flex;
        justify-content: center;
        margin-top:200px ;
    }
    input[type="text"] {
        width: 300px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px;
    }
    button[type="submit"]{
        color: white;
        font-size: 35px;
        border: none;
        background-color: #D94389;
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
`

export default Search;