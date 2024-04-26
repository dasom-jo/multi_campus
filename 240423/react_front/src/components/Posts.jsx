import { Pagination, Button, List, ListItem, ListItemText } from "@mui/material";
import { useAuth } from './../hooks/useAuth';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PostList = ({ posts, showCount }) => {
    const [lastPage, setLastPage] = useState();
    const onPageChange = (e, num) => {
        setCurrentPage(num);
    }
    const navigate = useNavigate();
    useEffect(() => {
        const postLen = posts?.length;
        const temp = Math.ceil(postLen / showCount)
        setLastPage(temp);
    }, [posts]);

    const { loginUser } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
            <List
                sx={{
                    minWidth: "300px"
                }}
            >
                {
                    posts && posts
                        .slice(showCount * (currentPage - 1), showCount * (currentPage))
                        .map(p => (
                            <ListItem
                                key={p.id}
                                divider
                                alignItems="flex-start"
                                sx={{
                                    flexDirection: "column",
                                }}
                            >
                                <ListItemText>
                                    <span>{p.User.nickname}</span>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        sx={{marginLeft: "4px"}}
                                        onClick={() => { navigate(`/profile/${p.UserId}`) }}
                                    >
                                            프로필 보기
                                    </Button>
                                    <span>
                                        {(loginUser && loginUser.id == p.UserId) ?
                                            <Button variant="contained" size="small" color="error">삭제</Button>
                                            :
                                            <Button variant="contained" size="small" color="success">팔로우</Button>
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