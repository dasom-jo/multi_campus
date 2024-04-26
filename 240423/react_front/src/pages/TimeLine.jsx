import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "../components/Posts";

const TimeLine = () => {
    const [posts, setPosts] = useState();

    const getPosts = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        if (res.data.code === 200) {
            setPosts(res.data.payload);
        }
    }

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