import styled from "@emotion/styled";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { SiKakaotalk } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import SubProfile from "../pages/SubProfile";


export const ProfileInfo = ({ user }) => {
    const navigate = useNavigate();
    const [followingList, setFollowingList] = useState();
    const [followingOpen, setFollowingOpen] = useState(false);

    const [followerList, setFollowerList] = useState();
    const [followerOpen, setFollowerOpen] = useState(false);

    const getFollowerList = async () => {
        try {
            const id = user.id;
            const url = `${process.env.REACT_APP_API_URL}/users/followers/${id}`;
            const response = await axios.get(url);
            if (response.data.code === 200) {
                setFollowerList(response.data.payload);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getFollowingList = async() => {
        try {
            const id = user.id;
            const url = `${process.env.REACT_APP_API_URL}/users/followings/${id}`;
            const response = await axios.get(url);
            if (response.data.code === 200) {
                setFollowingList(response.data.payload);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getFollowingList();
        getFollowerList();
    }, [])

    const styles = {
        f_title: { padding: "1rem", borderTop: "1px solid #e1e1e1" },
        f_value: { padding: "1rem 2rem", borderTop: "1px solid #e1e1e1", cursor: "pointer" }
    }
    const followingToggle = ()=> setFollowingOpen(!followingOpen);
    const followerToggle = () => setFollowerOpen(!followerOpen);
    return (
        <>
            <Grid item sx={{ p: "1.5rem 0rem" }}>
                <Typography variant="h6">{user.nickname}</Typography>
                <Typography color="subColor.main">{user.email}</Typography>
            </Grid>
            <Grid container px={6}>
                <FollowBox title={"팔로잉"} handleToggle={followingToggle} />
                {followingOpen &&
                    <FollowList data={followingList} />
                }
                <FollowBox title={"팔로워"} handleToggle={followerToggle} />
                {followerOpen &&
                    <FollowList data={followerList} />
                }
            </Grid>
        </>
    )
}
export const FollowList = ({data}) => {
    const navigate = useNavigate();
    return (

        <Grid item xs={12} px={6}>
            <Stack spacing={1}>
                {data && data.map(u => (
                    <Paper key={u.id} sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: '1rem 3rem',
                        cursor: "pointer"
                    }}
                        >
                        <Typography title={u.email} sx={{marginRight:"20px"}}>{u.nickname}</Typography>
                        <Typography
                                    onClick={() => navigate(`/subprofile/${u.id}`)}
                                    sx={{color:'grey'}}
                                    data={u.id}
                                    >[프로필보기]</Typography>
                        <Typography>{u.provider !== "local" && <SiKakaotalk />}</Typography>
                    </Paper>
                ))}
            </Stack>
        </Grid>
    )
}
export const FollowBox = ({ title, handleToggle }) => {
    const styles = {
        f_title: { padding: "1rem", borderTop: "1px solid #e1e1e1" },
        f_value: { padding: "1rem 2rem", borderTop: "1px solid #e1e1e1", cursor: "pointer" }
    }
    return (
        <>
            <Grid item xs={6}>
                <Typography sx={styles.f_title}>{title}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "end" }}>
                <Typography
                    sx={styles.f_value}
                    onClick={handleToggle}
                    color="grey"
                >[보기]</Typography>
            </Grid>
        </>
    )
}