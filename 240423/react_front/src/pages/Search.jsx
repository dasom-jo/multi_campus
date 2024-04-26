import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { PostList } from './../components/Posts';


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
        <>
            <form onSubmit={handleSubmit(onSearch)}>
                <input type="text" {...register("hashtag")} />
                <button type='submit'>검색</button>
            </form>
            {
                hashtag ?
                    <PostList posts={posts} showCount={3} /> :
                '검색하세요'
            }
        </>
    );
}

export default Search;