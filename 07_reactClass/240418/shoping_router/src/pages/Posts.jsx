import axios from "axios";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import styled from 'styled-components';

const Posts = () => {
    //일단 주소를 체크
    const [searchParams, setSearchParams] = useSearchParams();
    const userId = searchParams.get('user');
    //사용자가 어떤 버튼을 클릭하면 특정 페이지로 이동
    const navigate = useNavigate();
    const [posts, setPosts] = useState();
    const [users, setUsers] = useState();
    //사용자페이지에서 해당 아이디가 유알에에적은 아이디와 일치한다면 해당아이디포스터를
    //존재하지않으면 포스트 전부를 보야줌
    const getPosts = () => {
        const url = userId ?
            `https://dummyjson.com/posts/user/${userId}`
            : "https://dummyjson.com/posts";

        axios.get(url)
            .then(res => res.data.posts)
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }

    const getAllUsers = () => {
        axios.get("https://dummyjson.com/users?limit=100")
            .then(res => res.data.users)
            .then(data => setUsers(data))
            .catch(err => console.error(err))
    }


    useEffect(() => {
        getAllUsers();
        getPosts();
    }, [userId]);

    return (
        <div>
            <h1>게시판 목록</h1>
            {
                userId && <button onClick={() => navigate(-1)}>전체 보기</button>
            }
            <StyledPostList>
                {posts &&
                    posts.map(p => (
                        <StyledPost key={p.id}>
                            <Link to={`${p.id}`}>
                                <div className="id">{p.id}</div>
                                <div>
                                    <div className="title">
                                        {p.title}
                                    </div>
                                    <div className="tag">
                                        {p.tags.map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}

                                    </div>
                                </div>
                                <div className="author" onClick={(e) => {
                                    e.preventDefault();
                                    setSearchParams({user: p.userId});
                                    // navigate({
                                    //     pathname: '/posts',
                                    //     search: `user=${p.userId}`
                                    // });
                                }}>{
                                    users.map(user => (
                                        user.id === p.userId && user.firstName+' '+user.lastName
                                    ))

                                    } | 👍 {p.reactions}</div>
                            </Link>
                        </StyledPost>
                    ))
                }
            </StyledPostList>
        </div>
    );
}

const StyledPostList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    padding: 0;
    list-style: none;
    font-size: 1.5rem;
`

const StyledPost = styled.li`
    border-bottom: 1px solid black;
    a {
        margin: 0.8rem 0;
        padding: 1.2rem;
        color: black;
        text-decoration: none;
        display: grid;
        grid-template-columns: 0.5fr 5fr 3fr;
        justify-content: space-between;
        .tag{
            display: flex;
            font-size: 1.2rem;
            span {
                color: navy;
                &::before {
                    content:'[#'
                }
                &::after {
                    content:'] '
                }
            }
        }

        .author {
            text-align: end;
        }
    }
`

export default Posts;