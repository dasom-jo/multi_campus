import { Pagination, Button, List, ListItem, ListItemText, AccordionSummary } from "@mui/material";
import { useAuth } from './../hooks/useAuth';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
//타임라인페이지에 나올 내용코드 - 디자인
//페이징(Pagination) 기능을 제공하여 게시물 목록을 페이지별로 나누어
export const PostList = ({ posts, showCount,setPosts }) => { //posts, showCount  =>TimeLine.jsx
    const [lastPage, setLastPage] = useState();
    const { loginUser } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    //포스팅내용 업데이트할state
    const [contents, setContents] = useState("");
    //게시물 목록페이지 이벤트
    const onPageChange = (e, num) => {
        setCurrentPage(num);
    }
    const navigate = useNavigate();
    //페이지 수를 정하는 코드
    useEffect(() => {
        const postLen = posts?.length
        //temp = 각페이지/ Math.ceil:숫자를 올림
        const temp = Math.ceil(postLen / showCount)
        setLastPage(temp);
    }, [posts]);


    const uploadtTimeLine = (id)=>{
        Swal.fire({
            title:'게시글수정',
            html:`<input id="swal-input1" class="swal2-input">`,
            showCancelButton: true,
            preConfirm:()=>{
                const content = document.getElementById('swal-input1').value;
                axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`,{
                    content,
                },{
                    headers:{
                        "Authorization": localStorage.getItem("token"),
                    },
                }).then(res => {
                    if(res.data.code === 200){
                        setContents(posts.map(p=>{
                            if(p.id === id){
                                return {
                                    ...p,
                                    content,
                                }
                            }
                            return p;
                        }));
                    }
                });
            }
        })
    }

    const deletePost = async (id) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                },
            });

            if (res.data.code === 200) {
                console.log('API 호출 성공!');
                console.log('응답 데이터:', res.data);
                // 포스트 삭제 후 상태 업데이트
                setPosts(posts.filter(p => p.id !== id));
            } else {
                // HTTP 응답 상태 코드가 200이 아닌 경우 (요청 실패)
                console.log('API 호출 실패: 상태 코드', res.data.code);
                console.log('API 호출 실패');
            }
        } catch (error) {
            // API 호출 중에 발생한 오류를 처리
            console.error('API 호출 중 에러:', error);
            console.log('API 호출 중 오류 발생');
        }
    };

    const followerTimeLine= async(id)=>{
        try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/follow/`,{
            id:id
        },{
            headers: {
                "Authorization": localStorage.getItem("token"),
            },
        });   if(res.data.code === 200){
            console.log('apt호출성공');
            console.log(res.data);
        }else{
            console.log('api호출실패');
            console.log('API 호출 실패: 상태 코드', res.data);
        }
        }catch(error){
        console.error('API 호출 중 에러:', error);
        console.log('API 호출 중 오류 발생');
    }
}


    return (
        <>
            <List
                sx={{
                    minWidth: "300px"
                }}
            >
                {
                    posts && posts
                    //목적:posts 배열에서 현재페이지로 해당하는 일부게시물 추출
                        .slice(showCount * (currentPage - 1), showCount * (currentPage))
                        //전 게시물의 마지막인덱스(=현재페이지 첫번쨰),현게시물의 마지막인덱스(시작은포함,끝은 불포함)
                        .map(p => (
                            <ListItem
                                key={p.id}
                                divider //항목사이의 구분선
                                alignItems="flex-start"
                                sx={{
                                    flexDirection: "column",
                                }}
                            >
                                <ListItemText>
                                    <span>user:{p.User.nickname}</span>
                                    <span>
                                        {(loginUser && loginUser.id == p.UserId)?
                                        <Button
                                        size="small"
                                        variant="outlined"
                                        style={{ margin: '6px' }}
                                        onClick={()=>uploadtTimeLine(p.id)}
                                    >수정</Button>
                                    :
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        style={{ margin: '6px' }}
                                        onClick={() => { navigate(`/profile/${p.UserId}`) }}
                                    >프로필 보기</Button>}
                                    </span>
                                    <span>
                                        {(loginUser && loginUser.id == p.UserId) ?
                                            <Button
                                                variant="contained" size="small" color="error"
                                                onClick={() => { deletePost(p.id) }}
                                                >삭제</Button>
                                            :
                                            <Button variant="contained" size="small" color="success"
                                            onClick={() => followerTimeLine(p.UserId)}
                                            >팔로우</Button>
                                        }
                                    </span>
                                </ListItemText>
                                <ListItemText>
                                    <span>{p.content}</span>
                                    {p.img && <img src={"http://localhost:8000/" + p.img} width='20' />}
                                </ListItemText>
                            </ListItem>
                        ))
                }
            </List>
            <Pagination
                count={lastPage || 1}
                defaultPage={1}
                page={currentPage}
                onChange={onPageChange}
            />
        </>
    );
}