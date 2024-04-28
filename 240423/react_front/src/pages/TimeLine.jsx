import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "../components/Posts";

//타임라인 페이지 중심-정보만뿌려주기
//타임라인에 필요한데이터 뿌려주기
const TimeLine = () => {
    const [posts, setPosts] = useState();

    const getPosts = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        if (res.data.code === 200) {
            setPosts(res.data.payload);
        }
    }
    //보여줄 게시글의 갯수는 5개로 지정- posts.jsx
    const showCount = 5;
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1>타임라인</h1>
            <PostList
                    posts={posts}
                    showCount= {showCount}
                    />
        </>
    );
}

export default TimeLine;