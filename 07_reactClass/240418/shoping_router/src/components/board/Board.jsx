import { styled } from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const Board = ({ post, users }) => {
    const {loginUser} = useAuth();
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const getCommentsByPostId = async () => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}comments?postId=${post.id}&_sort=-id`;
        try {
            const res = await axios.get(url);
            setComments(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    const toggleComments = () => {
        setShowComments(!showComments);
    }
    useEffect(() => {
        getCommentsByPostId();
    }, []);


    return (
        <>
            <div className='board' onClick={toggleComments}>
                <div className='id'>
                    <span>{post.id}</span>
                </div>
                <div className='title'>
                    <span>{post.content}</span>
                    <span>{loginUser == post.userId && "[내가 쓴 글]"}</span>
                    <span className='like'>({[post.like]})</span>
                </div>
                <div className='writer'>
                    <span>{users[post.userId].nickname}</span>
                </div>
            </div>
            {showComments &&
                <CommentList>
                    {
                        comments != []
                            ?
                            comments.map(c => (
                                <div className='comment' key={c.id}>
                                    <MdOutlineSubdirectoryArrowRight />
                                    {c.public ?
                                        <>
                                            <div>
                                                {c.content}
                                                {c.img != "" && <img width="60" src={process.env.REACT_APP_SERVER_ADDR + c.img} />}
                                            </div>
                                            <div>
                                                {users[c.userId].nickname}
                                            </div>
                                        </>
                                        :
                                        <div>
                                            비밀댓글입니다.
                                        </div>
                                    }
                                </div>
                            ))
                            :
                            <div></div>
                    }
                </CommentList>
            }
        </>
    );
}

const CommentList = styled.div`
    margin-top: 10px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-between;
    & .comment {
        display: flex;
        justify-content: space-between;
    }
`

export default Board;