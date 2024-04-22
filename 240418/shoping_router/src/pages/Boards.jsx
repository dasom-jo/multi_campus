import axios from 'axios';
import { useEffect, useState } from 'react';
import BoardList from '../components/board/BoardList';

const Boards = () => {
    const [boards, setBoards] = useState();
    const [users, setUsers] = useState();
    const getBoards = async () => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}posts`;
        try {
            const res = await axios.get(url);
            if (res.status === 200) setBoards(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getUsers = async () => {
        const url = `${process.env.REACT_APP_SERVER_ADDR}users`;
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                const obj = {}
                res.data.forEach(u => {
                    obj[u.id] = u
                })
                setUsers(obj);
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(()=>{
        getBoards();
        getUsers();
    }, [])

    return (
        <div>
            <h1>나의 게시판</h1>
            <BoardList boards={boards} users={users} />
        </div>
    );
}

export default Boards;

//     return (
//         <div>
//             <h1>나의 게시판</h1>
//             <BoardsList>
//                 {
//                     boards && users &&
//                     boards.map(post => (
//                         <Board post={post} users={users} key={post.id} />
//                     ))
//                 }
//             </BoardsList>
//         </div>
//     );
// }

// const Board = ({ post, users }) => {
//     const [comments, setComments] = useState([]);
//     const [showComments, setShowComments] = useState(false);

//     const getCommentsByPostId = async () => {
//         const url = `${process.env.REACT_APP_SERVER_ADDR}comments?postId=${post.id}`;
//         try {
//             const res = await axios.get(url);
//             setComments(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     const toggleComments = () => {
//         setShowComments(!showComments);
//     }
//     useEffect(()=> {
//         getCommentsByPostId();
//     }, []);


//     return (
//         <>
//             <div className='board' onClick={toggleComments}>
//             <div className='id'>
//                 <span>{post.id}</span>
//             </div>
//             <div className='title'>
//                 <span>{post.content}</span>
//                 <span className='like'>({[post.like]})</span>
//             </div>
//             <div className='writer'>
//                 <span>{users[post.userId].nickname}</span>
//             </div>
//         </div>
//         {showComments &&
//                 <CommentList>
//                     {
//                         comments != []
//                             ?
//                             comments.map(c => (
//                                 <div className='comment' key={c.id}>
//                                     <MdOutlineSubdirectoryArrowRight />
//                                     {c.public ?
//                                     <>
//                                         <div>
//                                             {c.content}
//                                             {c.img != "" && <img width="60" src={process.env.REACT_APP_SERVER_ADDR + c.img}/>}
//                                         </div>
//                                         <div>
//                                             {users[c.userId].nickname}
//                                         </div>
//                                     </>
//                                     :
//                                     <div>
//                                         비밀댓글입니다.
//                                     </div>
//                                     }
//                                 </div>
//                             ))
//                             :
//                             <div></div>
//                     }
//                 </CommentList>
//         }
//         </>
//     );


// const CommentList = styled.div`
//     margin-top: 10px;
//     margin-bottom: 50px;
//     display: flex;
//     flex-direction: column;
//     width: 50%;
//     justify-content: space-between;
//     & .comment {
//         display: flex;
//         justify-content: space-between;
//     }
// `
// const BoardsList = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 0 20px;
//     color: rgb(51, 51, 51);
//     & .board {
//         cursor: pointer;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding: 10px 5px;
//         width: 100%;
//         border-bottom: 1px solid rgba(51, 51, 51, 0.15);
//         .id {
//             width: 10%
//         }
//         .title {
//             width: 70%;
//             display: flex;
//             justify-content: space-between;
//             .like {
//                 color: rgb(237, 23, 70);
//             }
//         }
//         .writer {
//             width: 20%;
//             text-align: right;
//             & > span {
//                 height: 20px;
//                 padding: 7px 0 9px;
//             }
//         }
//     }
 /* ` */
