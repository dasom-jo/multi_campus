import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { ProfileInfo } from "../components/Profile";

const Profile = () => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if (loginUser.id === id) {
            navigate('/profile')
        }
        getInfo();
    }, []);

    const getInfo = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
            setUserProfile(res.data.payload);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            {userProfile &&
                <ProfileInfo user={userProfile} />
            }
        </>
    );
}

export default Profile;